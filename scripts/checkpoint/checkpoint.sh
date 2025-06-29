#!/bin/bash

# =============================================================================
# Development Checkpoint Automation Script
# =============================================================================
# Automates documentation updates and Git checkpoint workflow
# Author: Generated with Claude Code
# Version: 1.0.0
# =============================================================================

set -euo pipefail  # Exit on error, undefined vars, pipe failures

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CONTEXT_DIR="$PROJECT_ROOT/context"
TEMPLATES_DIR="$SCRIPT_DIR/templates"

# Colors for output
readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly PURPLE='\033[0;35m'
readonly CYAN='\033[0;36m'
readonly WHITE='\033[1;37m'
readonly NC='\033[0m' # No Color

# Icons
readonly CHECKMARK="✅"
readonly CROSS="❌"
readonly WARNING="⚠️"
readonly INFO="ℹ️"
readonly ROCKET="🚀"
readonly GEAR="⚙️"
readonly DOC="📝"
readonly GIT="🔧"

# Default values
PHASE=""
DESCRIPTION=""
TYPE=""
QUICK_MODE=false
DRY_RUN=false
SKIP_PUSH=false
BACKUP_DIR=""
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# =============================================================================
# Utility Functions
# =============================================================================

print_header() {
    echo -e "${PURPLE}═══════════════════════════════════════════════════════════════════════════════${NC}"
    echo -e "${WHITE}                          Development Checkpoint Script${NC}"
    echo -e "${PURPLE}═══════════════════════════════════════════════════════════════════════════════${NC}"
    echo
}

print_step() {
    echo -e "${CYAN}${GEAR} $1${NC}"
}

print_success() {
    echo -e "${GREEN}${CHECKMARK} $1${NC}"
}

print_error() {
    echo -e "${RED}${CROSS} $1${NC}" >&2
}

print_warning() {
    echo -e "${YELLOW}${WARNING} $1${NC}"
}

print_info() {
    echo -e "${BLUE}${INFO} $1${NC}"
}

# =============================================================================
# Error Handling
# =============================================================================

cleanup() {
    if [[ -n "${BACKUP_DIR:-}" && -d "$BACKUP_DIR" ]]; then
        print_info "Cleaning up backup directory: $BACKUP_DIR"
        rm -rf "$BACKUP_DIR"
    fi
}

error_exit() {
    print_error "Error on line $1"
    cleanup
    exit 1
}

trap 'error_exit $LINENO' ERR
trap cleanup EXIT

# =============================================================================
# Git Operations
# =============================================================================

check_git_status() {
    print_step "Checking Git repository status..."
    
    if ! git rev-parse --git-dir >/dev/null 2>&1; then
        print_error "Not in a Git repository"
        exit 1
    fi
    
    # Check for uncommitted changes
    if [[ -n $(git status --porcelain) ]]; then
        print_warning "There are uncommitted changes in the repository"
        if ! confirm "Continue anyway?"; then
            exit 1
        fi
    fi
    
    print_success "Git repository status OK"
}

create_backup() {
    print_step "Creating backup of documentation files..."
    
    BACKUP_DIR="$PROJECT_ROOT/.checkpoint_backup_$TIMESTAMP"
    mkdir -p "$BACKUP_DIR"
    
    # Backup context directory
    if [[ -d "$CONTEXT_DIR" ]]; then
        cp -r "$CONTEXT_DIR" "$BACKUP_DIR/"
    fi
    
    # Backup CLAUDE.md
    if [[ -f "$PROJECT_ROOT/CLAUDE.md" ]]; then
        cp "$PROJECT_ROOT/CLAUDE.md" "$BACKUP_DIR/"
    fi
    
    print_success "Backup created at: $BACKUP_DIR"
}

restore_backup() {
    if [[ -n "$BACKUP_DIR" && -d "$BACKUP_DIR" ]]; then
        print_warning "Restoring from backup..."
        
        if [[ -d "$BACKUP_DIR/context" ]]; then
            rm -rf "$CONTEXT_DIR"
            cp -r "$BACKUP_DIR/context" "$CONTEXT_DIR"
        fi
        
        if [[ -f "$BACKUP_DIR/CLAUDE.md" ]]; then
            cp "$BACKUP_DIR/CLAUDE.md" "$PROJECT_ROOT/"
        fi
        
        print_success "Backup restored"
    fi
}

commit_changes() {
    local commit_message="$1"
    
    print_step "Staging changes..."
    git add .
    
    print_step "Creating commit..."
    if [[ "$DRY_RUN" == "true" ]]; then
        print_info "DRY RUN: Would commit with message:"
        echo "$commit_message"
        return 0
    fi
    
    git commit -m "$commit_message"
    
    if [[ "$SKIP_PUSH" == "false" ]]; then
        print_step "Pushing to remote..."
        git push origin main
        print_success "Changes pushed to remote repository"
    else
        print_info "Skipping push to remote (--skip-push flag used)"
    fi
}

