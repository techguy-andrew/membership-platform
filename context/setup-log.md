# Membership Platform Setup Log

## Overview

This document provides an up-to-date summary of the technology stack and setup configuration for the Membership Platform project. It is intended to help onboard new developers and provide a clear reference for the project's foundational tools and practices.

---

## Tech Stack

- **Framework:** Next.js 15 (with TypeScript)
- **Styling:** Tailwind CSS, Shadcn/UI
- **Component Library:** Shadcn/UI
- **State Management:** React (built-in state, context)
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Database:** (Planned) Supabase with Prisma ORM
- **Authentication:** (Planned) NextAuth.js v5
- **Payments:** (Planned) Stripe
- **Deployment:** (Planned) Vercel

---

## Code Quality & Tooling

- **ESLint:** Configured for Next.js, TypeScript, and Prettier integration
- **Prettier:** Enforced code formatting with project-wide rules
- **Husky:** Git hooks for pre-commit checks
- **lint-staged:** Runs ESLint and Prettier on staged files before commit
- **TypeScript:** Strict type-checking enabled

### Key Configurations

- **.prettierrc**
  - Semi-colons: true
  - Single quotes: true
  - Tab width: 2
  - Trailing commas: es5
  - Print width: 80
  - Bracket spacing: true
  - Arrow parens: avoid
  - End of line: lf

- **ESLint**
  - Extends: next/core-web-vitals, next/typescript, prettier
  - TypeScript and Prettier plugins integrated
  - Strict rules for unused variables, prefer-const, and code style

- **Husky**
  - Pre-commit hook runs lint-staged
  - Ensures only well-formatted, linted code is committed

- **lint-staged**
  - Runs ESLint and Prettier on JS/TS files
  - Formats JSON, Markdown, and YAML files with Prettier

- **Scripts in package.json**
  - `dev`: Start development server
  - `build`: Build for production
  - `start`: Start production server
  - `lint`: Run ESLint
  - `lint:fix`: Run ESLint with auto-fix
  - `format`: Format all files with Prettier
  - `format:check`: Check formatting with Prettier
  - `type-check`: Run TypeScript type checking

- **Verification Script**
  - `check-code-quality-setup.sh`: Verifies ESLint, Prettier, Husky, and lint-staged setup

---

## Project Structure (Key Folders)

- `/src/app` — Main Next.js app directory
- `/src/components/ui` — UI components (Shadcn/UI)
- `/src/lib` — Utility functions
- `/context` — Project documentation and planning
- `/public` — Static assets

---

## Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   ```
2. **Run the development server:**
   ```sh
   pnpm dev
   ```
3. **Check code quality:**
   ```sh
   ./check-code-quality-setup.sh
   ```
4. **Commit code:**
   - Husky will run lint-staged to ensure code quality before commit.

---

## Notes

- The project is in early development. See `context/development-plan.md` for the full roadmap.
- Database, authentication, payments, and deployment are planned for future phases.
- For any issues or onboarding questions, refer to this file and the scripts/configs in the project root.

---

_Last updated: June 2024_
