#!/bin/bash

# =============================================================================
# Checkpoint System Validation Script
# =============================================================================
# Tests the checkpoint automation system without making actual changes
# =============================================================================

set -euo pipefail

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Colors
readonly GREEN='\033[0;32m'
readonly RED='\033[0;31m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly NC='\033[0m'

# Icons
readonly CHECKMARK="✅"
readonly CROSS="❌"
readonly WARNING="⚠️"
readonly INFO="ℹ️"

print_header() {
    echo -e "${BLUE}═══════════════════════════════════════════════════════════════════════════════${NC}"
    echo -e "                     Checkpoint System Validation"
    echo -e "${BLUE}═══════════════════════════════════════════════════════════════════════════════${NC}"
    echo
}

print_test() {
    echo -en "${BLUE}$1... ${NC}"
}

print_pass() {
    echo -e "${GREEN}${CHECKMARK} PASS${NC}"
}

print_fail() {
    echo -e "${RED}${CROSS} FAIL${NC}"
    if [[ -n "${1:-}" ]]; then
        echo -e "${RED}   Error: $1${NC}"
    fi
}

print_warning() {
    echo -e "${YELLOW}${WARNING} WARNING: $1${NC}"
}

print_info() {
    echo -e "${BLUE}${INFO} $1${NC}"
}

# Test counters
TESTS_RUN=0
TESTS_PASSED=0
TESTS_FAILED=0

run_test() {
    local test_name="$1"
    local test_command="$2"
    
    TESTS_RUN=$((TESTS_RUN + 1))
    print_test "$test_name"
    
    if eval "$test_command" >/dev/null 2>&1; then
        print_pass
        TESTS_PASSED=$((TESTS_PASSED + 1))
        return 0
    else
        print_fail "${3:-}"
        TESTS_FAILED=$((TESTS_FAILED + 1))
        return 1
    fi
}

# =============================================================================
# Test Functions
# =============================================================================

test_script_exists() {
    [[ -f "$SCRIPT_DIR/checkpoint.sh" ]]
}

test_script_executable() {
    [[ -x "$SCRIPT_DIR/checkpoint.sh" ]]
}

test_utils_exists() {
    [[ -f "$SCRIPT_DIR/utils.sh" ]]
}

test_templates_directory() {
    [[ -d "$SCRIPT_DIR/templates" ]]
}

test_implementation_report_template() {
    [[ -f "$SCRIPT_DIR/templates/implementation-report.md" ]]
}

test_git_repository() {
    cd "$PROJECT_ROOT"
    git rev-parse --git-dir >/dev/null 2>&1
}

test_required_dependencies() {
    command -v git >/dev/null && command -v jq >/dev/null
}

test_project_structure() {
    [[ -f "$PROJECT_ROOT/package.json" ]] && \
    [[ -f "$PROJECT_ROOT/CLAUDE.md" ]] && \
    [[ -d "$PROJECT_ROOT/context" ]] && \
    [[ -d "$PROJECT_ROOT/src" ]]
}

test_context_files() {
    [[ -f "$PROJECT_ROOT/context/setup-log.md" ]] && \
    [[ -f "$PROJECT_ROOT/context/development-plan.md" ]] && \
    [[ -f "$PROJECT_ROOT/context/feature-specification.md" ]] && \
    [[ -f "$PROJECT_ROOT/context/tech-stack.md" ]]
}

test_script_help() {
    cd "$PROJECT_ROOT"
    "$SCRIPT_DIR/checkpoint.sh" --help | grep -q "USAGE"
}

test_script_dry_run() {
    cd "$PROJECT_ROOT"
    "$SCRIPT_DIR/checkpoint.sh" \
        --phase "Test Phase" \
        --description "Test Description" \
        --type "update" \
        --dry-run
}

test_utils_functions() {
    # Source utils and test a few functions
    source "$SCRIPT_DIR/utils.sh"
    command_exists "git" && \
    get_current_version >/dev/null
}

# =============================================================================
# Main Test Suite
# =============================================================================

main() {
    print_header
    
    print_info "Running checkpoint system validation tests..."
    echo
    
    # File existence tests
    run_test "Checkpoint script exists" "test_script_exists" "checkpoint.sh not found"
    run_test "Checkpoint script is executable" "test_script_executable" "checkpoint.sh not executable"
    run_test "Utils script exists" "test_utils_exists" "utils.sh not found"
    run_test "Templates directory exists" "test_templates_directory" "templates/ directory not found"
    run_test "Implementation report template exists" "test_implementation_report_template" "implementation-report.md template not found"
    
    echo
    
    # Environment tests
    run_test "Git repository detected" "test_git_repository" "Not in a Git repository"
    run_test "Required dependencies available" "test_required_dependencies" "Missing git or jq"
    
    echo
    
    # Project structure tests
    run_test "Project structure valid" "test_project_structure" "Missing required project files"
    run_test "Context files present" "test_context_files" "Missing context documentation files"
    
    echo
    
    # Functionality tests
    run_test "Script help displays correctly" "test_script_help" "Help command failed"
    run_test "Utils functions load correctly" "test_utils_functions" "Utils script has errors"
    run_test "Dry run mode works" "test_script_dry_run" "Dry run failed"
    
    echo
    
    # Results summary
    echo -e "${BLUE}═══════════════════════════════════════════════════════════════════════════════${NC}"
    echo -e "                              Test Results"
    echo -e "${BLUE}═══════════════════════════════════════════════════════════════════════════════${NC}"
    echo
    echo "Tests Run: $TESTS_RUN"
    echo -e "Tests Passed: ${GREEN}$TESTS_PASSED${NC}"
    echo -e "Tests Failed: ${RED}$TESTS_FAILED${NC}"
    echo
    
    if [[ $TESTS_FAILED -eq 0 ]]; then
        echo -e "${GREEN}${CHECKMARK} All tests passed! Checkpoint system is ready to use.${NC}"
        echo
        print_info "You can now run:"
        echo "  ./scripts/checkpoint.sh --help"
        echo "  ./scripts/checkpoint.sh --quick \"Test checkpoint\""
        echo
        return 0
    else
        echo -e "${RED}${CROSS} Some tests failed. Please review the errors above.${NC}"
        echo
        return 1
    fi
}

# Run the test suite
main "$@"