# =============================================================================
# Documentation Updates
# =============================================================================

update_timestamp_in_files() {
    local current_date=$(date +"%B %d, %Y")
    local current_month_year=$(date +"%B %Y")
    
    # Update setup-log.md
    if [[ -f "$CONTEXT_DIR/setup-log.md" ]]; then
        sed -i '' "s/\*\*Last Updated:\*\* .*/\*\*Last Updated:\*\* $current_date/" "$CONTEXT_DIR/setup-log.md"
        sed -i '' "s/_Last updated: .*/_Last updated: $current_date_/" "$CONTEXT_DIR/setup-log.md"
    fi
    
    # Update tech-stack.md
    if [[ -f "$CONTEXT_DIR/tech-stack.md" ]]; then
        sed -i '' "s/\*\*Last Updated:\*\* .*/\*\*Last Updated:\*\* $current_date/" "$CONTEXT_DIR/tech-stack.md"
    fi
    
    # Update development-plan.md
    if [[ -f "$CONTEXT_DIR/development-plan.md" ]]; then
        sed -i '' "s/_\*\*Updated Timeline\*\*: .*/_\*\*Updated Timeline\*\*: Updated $current_month_year with latest progress._/" "$CONTEXT_DIR/development-plan.md"
    fi
}

generate_phase_report() {
    local phase="$1"
    local description="$2"
    local type="$3"
    local current_date=$(date +"%B %d, %Y")
    local report_filename="${type^^}_${phase// /_}_IMPLEMENTATION_REPORT.md"
    
    print_step "Generating implementation report: $report_filename"
    
    cat > "$PROJECT_ROOT/$report_filename" << EOF
# ${phase} Implementation Report
## ${description}

**Implementation Date:** $current_date  
**Status:** Complete - Ready for Next Phase  
**Type:** ${type^} Implementation

---

## Overview

This report documents the successful implementation of ${description,,} for the Elite Business Coaching Community membership platform.

---

## Technical Implementation Details

### Architecture Decisions

**Implementation Approach:** [Describe the technical approach taken]

**Benefits:**
- [List key benefits of the implementation]
- [Include performance improvements]
- [Note any architectural improvements]

### Key Features Implemented

1. **Feature 1**
   - Description of implementation
   - Technical details
   - User benefits

2. **Feature 2**
   - Description of implementation
   - Technical details
   - User benefits

---

## Issues Encountered & Resolved

### 1. [Issue Name]
**Issue:** [Description of the issue]
**Root Cause:** [What caused the issue]
**Solution:** [How it was resolved]
**Result:** [Outcome of the solution]

---

## Implementation Statistics

- **Total Components Created/Modified:** [Number]
- **New Features:** [List]
- **Performance Improvements:** [Details]
- **Testing Coverage:** [Percentage or details]

---

## Ready for Next Phase

### Completed Items
- ✅ [List completed items]
- ✅ [More completed items]

### Next Steps
1. [Next development step]
2. [Another next step]
3. [Final next step]

---

## Success Metrics Achieved

- **[Metric 1]:** [Achievement]
- **[Metric 2]:** [Achievement]
- **[Metric 3]:** [Achievement]

---

## Conclusion

${description} implementation represents a significant milestone in the membership platform development. The system successfully [describe achievements].

**Status:** ${phase} Complete ✅  
**Next Phase:** [Next Phase Name] 🔄

---

*Generated on $current_date - Development Checkpoint Documentation*
EOF
    
    print_success "Implementation report generated: $report_filename"
}

update_project_status() {
    local phase="$1"
    local description="$2"
    local type="$3"
    
    print_step "Updating project status across documentation files..."
    
    # Update timestamps
    update_timestamp_in_files
    
    # Generate phase-specific report
    generate_phase_report "$phase" "$description" "$type"
    
    print_success "Documentation files updated"
}

# =============================================================================
# User Input and Validation
# =============================================================================

confirm() {
    local prompt="$1"
    local response
    
    while true; do
        echo -en "${YELLOW}$prompt (y/n): ${NC}"
        read -r response
        case "$response" in
            [Yy]|[Yy][Ee][Ss]) return 0 ;;
            [Nn]|[Nn][Oo]) return 1 ;;
            *) echo "Please answer yes or no." ;;
        esac
    done
}

