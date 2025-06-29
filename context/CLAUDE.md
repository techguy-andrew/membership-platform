# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Claude Code Rules

1. THE FEWER LINES OF CODE, THE BETTER  
   The fewer lines of code, the better.
2. PROCEED LIKE A SENIOR DEVELOPER  
   Proceed like a senior developer.  
   (Alternate version: Proceed like a 10x engineer.)
3. DO NOT STOP UNTIL COMPLETE  
   Do not stop working on this until you've implemented this feature fully and completely.
4. THREE REASONING PARAGRAPHS  
   Start by writing three reasoning paragraphs analyzing what the error might be. Do not jump to conclusions.
5. ANSWER IN SHORT  
   Answer in short.
6. DO NOT DELETE COMMENTS  
   Do not delete comments.
7. SUMMARY OF CURRENT STATE  
   Before we proceed, I need you to give me a summary of the current state. Summarize what we just did, which files were updated, and what didn't work. Do not include assumptions or theories—only the facts.
8. UNBIASED 50/50  
   Before you answer, I want you to write two detailed paragraphs, one for each solution. Do not jump to conclusions or commit to either solution until you have fully considered both. Then tell me which solution is obviously better and why.
9. PROPERLY FORMED SEARCH QUERY  
   Your task is to write a one-paragraph search query as if you were instructing a human researcher. Clearly state what to find and request code snippets or technical details when relevant.
10. START WITH UNCERTAINTY  
    You should start the reasoning paragraph with lots of uncertainty and slowly gain confidence as you think about the item more.
11. BE CAREFUL WITH RED HERRINGS  
    Give me the TL;DR of the search results, but be careful. Often the search results contain dangerous and distracting red herrings.
12. ONLY INCLUDE TRULY NECESSARY STEPS  
    Break this large change into the required steps. Only include the truly necessary steps.

## Project Overview

This is a professional Next.js starter kit template designed for rapid development of modern SaaS, membership, and dashboard applications. The template provides a comprehensive foundation with modular architecture, professional UI components, and extensive customization options. It has been transformed from a business-specific application into a reusable, customizable template for the developer community.

## Common Development Commands

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint to check code quality
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run tests with Jest
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage
- `pnpm setup` - Run template setup script for customization

## Tech Stack

### Core Framework

- **Next.js 15.3.4** with App Router - Full-stack React framework
- **React 19.0.0** - Latest React with concurrent features
- **TypeScript 5.x** (strict mode) - Type-safe JavaScript
- **Tailwind CSS 4.x** - Utility-first CSS framework with CSS variables
- **pnpm** - Fast, efficient package manager

### UI Component Library

- **Shadcn/UI** - Modern React component library (15+ components implemented)
- **Radix UI Primitives** - Accessible component foundations
- **Class Variance Authority (CVA)** - Type-safe variant management
- **Lucide React** - Icon library
- **Tailwind Merge** - Utility for merging Tailwind classes
- **clsx** - Conditional class name utility

### Key Dependencies

- **React Hook Form** with Zod validation - Form handling and validation
- **date-fns** - Date utilities
- **react-day-picker** - Date picker component

### Development Tools & Quality

- **ESLint 9.x** with Next.js configuration - Code linting
- **Prettier 3.6.2** - Code formatting
- **Husky 9.1.7** - Git hooks for quality control
- **lint-staged 16.1.2** - Pre-commit linting and formatting
- **Jest 29.7.0** - Unit and integration testing
- **React Testing Library 14.0.0** - Component testing utilities

### Ready for Integration (Not Included by Default)

- **PostgreSQL** with **Prisma ORM** - Database and ORM
- **NextAuth.js v5** - Authentication framework
- **Stripe** - Payment processing
- **Resend** with **React Email** - Email service and templates
- **Socket.io** - Real-time communication
- **Vercel Blob Storage** - File hosting

