# Checks

Validation and quality check scripts for the membership platform.

## Quick Start

```bash
# Run all checks
pnpm run checks

# Or run directly
./scripts/checks/run-checks.sh

# Run individual checks
./scripts/checks/check-folder-structure.sh
./scripts/checks/check-code-quality-setup.sh
```

## Available Checks

### Structure Checks

- `check-folder-structure.sh` - Validates project structure and file organization
- `check-git-repo.sh` - Checks Git repository setup and connectivity

### Quality Checks

- `check-code-quality-setup.sh` - Verifies code quality tools (ESLint, Prettier, etc.)

### UI Checks

- `check-navbar-consistency.sh` - Ensures navbar appears consistently across all pages
- `check-navigation.sh` - Tests all navigation routes and links
- `check-login-page.sh` - Validates login page implementation
- `check-pricing-page.sh` - Checks pricing page features and functionality
- `check-accordion-faq.sh` - Tests FAQ accordion component on about page

## Adding New Checks

1. Create your script in the `checks/` folder
2. Follow the naming convention: `check-feature-name.sh`
3. Make it executable: `chmod +x scripts/checks/your-script.sh`
4. The script will automatically be included in `run-checks.sh`

## Script Structure

Each check script should:

- Start with a descriptive header
- Use clear output formatting
- Provide helpful error messages
- Exit with appropriate status codes

## Usage Examples

```bash
# Run all checks
pnpm run checks

# Run specific check
./scripts/checks/check-folder-structure.sh

# Debug a specific check
bash -x ./scripts/checks/check-code-quality-setup.sh
```

## Integration

The checks are integrated into the development workflow:

- Available via `pnpm run checks`
- Can be run individually for debugging
- Provide comprehensive project validation
