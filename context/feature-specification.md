# Feature Specification (Starter Kit Template)

## Core Features

- **Next.js 15** with App Router
- **React 19** with TypeScript (strict mode)
- **Tailwind CSS 4** for styling
- **Shadcn/UI** component library (all core components included)
- **Authentication system** (NextAuth.js ready, forms, hooks)
- **Dashboard architecture** (modular, customizable views)
- **Dynamic SEO metadata** (Open Graph, Twitter Cards, robots)
- **Feature toggles** via `src/config/features.ts`
- **Site configuration** via `src/config/site.ts`
- **Custom hooks** for auth, local storage, etc.
- **Testing setup** (Jest, React Testing Library)
- **Template setup script** for rapid customization
- **Comprehensive documentation** and examples

## Folder Structure

- `src/app/`: App routes, API, examples
- `src/components/`: UI, auth, dashboard, forms, layout, marketing
- `src/config/`: site, features, auth
- `src/hooks/`: use-auth, use-local-storage, etc.
- `src/lib/`: metadata, utils, validations
- `src/types/`: template, user, auth
- `src/styles/`: animations, components

## Configuration

- **Site**: `src/config/site.ts` (branding, URLs, social, contact)
- **Features**: `src/config/features.ts` (enable/disable modules)
- **Auth**: `src/config/auth.ts` (providers, pages, session)

## Customization

- **Branding**: Edit `tailwind.config.ts`, `site.ts`, and assets in `public/`
- **Add features**: Toggle in `features.ts`, add new components/pages
- **Testing**: Use `pnpm test`, `pnpm test:watch`, `pnpm test:coverage`

## Example Implementations

- Example page at `src/app/examples/page.tsx` demonstrates all UI components
- Template guide in `TEMPLATE_GUIDE.md` for onboarding and customization

## Extensibility

- Add new features by creating new config files, hooks, or components
- Easily integrate database, payments, email, analytics as needed

---

_Last updated: [auto-generated]_
