# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a custom membership platform that allows creators, educators, and businesses to build their own branded subscription-based communities. The platform enables content creators to monetize their audience through tiered memberships, exclusive content, and community features while maintaining full ownership of their brand and customer data.

## Common Development Commands

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint to check code quality

## Tech Stack

### Core Framework

- **Next.js 15** with App Router - Full-stack React framework
- **TypeScript** (strict mode) - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern React component library using Radix UI primitives

### Key Dependencies

- **React Hook Form** with Zod validation - Form handling and validation
- **Class Variance Authority (CVA)** - Component variant management
- **Lucide React** - Icon library
- **Tailwind Merge** - Utility for merging Tailwind classes

### Planned Integration Stack

- **PostgreSQL** with **Prisma ORM** - Database and ORM
- **NextAuth.js v5** - Authentication
- **Stripe** - Payment processing
- **Resend** with **React Email** - Email service and templates
- **Socket.io** - Real-time communication
- **Vercel Blob Storage** - File hosting

## Architecture & Code Organization

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with font configuration
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # Shadcn/UI component library
│       ├── button.tsx    # Button component with variants
│       ├── card.tsx      # Card components
│       ├── form.tsx      # Form components
│       └── ...           # Other UI primitives
└── lib/
    └── utils.ts          # Utility functions (cn helper for class merging)
```

### Component System

- Uses **Shadcn/UI** component library with "new-york" style
- Components built on **Radix UI** primitives for accessibility
- **Class Variance Authority (CVA)** for type-safe variant management
- Consistent design system with CSS variables for theming

### Styling Approach

- **Tailwind CSS** with CSS variables for theming
- Color scheme based on `zinc` with dark mode support
- Component variants defined using CVA patterns
- Global styles in `src/app/globals.css`

## Development Patterns

### Component Creation

- Follow Shadcn/UI patterns for new components
- Use CVA for variant management when creating reusable components
- Implement proper TypeScript interfaces with `VariantProps`
- Include `forwardRef` for components that accept refs

### Form Handling

- Use React Hook Form with Zod validation schemas
- Leverage the form components from Shadcn/UI
- Follow controlled component patterns

### Utility Functions

- Use the `cn()` utility from `@/lib/utils` for conditional class merging
- Prefer utility-first approach with Tailwind CSS classes

## Planned Features (Based on Context)

The platform is designed to implement a comprehensive membership system including:

- User authentication and role-based access control
- Tiered membership subscriptions with Stripe integration
- Content management system with access gating
- Community features (forums, messaging)
- Email communication system
- Analytics and reporting
- White-label customization
- Mobile-responsive design

## Configuration

### Shadcn/UI Configuration

- Style: "new-york"
- Base color: "zinc"
- CSS variables enabled
- Icon library: Lucide React
- Path aliases configured for clean imports

### Path Aliases

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/utils` → `src/lib/utils`
- `@/ui` → `src/components/ui`

## Code Quality Standards

- TypeScript strict mode enabled
- ESLint with Next.js configuration
- Component props should be properly typed
- Use React 19 patterns and hooks
- Follow Next.js App Router conventions
- Maintain consistency with existing component patterns
