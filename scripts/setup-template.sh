#!/bin/bash

# Next.js Starter Kit Template Setup Script
# This script helps customize the template for new projects

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Next.js Starter Kit Template Setup${NC}"
echo "=================================="

# Get project details
read -p "Enter project name: " PROJECT_NAME
read -p "Enter project description: " PROJECT_DESCRIPTION
read -p "Enter your name: " AUTHOR_NAME
read -p "Enter site URL (e.g., https://example.com): " SITE_URL
read -p "Enter contact email: " CONTACT_EMAIL
read -p "Enter Twitter URL (optional): " TWITTER_URL
read -p "Enter GitHub URL (optional): " GITHUB_URL
read -p "Enter LinkedIn URL (optional): " LINKEDIN_URL
read -p "Enter YouTube URL (optional): " YOUTUBE_URL

# Set defaults for optional fields
TWITTER_URL=${TWITTER_URL:-""}
GITHUB_URL=${GITHUB_URL:-""}
LINKEDIN_URL=${LINKEDIN_URL:-""}
YOUTUBE_URL=${YOUTUBE_URL:-""}
CONTACT_PHONE=""

# Validate required inputs
if [ -z "$PROJECT_NAME" ] || [ -z "$PROJECT_DESCRIPTION" ] || [ -z "$AUTHOR_NAME" ] || [ -z "$SITE_URL" ] || [ -z "$CONTACT_EMAIL" ]; then
    echo -e "${RED}❌ Required fields cannot be empty!${NC}"
    exit 1
fi

echo -e "\n${YELLOW}📝 Updating project files...${NC}"

# Update package.json
sed -i.bak "s/\"name\": \"membership-platform\"/\"name\": \"$PROJECT_NAME\"/" package.json
sed -i.bak "s/\"version\": \"0.1.0\"/\"version\": \"1.0.0\"/" package.json
rm package.json.bak

# Update site configuration
sed -i.bak "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" src/config/site.ts
sed -i.bak "s/{{PROJECT_DESCRIPTION}}/$PROJECT_DESCRIPTION/g" src/config/site.ts
sed -i.bak "s/{{SITE_URL}}/$SITE_URL/g" src/config/site.ts
sed -i.bak "s/{{AUTHOR_NAME}}/$AUTHOR_NAME/g" src/config/site.ts
sed -i.bak "s/{{CONTACT_EMAIL}}/$CONTACT_EMAIL/g" src/config/site.ts
sed -i.bak "s/{{TWITTER_URL}}/$TWITTER_URL/g" src/config/site.ts
sed -i.bak "s/{{GITHUB_URL}}/$GITHUB_URL/g" src/config/site.ts
sed -i.bak "s/{{LINKEDIN_URL}}/$LINKEDIN_URL/g" src/config/site.ts
sed -i.bak "s/{{YOUTUBE_URL}}/$YOUTUBE_URL/g" src/config/site.ts
rm src/config/site.ts.bak

# Update README.md
sed -i.bak "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" README.md
sed -i.bak "s/{{PROJECT_DESCRIPTION}}/$PROJECT_DESCRIPTION/g" README.md
sed -i.bak "s/{{AUTHOR_NAME}}/$AUTHOR_NAME/g" README.md
rm README.md.bak

# Create .env.example
cat > .env.example << EOF
# Authentication
NEXTAUTH_URL=$SITE_URL
NEXTAUTH_SECRET=your-secret-key-here

# Database (optional)
DATABASE_URL=your-database-url-here

# External Services (optional)
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
RESEND_API_KEY=your-resend-api-key

# OAuth Providers (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# App Configuration
NEXT_PUBLIC_APP_URL=$SITE_URL
NEXT_PUBLIC_APP_NAME=$PROJECT_NAME
EOF

# Create template documentation
cat > TEMPLATE_GUIDE.md << EOF
# Template Customization Guide

## Quick Customization

This template is designed to be easily customizable for different project types.

### 1. Branding Changes

- Update colors in \`tailwind.config.ts\`
- Replace logo and favicon in \`public/\` directory
- Update brand name throughout the application

### 2. Feature Toggles

Enable/disable features by modifying the configuration:

- **Authentication**: Remove \`(auth)\` routes and auth components
- **Dashboard**: Remove \`(dashboard)\` routes and dashboard components
- **API Routes**: Remove unused API endpoints

### 3. Adding New Features

- **Database**: Add Prisma and configure database
- **Payments**: Integrate Stripe for payment processing
- **Email**: Add Resend for transactional emails
- **Analytics**: Add Vercel Analytics or Google Analytics

### 4. Deployment

- **Vercel**: Connect your repository for automatic deployment
- **Netlify**: Configure build settings for Netlify deployment
- **Self-hosted**: Build and deploy to your own infrastructure

## Template Structure

\`\`\`
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable React components
│   ├── config/          # Configuration files
│   ├── lib/             # Utility functions and configurations
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript type definitions
│   └── styles/          # Additional styles
├── public/              # Static assets
├── scripts/             # Build and setup scripts
└── docs/               # Documentation
\`\`\`

## Best Practices

1. **Keep it modular**: Each feature should be self-contained
2. **Use TypeScript**: Maintain type safety throughout
3. **Follow conventions**: Use consistent naming and structure
4. **Document changes**: Update README and documentation
5. **Test thoroughly**: Ensure all features work as expected
EOF

echo -e "\n${GREEN}✅ Template setup complete!${NC}"
echo -e "\n${YELLOW} Next steps:${NC}"
echo "1. Review and customize the generated files"
echo "2. Update branding and colors in tailwind.config.ts"
echo "3. Configure environment variables in .env.local"
echo "4. Install additional dependencies as needed"
echo "5. Start development with 'pnpm dev'"

echo -e "\n${BLUE}🎉 Your Next.js starter kit is ready!${NC}" 