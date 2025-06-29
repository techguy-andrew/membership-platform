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
   Before we proceed, I need you to give me a summary of the current state. Summarize what we just did, which files were updated, and what didn’t work. Do not include assumptions or theories—only the facts.
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
- **Shadcn/UI** - Modern React component library using Radix UI primitives (15 components implemented)

### Key Dependencies

- **React Hook Form** with Zod validation - Form handling and validation
- **Class Variance Authority (CVA)** - Component variant management
- **Lucide React** - Icon library
- **Tailwind Merge** - Utility for merging Tailwind classes
- **Radix UI Primitives** - Accessible component foundations (Accordion, Avatar, Checkbox, Dialog, Dropdown Menu, Label, Separator, Slot)

### Development Tools & Quality

- **ESLint** with Next.js configuration - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality control
- **lint-staged** - Pre-commit linting and formatting
- **TypeScript** (strict mode) - Type checking

### Planned Integration Stack

- **PostgreSQL** with **Prisma ORM** - Database and ORM (ready for setup)
- **NextAuth.js v5** - Authentication (ready for integration)
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
│   ├── (dashboard)/       # Protected dashboard routes with complete member dashboard
│   │   ├── dashboard/     # Main dashboard view
│   │   ├── blog/          # Blog content (renamed to insights)
│   │   ├── community/     # Community features
│   │   ├── events/        # Event management
│   │   ├── insights/      # Analytics and insights
│   │   ├── live/          # Live streaming features
│   │   ├── resources/     # Resource library
│   │   ├── videos/        # Video content
│   │   └── layout.tsx     # Dashboard layout with sidebar navigation
│   ├── (public)/          # Public marketing pages (about, contact, pricing)
│   ├── api/               # API routes (auth, users, subscriptions, webhooks)
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with font configuration
│   └── page.tsx           # Professional landing page with hero, features, pricing
├── components/            # React components
│   ├── auth/              # Authentication components
│   │   ├── login-form.tsx # Login form component
│   │   └── register-form.tsx # Registration form component
│   ├── dashboard/         # Dashboard-specific components
│   │   ├── views/         # Dashboard view components (8 views)
│   │   ├── Sidebar.tsx    # Navigation sidebar with state management
│   │   ├── PageHeader.tsx # Page header component
│   │   ├── ContentCard.tsx# Reusable content cards
│   │   ├── FilterBar.tsx  # Filtering interface
│   │   ├── StatusBadge.tsx# Status indicators
│   │   └── stats-card.tsx # Reusable statistics card component
│   ├── forms/             # Form components
│   │   └── contact-form.tsx # Contact form component
│   ├── layout/            # Layout components
│   │   ├── header.tsx     # Navigation header with responsive design
│   │   ├── navbar.tsx     # Main navigation component
│   │   └── footer.tsx     # Site footer
│   └── ui/               # Shadcn/UI component library (15 components)
│       ├── accordion.tsx # Collapsible content sections
│       ├── avatar.tsx    # Avatar component system
│       ├── badge.tsx     # Badge component with variants
│       ├── button.tsx    # Button component with variants
│       ├── card.tsx      # Card components
│       ├── checkbox.tsx  # Checkbox input component
│       ├── dialog.tsx    # Dialog/modal components
│       ├── dropdown-menu.tsx # Dropdown menu components
│       ├── form.tsx      # Form components with React Hook Form integration
│       ├── input.tsx     # Input component
│       ├── label.tsx     # Label component
│       ├── separator.tsx # Visual divider component
│       ├── calendar.tsx  # Date picker component
│       ├── progress.tsx  # Progress bar component
│       └── select.tsx    # Dropdown select component
├── lib/                   # Utility functions and configurations
│   ├── auth.ts           # Authentication utilities (planned)
│   ├── db.ts             # Database utilities (planned)
│   ├── utils.ts          # Utility functions (cn helper for class merging)
│   └── validations.ts    # Zod validation schemas (planned)
└── types/
    └── index.ts          # TypeScript type definitions
```

### Component System

- Uses **Shadcn/UI** component library with "new-york" style (15 components implemented)
- Components built on **Radix UI** primitives for accessibility
- **Class Variance Authority (CVA)** for type-safe variant management
- Consistent design system with CSS variables for theming
- Member dashboard with 8 functional views and state-based navigation

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

## Current Implementation Status

### ✅ Phase 1: Foundation (COMPLETED)

- **Next.js 15 Project Setup**: Complete with TypeScript, Tailwind CSS v4, and App Router
- **Shadcn/UI Component Library**: 15 core components implemented (Accordion, Avatar, Badge, Button, Card, Checkbox, Dialog, Dropdown Menu, Form, Input, Label, Separator, Calendar, Progress, Select)
- **Member Dashboard System**: Complete member-focused dashboard with 8 functional views and state-based navigation
- **Dashboard Views**: Dashboard Overview, Courses, Community, Events, Resources, Insights, Live Streams, Profile
- **Elite Business Coaching Branding**: Professional business coaching theme with appropriate content and terminology
- **Professional Landing Page**: Hero section, features showcase, pricing tiers, and call-to-action with modern design
- **Code Quality Tooling**: ESLint, Prettier, Husky, and lint-staged fully configured with automated pre-commit hooks
- **Project Structure**: Organized route groups for auth, dashboard, and public pages with complete implementation
- **Layout Components**: Header, Navbar, Footer, and Sidebar components with responsive design
- **Form Infrastructure**: Contact form and authentication form components ready for integration

#### **Technical Achievements**:

- State-based dashboard navigation (prevents 404 errors)
- Member-focused UI/UX design philosophy
- Comprehensive component architecture with reusable patterns
- Elite Business Coaching Community branding throughout

### 🔄 Phase 2: Authentication (READY TO START)

- **Authentication Forms**: Login and registration form UI components created and styled
- **Route Structure**: Complete authentication routes prepared (login, register, forgot-password)
- **Dashboard Integration**: Member dashboard ready for authentication connection
- **API Routes**: Placeholder API routes for auth, users, subscriptions, and webhooks
- **Planned Integration**: NextAuth.js v5, PostgreSQL/Prisma, Zod validation schemas, and React Hook Form integration

### 📋 Planned Features (Upcoming Phases)

- Tiered membership subscriptions with Stripe integration
- Content management system with access gating
- Community features (forums, messaging)
- Email communication system with Resend
- Analytics and reporting dashboard
- White-label customization options
- Real-time features with Socket.io

## Configuration

### Shadcn/UI Configuration

- Style: "new-york"
- Base color: "zinc"
- CSS variables enabled
- Icon library: Lucide React
- Components installed: 12 (Accordion, Avatar, Badge, Button, Card, Checkbox, Dialog, Dropdown Menu, Form, Input, Label, Separator)
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
