#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Checking Code Quality Setup...${NC}\n"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
        FAILED=1
    fi
}

FAILED=0

# Check if pnpm is installed
echo -e "${YELLOW}Checking package manager...${NC}"
if command_exists pnpm; then
    print_status 0 "pnpm is installed"
else
    print_status 1 "pnpm is not installed"
fi

# Check if dependencies are installed
echo -e "\n${YELLOW}Checking dependencies...${NC}"
if [ -d "node_modules" ]; then
    print_status 0 "node_modules directory exists"
else
    print_status 1 "node_modules directory not found"
fi

# Check if required packages are in package.json
echo -e "\n${YELLOW}Checking required packages in package.json...${NC}"
if grep -q '"prettier"' package.json; then
    print_status 0 "Prettier is in package.json"
else
    print_status 1 "Prettier is not in package.json"
fi

if grep -q '"eslint"' package.json; then
    print_status 0 "ESLint is in package.json"
else
    print_status 1 "ESLint is not in package.json"
fi

if grep -q '"husky"' package.json; then
    print_status 0 "Husky is in package.json"
else
    print_status 1 "Husky is not in package.json"
fi

if grep -q '"lint-staged"' package.json; then
    print_status 0 "lint-staged is in package.json"
else
    print_status 1 "lint-staged is not in package.json"
fi

# Check configuration files
echo -e "\n${YELLOW}Checking configuration files...${NC}"
if [ -f ".prettierrc" ]; then
    print_status 0 ".prettierrc exists"
else
    print_status 1 ".prettierrc not found"
fi

if [ -f ".prettierignore" ]; then
    print_status 0 ".prettierignore exists"
else
    print_status 1 ".prettierignore not found"
fi

if [ -f "eslint.config.mjs" ]; then
    print_status 0 "eslint.config.mjs exists"
else
    print_status 1 "eslint.config.mjs not found"
fi

# Check Husky setup
echo -e "\n${YELLOW}Checking Husky setup...${NC}"
if [ -d ".husky" ]; then
    print_status 0 ".husky directory exists"
else
    print_status 1 ".husky directory not found"
fi

if [ -f ".husky/pre-commit" ]; then
    print_status 0 "pre-commit hook exists"
else
    print_status 1 "pre-commit hook not found"
fi

# Check if pre-commit hook is executable
if [ -x ".husky/pre-commit" ]; then
    print_status 0 "pre-commit hook is executable"
else
    print_status 1 "pre-commit hook is not executable"
fi

# Check package.json scripts
echo -e "\n${YELLOW}Checking package.json scripts...${NC}"
if grep -q '"format"' package.json; then
    print_status 0 "format script exists"
else
    print_status 1 "format script not found"
fi

if grep -q '"lint:fix"' package.json; then
    print_status 0 "lint:fix script exists"
else
    print_status 1 "lint:fix script not found"
fi

if grep -q '"lint-staged"' package.json; then
    print_status 0 "lint-staged configuration exists"
else
    print_status 1 "lint-staged configuration not found"
fi

# Test Prettier
echo -e "\n${YELLOW}Testing Prettier...${NC}"
if pnpm format:check >/dev/null 2>&1; then
    print_status 0 "Prettier check passes"
else
    print_status 1 "Prettier check failed"
fi

# Test ESLint
echo -e "\n${YELLOW}Testing ESLint...${NC}"
if pnpm lint >/dev/null 2>&1; then
    print_status 0 "ESLint check passes"
else
    print_status 1 "ESLint check failed"
fi

# Test TypeScript
echo -e "\n${YELLOW}Testing TypeScript...${NC}"
if pnpm type-check >/dev/null 2>&1; then
    print_status 0 "TypeScript check passes"
else
    print_status 1 "TypeScript check failed"
fi

# Test lint-staged
echo -e "\n${YELLOW}Testing lint-staged...${NC}"
if pnpm lint-staged --dry-run >/dev/null 2>&1; then
    print_status 0 "lint-staged dry run passes"
else
    print_status 1 "lint-staged dry run failed"
fi

# Final summary
echo -e "\n${BLUE}📋 Summary:${NC}"
if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All checks passed! Your code quality setup is working correctly.${NC}"
    echo -e "\n${BLUE}Available commands:${NC}"
    echo -e "  ${YELLOW}pnpm format${NC} - Format all files with Prettier"
    echo -e "  ${YELLOW}pnpm format:check${NC} - Check if files are formatted correctly"
    echo -e "  ${YELLOW}pnpm lint${NC} - Run ESLint"
    echo -e "  ${YELLOW}pnpm lint:fix${NC} - Run ESLint with auto-fix"
    echo -e "  ${YELLOW}pnpm type-check${NC} - Run TypeScript type checking"
    echo -e "\n${BLUE}Git hooks:${NC}"
    echo -e "  ${YELLOW}pre-commit${NC} - Automatically runs lint-staged before commits"
else
    echo -e "${RED}⚠️  Some checks failed. Please review the issues above.${NC}"
    exit 1
fi 