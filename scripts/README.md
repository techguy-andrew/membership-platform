# Development Checkpoint Automation System

A comprehensive automated workflow for managing development checkpoints, documentation updates, and Git operations for the membership platform project.

## 🚀 Quick Start

```bash
# Interactive mode (recommended for first-time users)
./scripts/checkpoint.sh

# Quick checkpoint
./scripts/checkpoint.sh --quick "Bug fixes and improvements"

# Full command line mode
./scripts/checkpoint.sh --phase "Phase 2" --description "Authentication system" --type "feature"
```

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Configuration](#configuration)
- [Templates](#templates)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

The checkpoint automation system streamlines the development workflow by:

- **Automating Documentation Updates**: Keeps all project documentation synchronized
- **Standardizing Git Workflows**: Ensures consistent commit messages and changelog entries
- **Generating Reports**: Creates comprehensive implementation reports for each phase
- **Backup & Recovery**: Protects against errors with automatic backup creation
- **Validation**: Checks project structure and dependencies before proceeding

## ✨ Features

### 🔄 Automated Workflows
- **Documentation Synchronization**: Updates timestamps, phase information, and status across all docs
- **Git Operations**: Handles staging, committing, and pushing with proper error handling
- **Report Generation**: Creates detailed implementation reports with templates
- **Backup System**: Automatic backup and restore capabilities

### 🎨 Customizable Templates
- **Implementation Reports**: Standardized report format with placeholders
- **Commit Messages**: Type-specific commit message templates
- **Documentation Updates**: Consistent formatting across all documentation files

### 🛡️ Safety Features
- **Dry Run Mode**: Preview changes without applying them
- **Backup Creation**: Automatic backup before making changes
- **Rollback Capability**: Restore from backup if errors occur
- **Validation Checks**: Verify project structure and Git status

### 🎛️ Flexible Usage
- **Interactive Mode**: Guided prompts for all required information
- **Command Line Mode**: Full automation with parameters
- **Quick Mode**: Simplified workflow for minor updates

## 🔧 Installation

### Prerequisites

Ensure you have the following tools installed:

```bash
# Required
git --version      # Git version control
jq --version       # JSON processor (install with: brew install jq)

# Recommended
node --version     # Node.js (for project development)
pnpm --version     # Package manager
```

### Setup

1. **Make the script executable** (already done in project):
   ```bash
   chmod +x scripts/checkpoint.sh
   ```

2. **Verify installation**:
   ```bash
   ./scripts/checkpoint.sh --help
   ```

## 📖 Usage

### Interactive Mode

The simplest way to use the checkpoint system:

```bash
./scripts/checkpoint.sh
```

This will guide you through:
1. Phase information input
2. Description and type selection
3. Confirmation of details
4. Automated execution

### Command Line Mode

For automation and CI/CD integration:

```bash
./scripts/checkpoint.sh [OPTIONS]
```

#### Options

| Option | Description | Example |
|--------|-------------|---------|
| `-p, --phase` | Set the phase name | `--phase "Phase 2"` |
| `-d, --description` | Set the description | `--description "Authentication system"` |
| `-t, --type` | Set the type | `--type "feature"` |
| `-q, --quick` | Quick mode with description | `--quick "Bug fixes"` |
| `--dry-run` | Preview without changes | `--dry-run` |
| `--skip-push` | Don't push to remote | `--skip-push` |
| `-h, --help` | Show help message | `--help` |

#### Types

| Type | Use Case | Commit Prefix |
|------|----------|---------------|
| `feature` | New features and major implementations | `feat:` |
| `bugfix` | Bug fixes and corrections | `fix:` |
| `update` | Documentation and minor updates | `docs:` |
| `release` | Version releases and deployments | `release:` |

## 💡 Examples

### Example 1: Feature Implementation

```bash
./scripts/checkpoint.sh \
  --phase "Phase 2" \
  --description "User authentication system" \
  --type "feature"
```

**Result:**
- Updates all documentation with Phase 2 completion
- Generates `FEATURE_PHASE_2_IMPLEMENTATION_REPORT.md`
- Creates commit with message: `feat: Phase 2 - User authentication system`
- Pushes to remote repository

### Example 2: Bug Fix

```bash
./scripts/checkpoint.sh \
  --phase "Hotfix 1.1" \
  --description "Fixed login form validation" \
  --type "bugfix"
```

### Example 3: Documentation Update

```bash
./scripts/checkpoint.sh \
  --quick "Updated API documentation and examples"
```

### Example 4: Dry Run (Preview)

```bash
./scripts/checkpoint.sh \
  --phase "Phase 3" \
  --description "Payment integration" \
  --type "feature" \
  --dry-run
```

### Example 5: Local Only (No Push)

```bash
./scripts/checkpoint.sh \
  --phase "Phase 2" \
  --description "Work in progress" \
  --type "update" \
  --skip-push
```

## ⚙️ Configuration

### Environment Variables

You can set default values using environment variables:

```bash
export CHECKPOINT_DEFAULT_TYPE="feature"
export CHECKPOINT_SKIP_PUSH="false"
export CHECKPOINT_DRY_RUN="false"
```

### Project Structure Requirements

The script expects the following project structure:

```
project-root/
├── context/
│   ├── setup-log.md
│   ├── development-plan.md
│   ├── feature-specification.md
│   └── tech-stack.md
├── scripts/
│   ├── checkpoint.sh
│   ├── utils.sh
│   └── templates/
├── CLAUDE.md
├── package.json
└── src/
```

## 📝 Templates

### Implementation Report Template

Located at `scripts/templates/implementation-report.md`, this template creates comprehensive reports for each checkpoint.

**Variables supported:**
- `{{PHASE}}` - Phase name
- `{{DESCRIPTION}}` - Phase description
- `{{DATE}}` - Current date
- `{{TYPE}}` - Implementation type
- And many more...

### Commit Message Templates

The script generates commit messages based on the type:

#### Feature Template
```
feat: Phase 2 - Authentication system

✅ Implemented authentication system
✅ Updated all project documentation
✅ Generated implementation report

Ready for next development phase

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

#### Bugfix Template
```
fix: Hotfix 1.1 - Login form validation

🐛 Fixed login form validation
📝 Updated documentation
✅ All tests passing

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## 🔍 What Gets Updated

### Documentation Files

1. **`context/setup-log.md`**
   - Last updated timestamp
   - Current status and phase
   - Implementation details

2. **`context/development-plan.md`**
   - Phase completion status
   - Timeline updates
   - Progress tracking

3. **`context/feature-specification.md`**
   - Feature implementation status
   - New features and capabilities

4. **`context/tech-stack.md`**
   - Technology stack updates
   - Component counts
   - Version information

5. **`CLAUDE.md`**
   - Current implementation status
   - Project overview updates

### Generated Files

- **Implementation Report**: `{TYPE}_{PHASE}_IMPLEMENTATION_REPORT.md`
- **Backup Directory**: `.checkpoint_backup_{timestamp}/`

## 🛠️ Troubleshooting

### Common Issues

#### Issue: "Not in a Git repository"
**Solution:** Ensure you're running the script from within a Git repository.

#### Issue: "Missing required dependencies"
**Solution:** Install missing dependencies:
```bash
# macOS
brew install jq

# Ubuntu/Debian
sudo apt-get install jq

# CentOS/RHEL
sudo yum install jq
```

#### Issue: "Uncommitted changes detected"
**Solution:** Either commit existing changes or use the `--force` option to continue anyway.

#### Issue: "Permission denied"
**Solution:** Make sure the script is executable:
```bash
chmod +x scripts/checkpoint.sh
```

### Recovery

If something goes wrong, the script automatically creates backups:

```bash
# Manual restore from backup
cp .checkpoint_backup_{timestamp}/context/* context/
cp .checkpoint_backup_{timestamp}/CLAUDE.md ./
```

### Debug Mode

For troubleshooting, run with verbose output:

```bash
bash -x ./scripts/checkpoint.sh --dry-run --phase "Test" --description "Debug run" --type "update"
```

## 🤝 Contributing

To extend the checkpoint system:

1. **Add new templates** in `scripts/templates/`
2. **Extend utility functions** in `scripts/utils.sh`
3. **Update documentation** in this README

### Adding New Template Variables

1. Edit the template file to include `{{NEW_VARIABLE}}`
2. Update the script to provide the variable value
3. Test with `--dry-run` mode

### Adding New Checkpoint Types

1. Add the type to the validation in `parse_arguments()`
2. Create a new commit message template in `generate_commit_message()`
3. Update this README with the new type

## 📄 License

This automation system is part of the membership platform project and follows the same license terms.

---

**Generated with [Claude Code](https://claude.ai/code)**

*Last Updated: June 29, 2025*