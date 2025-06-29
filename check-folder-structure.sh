#!/bin/bash

echo "🔍 Checking membership platform folder structure..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓ Directory exists: $1${NC}"
        return 0
    else
        echo -e "${RED}✗ Directory missing: $1${NC}"
        return 1
    fi
}

# Function to check if file exists
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓ File exists: $1${NC}"
        return 0
    else
        echo -e "${RED}✗ File missing: $1${NC}"
        return 1
    fi
}

# Track success/failure
total_checks=0
failed_checks=0

echo -e "${BLUE}📁 Checking App Router directories...${NC}"

# Auth routes
directories=(
    "src/app/(auth)/login"
    "src/app/(auth)/register"
    "src/app/(auth)/forgot-password"
    "src/app/(dashboard)/dashboard"
    "src/app/(dashboard)/profile"
    "src/app/(dashboard)/billing"
    "src/app/(dashboard)/settings"
    "src/app/(public)/pricing"
    "src/app/(public)/about"
    "src/app/(public)/contact"
    "src/app/api/auth"
    "src/app/api/users"
    "src/app/api/subscriptions"
    "src/app/api/webhooks"
    "src/components/auth"
    "src/components/dashboard"
    "src/components/layout"
    "src/components/forms"
    "src/types"
)

for dir in "${directories[@]}"; do
    check_dir "$dir"
    total_checks=$((total_checks + 1))
    if [ $? -ne 0 ]; then
        failed_checks=$((failed_checks + 1))
    fi
done

echo ""
echo -e "${BLUE}📄 Checking placeholder files...${NC}"

# Files to check
files=(
    "src/app/(auth)/login/page.tsx"
    "src/app/(auth)/register/page.tsx"
    "src/app/(auth)/forgot-password/page.tsx"
    "src/app/(dashboard)/dashboard/page.tsx"
    "src/app/(dashboard)/profile/page.tsx"
    "src/app/(dashboard)/billing/page.tsx"
    "src/app/(dashboard)/settings/page.tsx"
    "src/app/(public)/pricing/page.tsx"
    "src/app/(public)/about/page.tsx"
    "src/app/(public)/contact/page.tsx"
    "src/app/api/auth/route.ts"
    "src/app/api/users/route.ts"
    "src/app/api/subscriptions/route.ts"
    "src/app/api/webhooks/route.ts"
    "src/components/auth/login-form.tsx"
    "src/components/auth/register-form.tsx"
    "src/components/dashboard/stats-card.tsx"
    "src/components/layout/header.tsx"
    "src/components/layout/footer.tsx"
    "src/components/forms/contact-form.tsx"
    "src/lib/auth.ts"
    "src/lib/db.ts"
    "src/lib/validations.ts"
    "src/types/index.ts"
)

for file in "${files[@]}"; do
    check_file "$file"
    total_checks=$((total_checks + 1))
    if [ $? -ne 0 ]; then
        failed_checks=$((failed_checks + 1))
    fi
done

echo ""
echo -e "${BLUE}📋 Summary:${NC}"
echo "Total checks: $total_checks"
echo "Passed: $((total_checks - failed_checks))"
echo "Failed: $failed_checks"

if [ $failed_checks -eq 0 ]; then
    echo -e "${GREEN}🎉 All folder structure checks passed!${NC}"
    echo ""
    echo -e "${BLUE}📊 Project structure overview:${NC}"
    echo "├── src/"
    echo "│   ├── app/"
    echo "│   │   ├── (auth)/          # Authentication pages"
    echo "│   │   ├── (dashboard)/     # Protected dashboard pages"
    echo "│   │   ├── (public)/        # Public marketing pages"
    echo "│   │   └── api/             # API routes"
    echo "│   ├── components/"
    echo "│   │   ├── auth/            # Authentication components"
    echo "│   │   ├── dashboard/       # Dashboard components"
    echo "│   │   ├── layout/          # Layout components"
    echo "│   │   ├── forms/           # Form components"
    echo "│   │   └── ui/              # Shadcn/UI components"
    echo "│   ├── lib/"
    echo "│   │   ├── auth.ts          # Authentication utilities"
    echo "│   │   ├── db.ts            # Database connection"
    echo "│   │   ├── validations.ts   # Zod schemas"
    echo "│   │   └── utils.ts         # General utilities"
    echo "│   └── types/"
    echo "│       └── index.ts         # TypeScript type definitions"
    echo ""
    echo -e "${GREEN}Ready to start development! 🚀${NC}"
    exit 0
else
    echo -e "${RED}❌ Some checks failed. Please review the missing items above.${NC}"
    exit 1
fi