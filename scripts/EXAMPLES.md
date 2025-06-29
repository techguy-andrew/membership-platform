# Checkpoint System Examples

This document provides practical examples of using the checkpoint automation system for different development scenarios.

## 📋 Table of Contents

- [Quick Start Examples](#quick-start-examples)
- [Feature Development Workflow](#feature-development-workflow)
- [Bug Fix Workflow](#bug-fix-workflow)
- [Documentation Updates](#documentation-updates)
- [Release Management](#release-management)
- [Advanced Usage](#advanced-usage)

## 🚀 Quick Start Examples

### Example 1: Your First Checkpoint

```bash
# Interactive mode (recommended for first time)
./scripts/checkpoint.sh
```

**What happens:**
1. Script prompts for phase name, description, and type
2. Creates backup of all documentation
3. Updates all documentation files with current date
4. Generates implementation report
5. Commits changes with standardized message
6. Pushes to remote repository

### Example 2: Quick Update

```bash
# For minor changes and quick updates
./scripts/checkpoint.sh --quick "Updated component documentation"
```

**Result:** Creates an update-type checkpoint with minimal prompts.

## 🛠️ Feature Development Workflow

### Scenario: Implementing Authentication System

```bash
# Phase 2 completion checkpoint
./scripts/checkpoint.sh \
  --phase "Phase 2" \
  --description "User authentication and session management" \
  --type "feature"
```

**Generated files:**
- `FEATURE_PHASE_2_IMPLEMENTATION_REPORT.md`
- Updated `context/setup-log.md`
- Updated `context/development-plan.md`
- Updated `CLAUDE.md`

**Commit message:**
```
feat: Phase 2 - User authentication and session management

✅ Implemented user authentication and session management
✅ Updated all project documentation
✅ Generated implementation report

Ready for next development phase

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Scenario: Adding Payment Integration

```bash
# Major feature implementation
./scripts/checkpoint.sh \
  --phase "Phase 3" \
  --description "Stripe payment integration with subscription management" \
  --type "feature"
```

### Scenario: Dashboard Enhancement

```bash
# Iterative feature development
./scripts/checkpoint.sh \
  --phase "Phase 2.1" \
  --description "Enhanced dashboard with real-time analytics" \
  --type "feature"
```

## 🐛 Bug Fix Workflow

### Scenario: Critical Bug Fix

```bash
# Hotfix for production issue
./scripts/checkpoint.sh \
  --phase "Hotfix 1.2.1" \
  --description "Fixed user login session timeout issue" \
  --type "bugfix"
```

**Commit message:**
```
fix: Hotfix 1.2.1 - Fixed user login session timeout issue

🐛 Fixed user login session timeout issue
📝 Updated documentation
✅ All tests passing

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Scenario: Multiple Bug Fixes

```bash
# Batch bug fixes
./scripts/checkpoint.sh \
  --phase "Hotfix 1.2.2" \
  --description "Fixed form validation and mobile responsive issues" \
  --type "bugfix"
```

## 📝 Documentation Updates

### Scenario: Documentation Refresh

```bash
# Regular documentation updates
./scripts/checkpoint.sh \
  --phase "Documentation Update" \
  --description "Updated API documentation and code examples" \
  --type "update"
```

### Scenario: Adding New Guides

```bash
# New documentation
./scripts/checkpoint.sh \
  --quick "Added deployment guide and troubleshooting docs"
```

## 🚀 Release Management

### Scenario: Major Version Release

```bash
# Version 1.0 release
./scripts/checkpoint.sh \
  --phase "Release 1.0" \
  --description "First stable release with core features" \
  --type "release"
```

**Commit message:**
```
release: Release 1.0 - First stable release with core features

🚀 Release: First stable release with core features
✅ All features complete and tested
📝 Documentation updated
🎯 Ready for deployment

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Scenario: Beta Release

```bash
# Beta version
./scripts/checkpoint.sh \
  --phase "Beta 0.9" \
  --description "Beta release for user testing" \
  --type "release"
```

## 🔧 Advanced Usage

### Preview Changes (Dry Run)

```bash
# See what would happen without making changes
./scripts/checkpoint.sh \
  --phase "Phase 4" \
  --description "Advanced analytics implementation" \
  --type "feature" \
  --dry-run
```

**Benefits:**
- Preview commit message
- See which files would be updated
- Validate input without making changes

### Local Development (Skip Push)

```bash
# Create checkpoint without pushing to remote
./scripts/checkpoint.sh \
  --phase "Work in Progress" \
  --description "Experimental feature development" \
  --type "update" \
  --skip-push
```

**Use cases:**
- Work in progress commits
- Experimental features
- Local testing

### Automated Workflows

```bash
# For CI/CD pipelines
export CHECKPOINT_PHASE="Automated Build"
export CHECKPOINT_DESCRIPTION="Automated testing and deployment"
export CHECKPOINT_TYPE="update"

./scripts/checkpoint.sh \
  --phase "$CHECKPOINT_PHASE" \
  --description "$CHECKPOINT_DESCRIPTION" \
  --type "$CHECKPOINT_TYPE"
```

## 🔄 Common Workflows

### Daily Development Cycle

```bash
# Morning: Start new feature
./scripts/checkpoint.sh \
  --phase "Phase 2.1" \
  --description "Starting user profile management" \
  --type "update"

# Afternoon: Feature progress
./scripts/checkpoint.sh \
  --quick "Implemented profile editing UI"

# Evening: Feature completion
./scripts/checkpoint.sh \
  --phase "Phase 2.1" \
  --description "Completed user profile management" \
  --type "feature"
```

### Weekly Review Cycle

```bash
# Monday: Week planning
./scripts/checkpoint.sh \
  --quick "Updated development plan for week"

# Friday: Week summary
./scripts/checkpoint.sh \
  --phase "Week Summary" \
  --description "Completed authentication and started payment integration" \
  --type "update"
```

### Sprint Completion

```bash
# End of sprint checkpoint
./scripts/checkpoint.sh \
  --phase "Sprint 3 Complete" \
  --description "User management and dashboard enhancements" \
  --type "feature"
```

## 🛠️ Troubleshooting Examples

### Recovering from Errors

```bash
# If checkpoint fails, restore from backup
ls -la .checkpoint_backup_*  # List available backups
cp -r .checkpoint_backup_20250629_143022/* ./  # Restore specific backup
```

### Validating System

```bash
# Run validation before important checkpoints
./scripts/validate.sh

# Then proceed with checkpoint
./scripts/checkpoint.sh --phase "Critical Release" --description "Production deployment" --type "release"
```

### Testing Changes

```bash
# Always test with dry run first for important changes
./scripts/checkpoint.sh \
  --phase "Production Release" \
  --description "Deploy to production" \
  --type "release" \
  --dry-run

# If satisfied, run without dry-run
./scripts/checkpoint.sh \
  --phase "Production Release" \
  --description "Deploy to production" \
  --type "release"
```

## 📊 Expected Outputs

### Generated Implementation Report Structure

```markdown
# Phase 2 Implementation Report
## User authentication and session management

**Implementation Date:** June 29, 2025
**Status:** Complete - Ready for Next Phase
**Type:** Feature Implementation

## Overview
This report documents the successful implementation of user authentication and session management...

## Technical Implementation Details
### Architecture Decisions
### Key Features Implemented
### Issues Encountered & Resolved
### Implementation Statistics

## Success Metrics Achieved
## Ready for Next Phase
```

### Updated Documentation Files

1. **setup-log.md** - Current status and timeline
2. **development-plan.md** - Phase completion tracking
3. **feature-specification.md** - Feature implementation status
4. **tech-stack.md** - Technology updates
5. **CLAUDE.md** - Project context updates

### Git History

```bash
git log --oneline -5
# 1567c8a feat: Phase 2 - User authentication and session management
# 95239b6 Complete Phase 1: Foundation setup with comprehensive component library
# 2597708 Update documentation to reflect current Phase 1 completion
```

## 💡 Tips and Best Practices

### 1. Consistent Naming
- Use consistent phase naming: "Phase 1", "Phase 2", etc.
- Use descriptive but concise descriptions
- Choose appropriate types for your changes

### 2. Regular Checkpoints
- Create checkpoints at logical completion points
- Don't wait too long between checkpoints
- Use quick mode for minor updates

### 3. Documentation First
- Always ensure your implementation matches your description
- Update inline code comments before creating checkpoints
- Keep documentation current with code changes

### 4. Testing Integration
- Run tests before creating feature checkpoints
- Use dry-run mode to verify changes
- Validate system with `./scripts/validate.sh`

### 5. Team Coordination
- Coordinate checkpoint timing with team members
- Use consistent commit message formatting
- Share implementation reports with stakeholders

---

**Generated with [Claude Code](https://claude.ai/code)**

*Last Updated: June 29, 2025*