## Architecture & Code Organization

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── (auth)/            # Authentication routes (login, register, forgot-password)
│   ├── (dashboard)/       # Protected dashboard routes
│   │   ├── billing/       # Billing and subscription management
│   │   ├── blog/          # Blog content management
│   │   ├── events/        # Event management
│   │   ├── live/          # Live streaming features
│   │   ├── membership/    # Membership management
│   │   ├── profile/       # User profile management
│   │   ├── resources/     # Resource library
│   │   ├── settings/      # Application settings
│   │   ├── videos/        # Video content management
│   │   └── layout.tsx     # Dashboard layout with sidebar navigation
│   ├── (public)/          # Public marketing pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── pricing/       # Pricing page
│   │   ├── privacy/       # Privacy policy
│   │   └── terms/         # Terms of service
│   ├── api/               # API routes (auth, users, subscriptions, webhooks)
│   ├── examples/          # Component examples and demos
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with font configuration
│   └── page.tsx           # Professional landing page
├── components/            # React components
│   ├── auth/              # Authentication components
│   │   ├── login-form.tsx # Login form component
│   │   └── register-form.tsx # Registration form component
│   ├── dashboard/         # Dashboard-specific components
│   │   ├── views/         # Dashboard view components (6 views)
│   │   ├── blog-post-card.tsx
│   │   ├── ContentCard.tsx
│   │   ├── event-card.tsx
│   │   ├── FilterBar.tsx
│   │   ├── PageHeader.tsx
│   │   ├── quick-actions.tsx
│   │   ├── Sidebar.tsx
│   │   ├── stats-card.tsx
│   │   ├── StatusBadge.tsx
│   │   └── video-card.tsx
│   ├── forms/             # Form components
│   │   └── contact-form.tsx # Contact form component
│   ├── layout/            # Layout components
│   │   ├── header.tsx     # Navigation header with responsive design
│   │   ├── navbar.tsx     # Main navigation component
│   │   └── footer.tsx     # Site footer
│   ├── marketing/         # Marketing page components
│   └── ui/                # Shadcn/UI component library (15+ components)
│       ├── accordion.tsx  # Collapsible content sections
│       ├── avatar.tsx     # Avatar component system
│       ├── badge.tsx      # Badge component with variants
│       ├── button.tsx     # Button component with variants
│       ├── calendar.tsx   # Date picker component
│       ├── card.tsx       # Card components
│       ├── checkbox.tsx   # Checkbox input component
│       ├── dialog.tsx     # Dialog/modal components
│       ├── dropdown-menu.tsx # Dropdown menu components
│       ├── form.tsx       # Form components with React Hook Form integration
│       ├── input.tsx      # Input component
│       ├── label.tsx      # Label component
│       ├── progress.tsx   # Progress bar component
│       ├── select.tsx     # Dropdown select component
│       └── separator.tsx  # Visual divider component
├── config/                # Configuration files
│   ├── auth.ts           # Auth configuration
│   ├── features.ts       # Feature toggles
│   └── site.ts           # Site configuration
├── hooks/                 # Custom React hooks
│   ├── use-auth.ts       # Authentication hook
│   └── use-local-storage.ts # Local storage hook
├── lib/                   # Utility functions and configurations
│   ├── auth.ts           # Authentication utilities
│   ├── db.ts             # Database utilities (ready for integration)
│   ├── metadata.ts       # SEO metadata utilities
│   ├── utils.ts          # Utility functions (cn helper for class merging)
│   └── validations.ts    # Zod validation schemas
├── styles/                # Additional styles
│   ├── animations.css    # Animation utilities
│   └── components.css    # Component-specific styles
├── types/                 # TypeScript type definitions
│   ├── index.ts          # Global type definitions
│   └── template.ts       # Template configuration types
└── context/               # Project documentation and planning
```

### Component System

- Uses **Shadcn/UI** component library with "new-york" style (15+ components implemented)
- Components built on **Radix UI** primitives for accessibility
- **Class Variance Authority (CVA)** for type-safe variant management
- Consistent design system with CSS variables for theming
- Modular dashboard with 6 implemented views and state-based navigation

### Styling Approach

- **Tailwind CSS 4.x** with CSS variables for theming
- Color scheme based on `zinc` with neutral, professional design
- Component variants defined using CVA patterns
- Global styles in `src/app/globals.css`
- Animation utilities in `src/styles/animations.css`

## Template Features

### Configuration System

- **Site Configuration** (`src/config/site.ts`) - Project metadata, URLs, social links
- **Feature Toggles** (`src/config/features.ts`) - Enable/disable features
- **Auth Configuration** (`src/config/auth.ts`) - Authentication settings
- **Template Variables** (`template-variables.json`) - Customization variables

### Template Customization

- **Setup Script** (`scripts/setup-template.sh`) - Automated template personalization
- **Template Guide** (`TEMPLATE_GUIDE.md`) - Comprehensive usage instructions
- **Component Examples** (`/examples`) - Live component demonstrations
- **Feature Toggles** - Easy enable/disable of features via configuration

## Development Patterns

### Component Creation

- Follow Shadcn/UI patterns for new components
- Use CVA for variant management when creating reusable components
- Implement proper TypeScript interfaces with `VariantProps`
- Include `forwardRef` for components that accept refs
- Maintain template neutrality (avoid business-specific branding)

### Form Handling

- Use React Hook Form with Zod validation schemas
- Leverage the form components from Shadcn/UI
- Follow controlled component patterns
- Implement proper error handling and validation

### Utility Functions

- Use the `cn()` utility from `@/lib/utils` for conditional class merging
- Prefer utility-first approach with Tailwind CSS classes
- Create reusable utilities in `src/lib/` directory
- Follow TypeScript best practices for type safety

### Template Development

- Keep components modular and reusable
- Use configuration-driven approach for customization
- Maintain neutral design for easy branding
- Document all customization options
- Follow established naming conventions

## Current Implementation Status

### ✅ Template Transformation Complete (January 2025)

- **Next.js 15.3.4 Project Setup**: Complete with TypeScript, Tailwind CSS v4, and App Router
- **Shadcn/UI Component Library**: 15+ core components implemented with full variant systems
- **Modular Dashboard System**: 6 implemented views with state-based navigation
- **Dashboard Views**: DashboardOverview, CoursesView, EventsView, LiveStreamsView, ResourcesView, ProfileView
- **Professional Landing Page**: Hero section, features showcase, pricing tiers, and call-to-action
- **Code Quality Tooling**: ESLint, Prettier, Husky, lint-staged, Jest, and React Testing Library
- **Template Customization**: Setup script, template variables, and comprehensive documentation
- **Configuration System**: Centralized configuration with feature toggles
- **Testing Infrastructure**: Jest and React Testing Library for comprehensive testing

#### **Technical Achievements**:

- State-based dashboard navigation (prevents 404 errors)
- Modular, reusable component architecture
- Template-neutral design ready for branding
- Comprehensive configuration system
- Professional development tooling

### 🔄 Ready for Integration (Not Included by Default)

- **Authentication System**: NextAuth.js v5 structure ready
- **Database Integration**: PostgreSQL with Prisma ORM ready for setup
- **Payment Processing**: Stripe integration structure prepared
- **Email Services**: Resend with React Email ready for integration
- **API Routes**: Placeholder endpoints for auth, users, subscriptions, and webhooks

### 📋 Template Distribution (Current Focus)

- **GitHub Repository Setup**: Template repository configuration
- **Documentation Enhancement**: Usage guides, video tutorials, troubleshooting
- **Template Marketplace**: GitHub Template Marketplace submission
- **Community Building**: Support channels and contribution guidelines

## Configuration

### Shadcn/UI Configuration

- Style: "new-york"
- Base color: "zinc"
- CSS variables enabled
- Icon library: Lucide React
- Components installed: 15+ (Accordion, Avatar, Badge, Button, Calendar, Card, Checkbox, Dialog, Dropdown Menu, Form, Input, Label, Progress, Select, Separator)
- Path aliases configured for clean imports

### Path Aliases

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/utils` → `src/lib/utils`
- `@/ui` → `src/components/ui`
- `@/config` → `src/config`
- `@/types` → `src/types`

