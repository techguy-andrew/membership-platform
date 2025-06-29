#!/bin/bash

echo "🔍 Checking login page implementation..."

# Check if required files exist
echo "📁 Checking file structure..."

if [ -f "src/app/(auth)/login/page.tsx" ]; then
    echo "✅ Login page exists at src/app/(auth)/login/page.tsx"
else
    echo "❌ Login page missing at src/app/(auth)/login/page.tsx"
    exit 1
fi

if [ -f "src/components/layout/header.tsx" ]; then
    echo "✅ Header component exists at src/components/layout/header.tsx"
else
    echo "❌ Header component missing at src/components/layout/header.tsx"
    exit 1
fi

# Check for required dependencies
echo -e "\n📦 Checking dependencies..."

if grep -q "react-hook-form" package.json; then
    echo "✅ react-hook-form dependency found"
else
    echo "❌ react-hook-form dependency missing"
    exit 1
fi

if grep -q "@hookform/resolvers" package.json; then
    echo "✅ @hookform/resolvers dependency found"
else
    echo "❌ @hookform/resolvers dependency missing"
    exit 1
fi

if grep -q '"zod"' package.json; then
    echo "✅ zod dependency found"
else
    echo "❌ zod dependency missing"
    exit 1
fi

# Check login page content
echo -e "\n🔧 Checking login page implementation..."

if grep -q "useForm" src/app/\(auth\)/login/page.tsx; then
    echo "✅ React Hook Form integration found"
else
    echo "❌ React Hook Form integration missing"
    exit 1
fi

if grep -q "zodResolver" src/app/\(auth\)/login/page.tsx; then
    echo "✅ Zod validation integration found"
else
    echo "❌ Zod validation integration missing"
    exit 1
fi

if grep -q "Card" src/app/\(auth\)/login/page.tsx; then
    echo "✅ Shadcn Card component used"
else
    echo "❌ Shadcn Card component missing"
    exit 1
fi

if grep -q "Input" src/app/\(auth\)/login/page.tsx; then
    echo "✅ Shadcn Input component used"
else
    echo "❌ Shadcn Input component missing"
    exit 1
fi

if grep -q "Button" src/app/\(auth\)/login/page.tsx; then
    echo "✅ Shadcn Button component used"
else
    echo "❌ Shadcn Button component missing"
    exit 1
fi

if grep -q "Header" src/app/\(auth\)/login/page.tsx; then
    echo "✅ Header component integrated"
else
    echo "❌ Header component not integrated"
    exit 1
fi

# Check header component content
echo -e "\n🧭 Checking header component..."

if grep -q "Link" src/components/layout/header.tsx; then
    echo "✅ Next.js Link component used in header"
else
    echo "❌ Next.js Link component missing in header"
    exit 1
fi

if grep -q "/login" src/components/layout/header.tsx; then
    echo "✅ Login link found in header"
else
    echo "❌ Login link missing in header"
    exit 1
fi

if grep -q "/register" src/components/layout/header.tsx; then
    echo "✅ Register link found in header"
else
    echo "❌ Register link missing in header"
    exit 1
fi

# Try to build the project
echo -e "\n🏗️ Testing build..."

if pnpm build > /dev/null 2>&1; then
    echo "✅ Project builds successfully"
else
    echo "❌ Project build failed"
    echo "Run 'pnpm build' to see detailed errors"
    exit 1
fi

echo -e "\n🎉 All checks passed! Login page implementation is complete."
echo "You can now run 'pnpm dev' and visit http://localhost:3000/login to test the login page."