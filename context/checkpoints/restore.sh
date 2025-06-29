#!/bin/bash

# =============================================================================
# Checkpoint Restore Script
# =============================================================================
# Auto-generated restore script for checkpoint management
# =============================================================================

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
CHECKPOINTS_DIR="$PROJECT_ROOT/context/checkpoints"
BACKUPS_DIR="$CHECKPOINTS_DIR/backups"
INDEX_FILE="$CHECKPOINTS_DIR/index.json"

# Colors
readonly GREEN='\033[0;32m'
readonly BLUE='\033[0;34m'
readonly YELLOW='\033[1;33m'
readonly NC='\033[0m'

print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_info() { echo -e "${BLUE}ℹ️ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️ $1${NC}"; }

list_checkpoints() {
    echo "Available checkpoints:"
    echo
    
    if [[ ! -f "$INDEX_FILE" ]]; then
        print_warning "No checkpoints found"
        return
    fi
    
    # Parse and display checkpoints from index
    local checkpoints=$(jq -r '.checkpoints[] | "\(.timestamp) | \(.phase) | \(.description)"' "$INDEX_FILE" 2>/dev/null || echo "")
    
    if [[ -z "$checkpoints" ]]; then
        print_warning "No checkpoints found in index"
        return
    fi
    
    echo "$checkpoints" | while IFS='|' read -r timestamp phase description; do
        echo -e "${BLUE}📅 $timestamp${NC}"
        echo -e "   🎯 $phase"
        echo -e "   📝 $description"
        echo
    done
}

restore_checkpoint() {
    local backup_path="$1"
    local full_backup_path="$BACKUPS_DIR/$backup_path"
    
    if [[ ! -d "$full_backup_path" ]]; then
        print_warning "Backup not found: $backup_path"
        return 1
    fi
    
    print_info "Restoring from backup: $backup_path"
    
    # Create restore backup first
    local restore_backup="$CHECKPOINTS_DIR/restore-backup-$(date +"%Y%m%d_%H%M%S")"
    mkdir -p "$restore_backup"
    
    # Backup current state
    if [[ -d "$PROJECT_ROOT/context" ]]; then
        cp -r "$PROJECT_ROOT/context" "$restore_backup/"
    fi
    if [[ -f "$PROJECT_ROOT/CLAUDE.md" ]]; then
        cp "$PROJECT_ROOT/CLAUDE.md" "$restore_backup/"
    fi
    
    # Restore from backup
    if [[ -d "$full_backup_path/context" ]]; then
        rm -rf "$PROJECT_ROOT/context"
        cp -r "$full_backup_path/context" "$PROJECT_ROOT/context"
        print_success "Restored context directory"
    fi
    
    if [[ -f "$full_backup_path/CLAUDE.md" ]]; then
        cp "$full_backup_path/CLAUDE.md" "$PROJECT_ROOT/CLAUDE.md"
        print_success "Restored CLAUDE.md"
    fi
    
    print_success "Restore completed. Previous state backed up to: $restore_backup"
}

case "${1:-}" in
    list|--list|-l)
        list_checkpoints
        ;;
    restore|--restore|-r)
        if [[ -z "${2:-}" ]]; then
            print_warning "Backup path required. Usage: $0 restore <backup-path>"
            exit 1
        fi
        restore_checkpoint "$2"
        ;;
    help|--help|-h)
        echo "Checkpoint Restore Script"
        echo
        echo "Usage:"
        echo "  $0 list                    - List available checkpoints"
        echo "  $0 restore <backup-path>   - Restore from checkpoint"
        echo "  $0 help                    - Show this help"
        echo
        echo "Examples:"
        echo "  $0 list"
        echo "  $0 restore 2025-01-15/09-15-30-phase_1"
        ;;
    *)
        print_warning "Unknown command. Use '$0 help' for usage information."
        exit 1
        ;;
esac