### Template Variables

- **Project Metadata**: Name, description, version, author
- **Feature Flags**: Authentication, dashboard, marketing, API, database, payments, email
- **Styling Preferences**: Primary color, accent color, theme, font
- **SEO Configuration**: Default title, description, keywords, Open Graph image
- **Site Information**: URLs, social media links, contact information

## Code Quality Standards

- TypeScript strict mode enabled
- ESLint with Next.js configuration
- Component props should be properly typed
- Use React 19 patterns and hooks
- Follow Next.js App Router conventions
- Maintain consistency with existing component patterns
- Write tests for new features
- Follow template-neutral design principles
- Document customization options

## Template Development Guidelines

### When Adding New Features

1. **Keep it Modular**: Features should be self-contained and optional
2. **Use Configuration**: Make features toggleable via `features.ts`
3. **Maintain Neutrality**: Avoid business-specific branding or content
4. **Document Everything**: Update documentation for new features
5. **Add Tests**: Include tests for new functionality
6. **Follow Patterns**: Use established component and code patterns

### When Customizing for Users

1. **Use Template Variables**: Leverage `template-variables.json` for customization
2. **Update Configuration**: Modify `src/config/` files for site-specific settings
3. **Branding Changes**: Update colors, fonts, and assets in appropriate locations
4. **Feature Toggles**: Enable/disable features via configuration
5. **Documentation**: Provide clear customization instructions

### Template Distribution

1. **Quality Assurance**: Ensure all features work correctly
2. **Documentation**: Complete usage guides and examples
3. **Testing**: Comprehensive test coverage
4. **Examples**: Provide clear examples and demos
5. **Support**: Establish support channels and guidelines

---

_Last updated: January 2025_