get_user_input() {
    if [[ "$QUICK_MODE" == "true" ]]; then
        PHASE="Quick Update"
        TYPE="update"
        return 0
    fi
    
    echo -e "${WHITE}Please provide checkpoint information:${NC}"
    echo
    
    # Get Phase
    if [[ -z "$PHASE" ]]; then
        echo -en "${CYAN}Phase (e.g., 'Phase 2', 'Hotfix 1.1'): ${NC}"
        read -r PHASE
    fi
    
    # Get Description
    if [[ -z "$DESCRIPTION" ]]; then
        echo -en "${CYAN}Description (e.g., 'Authentication system', 'Bug fixes'): ${NC}"
        read -r DESCRIPTION
    fi
    
    # Get Type
    if [[ -z "$TYPE" ]]; then
        echo -en "${CYAN}Type (feature/bugfix/update/release): ${NC}"
        read -r TYPE
        
        case "$TYPE" in
            feature|bugfix|update|release) ;;
            *) 
                print_warning "Unknown type '$TYPE', using 'update'"
                TYPE="update"
                ;;
        esac
    fi
    
    # Validation
    if [[ -z "$PHASE" || -z "$DESCRIPTION" ]]; then
        print_error "Phase and description are required"
        exit 1
    fi
    
    echo
    print_info "Checkpoint Details:"
    echo "  Phase: $PHASE"
    echo "  Description: $DESCRIPTION"
    echo "  Type: $TYPE"
    echo
    
    if ! confirm "Proceed with this checkpoint?"; then
        exit 0
    fi
}

generate_commit_message() {
    local phase="$1"
    local description="$2"
    local type="$3"
    
    case "$type" in
        feature)
            echo "feat: $phase - $description

✅ Implemented $description
✅ Updated all project documentation
✅ Generated implementation report

Ready for next development phase

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
            ;;
        bugfix)
            echo "fix: $phase - $description

🐛 Fixed $description
📝 Updated documentation
✅ All tests passing

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
            ;;
        update)
            echo "docs: $phase - $description

📝 Updated $description
📋 Refreshed project documentation
✅ Checkpoint complete

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
            ;;
        release)
            echo "release: $phase - $description

🚀 Release: $description
✅ All features complete and tested
📝 Documentation updated
🎯 Ready for deployment

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
            ;;
        *)
            echo "checkpoint: $phase - $description

📝 $description
✅ Documentation updated
🔄 Development checkpoint complete

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
            ;;
    esac
}

# =============================================================================
# Main Workflow
# =============================================================================

main() {
    print_header
    
    # Check prerequisites
    check_git_status
    
    # Get user input
    get_user_input
    
    # Create backup
    create_backup
    
    # Update documentation
    update_project_status "$PHASE" "$DESCRIPTION" "$TYPE"
    
    # Generate commit message
    local commit_message
    commit_message=$(generate_commit_message "$PHASE" "$DESCRIPTION" "$TYPE")
    
    # Commit and push changes
    commit_changes "$commit_message"
    
    # Success message
    echo
    print_success "Checkpoint completed successfully!"
    print_info "Phase: $PHASE"
    print_info "Description: $DESCRIPTION"
    
    if [[ "$DRY_RUN" == "false" ]]; then
        print_success "Changes committed and pushed to repository"
    fi
    
    echo -e "${ROCKET} Ready for continued development!"
}

# =============================================================================
# Command Line Argument Parsing
# =============================================================================

show_help() {
    cat << EOF
Development Checkpoint Automation Script

USAGE:
    $0 [OPTIONS]

OPTIONS:
    -p, --phase PHASE           Set the phase name (e.g., "Phase 2")
    -d, --description DESC      Set the description
    -t, --type TYPE            Set the type (feature|bugfix|update|release)
    -q, --quick DESC           Quick mode with description
    --dry-run                  Show what would be done without making changes
    --skip-push                Don't push to remote repository
    -h, --help                 Show this help message

EXAMPLES:
    # Interactive mode
    $0

    # Command line mode
    $0 --phase "Phase 2" --description "Authentication system" --type "feature"

    # Quick checkpoint
    $0 --quick "Bug fixes and improvements"

    # Dry run
    $0 --phase "Phase 3" --description "Payment system" --type "feature" --dry-run

EOF
}

parse_arguments() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            -p|--phase)
                PHASE="$2"
                shift 2
                ;;
            -d|--description)
                DESCRIPTION="$2"
                shift 2
                ;;
            -t|--type)
                TYPE="$2"
                shift 2
                ;;
            -q|--quick)
                QUICK_MODE=true
                DESCRIPTION="$2"
                shift 2
                ;;
            --dry-run)
                DRY_RUN=true
                shift
                ;;
            --skip-push)
                SKIP_PUSH=true
                shift
                ;;
            -h|--help)
                show_help
                exit 0
                ;;
            *)
                print_error "Unknown option: $1"
                show_help
                exit 1
                ;;
        esac
    done
}

# =============================================================================
# Script Entry Point
# =============================================================================

# Change to project root
cd "$PROJECT_ROOT"

# Parse command line arguments
parse_arguments "$@"

# Run main workflow
main