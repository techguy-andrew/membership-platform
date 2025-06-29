#!/bin/bash

# =============================================================================
# Utility Functions for Checkpoint Automation
# =============================================================================

# Get current project statistics
get_project_stats() {
    local stats_file="/tmp/project_stats_$$.json"
    
    # Count components
    local component_count=0
    if [[ -d "src/components/ui" ]]; then
        component_count=$(find src/components/ui -name "*.tsx" | wc -l | tr -d ' ')
    fi
    
    # Count total TypeScript files
    local ts_files=0
    if [[ -d "src" ]]; then
        ts_files=$(find src -name "*.tsx" -o -name "*.ts" | wc -l | tr -d ' ')
    fi
    
    # Count total lines of code
    local total_loc=0
    if [[ -d "src" ]]; then
        total_loc=$(find src -name "*.tsx" -o -name "*.ts" | xargs wc -l | tail -1 | awk '{print $1}')
    fi
    
    # Get package.json dependencies count
    local deps_count=0
    if [[ -f "package.json" ]]; then
        deps_count=$(jq '.dependencies | length' package.json 2>/dev/null || echo "0")
    fi
    
    # Create JSON output
    cat > "$stats_file" << EOF
{
    "component_count": $component_count,
    "typescript_files": $ts_files,
    "total_lines_of_code": $total_loc,
    "dependencies_count": $deps_count,
    "last_updated": "$(date -Iseconds)"
}
EOF
    
    echo "$stats_file"
}

# Extract git statistics
get_git_stats() {
    local since_date="$1"
    local stats_file="/tmp/git_stats_$$.json"
    
    # Get commit count since date
    local commit_count=0
    if [[ -n "$since_date" ]]; then
        commit_count=$(git rev-list --count --since="$since_date" HEAD 2>/dev/null || echo "0")
    else
        commit_count=$(git rev-list --count HEAD 2>/dev/null || echo "0")
    fi
    
    # Get files changed in last commit
    local files_changed=0
    files_changed=$(git diff --name-only HEAD~1 HEAD 2>/dev/null | wc -l | tr -d ' ')
    
    # Get lines added/removed in last commit
    local lines_added=0
    local lines_removed=0
    if git log -1 --pretty="" --numstat >/dev/null 2>&1; then
        local stats
        stats=$(git log -1 --pretty="" --numstat | awk '{added+=$1; removed+=$2} END {print added " " removed}')
        lines_added=$(echo "$stats" | awk '{print $1}')
        lines_removed=$(echo "$stats" | awk '{print $2}')
    fi
    
    cat > "$stats_file" << EOF
{
    "commit_count": $commit_count,
    "files_changed_last_commit": $files_changed,
    "lines_added_last_commit": $lines_added,
    "lines_removed_last_commit": $lines_removed,
    "current_branch": "$(git branch --show-current 2>/dev/null || echo 'unknown')"
}
EOF
    
    echo "$stats_file"
}

# Validate project structure
validate_project_structure() {
    local errors=()
    
    # Check for required files
    [[ ! -f "package.json" ]] && errors+=("Missing package.json")
    [[ ! -f "CLAUDE.md" ]] && errors+=("Missing CLAUDE.md")
    [[ ! -d "context" ]] && errors+=("Missing context directory")
    [[ ! -d "src" ]] && errors+=("Missing src directory")
    
    # Check for required context files
    [[ ! -f "context/setup-log.md" ]] && errors+=("Missing context/setup-log.md")
    [[ ! -f "context/development-plan.md" ]] && errors+=("Missing context/development-plan.md")
    [[ ! -f "context/feature-specification.md" ]] && errors+=("Missing context/feature-specification.md")
    [[ ! -f "context/tech-stack.md" ]] && errors+=("Missing context/tech-stack.md")
    
    if [[ ${#errors[@]} -gt 0 ]]; then
        printf '%s\n' "${errors[@]}"
        return 1
    fi
    
    return 0
}

# Generate automatic changelog entry
generate_changelog_entry() {
    local phase="$1"
    local description="$2"
    local type="$3"
    local date="$4"
    
    cat << EOF

## [$phase] - $date

### ${type^}
- $description

### Technical Changes
- Updated all project documentation
- Generated implementation report
- Automated checkpoint workflow

### Files Modified
$(git diff --name-only HEAD~1 HEAD 2>/dev/null | sed 's/^/- /' || echo "- [Unable to determine modified files]")

EOF
}

# Check for uncommitted changes with detailed info
check_working_directory() {
    local status_output
    status_output=$(git status --porcelain 2>/dev/null)
    
    if [[ -n "$status_output" ]]; then
        echo "Uncommitted changes detected:"
        echo "$status_output"
        return 1
    fi
    
    return 0
}

# Backup specific files
backup_file() {
    local file="$1"
    local backup_dir="$2"
    
    if [[ -f "$file" ]]; then
        local backup_path="$backup_dir/$(basename "$file").backup"
        cp "$file" "$backup_path"
        echo "Backed up: $file -> $backup_path"
    fi
}

# Restore specific files
restore_file() {
    local file="$1"
    local backup_dir="$2"
    
    local backup_path="$backup_dir/$(basename "$file").backup"
    if [[ -f "$backup_path" ]]; then
        cp "$backup_path" "$file"
        echo "Restored: $backup_path -> $file"
    fi
}

# Template variable replacement
replace_template_vars() {
    local template_file="$1"
    local output_file="$2"
    shift 2
    local vars=("$@")
    
    cp "$template_file" "$output_file"
    
    for var in "${vars[@]}"; do
        local key="${var%%=*}"
        local value="${var#*=}"
        sed -i '' "s|{{$key}}|$value|g" "$output_file"
    done
}

# Progress bar function
show_progress() {
    local current="$1"
    local total="$2"
    local width=50
    local percentage=$((current * 100 / total))
    local filled=$((current * width / total))
    local empty=$((width - filled))
    
    printf "\r["
    printf "%*s" "$filled" | tr ' ' '='
    printf "%*s" "$empty" | tr ' ' '-'
    printf "] %d%% (%d/%d)" "$percentage" "$current" "$total"
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Validate required tools
check_dependencies() {
    local missing=()
    
    command_exists git || missing+=("git")
    command_exists jq || missing+=("jq (for JSON processing)")
    
    if [[ ${#missing[@]} -gt 0 ]]; then
        echo "Missing required dependencies:"
        printf '  - %s\n' "${missing[@]}"
        return 1
    fi
    
    return 0
}

# Get semantic version from package.json
get_current_version() {
    if [[ -f "package.json" ]]; then
        jq -r '.version // "0.0.0"' package.json
    else
        echo "0.0.0"
    fi
}

# Bump semantic version
bump_version() {
    local version="$1"
    local bump_type="$2"  # major, minor, patch
    
    local major minor patch
    IFS='.' read -r major minor patch <<< "$version"
    
    case "$bump_type" in
        major)
            echo "$((major + 1)).0.0"
            ;;
        minor)
            echo "$major.$((minor + 1)).0"
            ;;
        patch)
            echo "$major.$minor.$((patch + 1))"
            ;;
        *)
            echo "$version"
            ;;
    esac
}

# Cleanup temporary files
cleanup_temp_files() {
    rm -f /tmp/project_stats_$$.json
    rm -f /tmp/git_stats_$$.json
}

# Set up trap for cleanup
trap cleanup_temp_files EXIT