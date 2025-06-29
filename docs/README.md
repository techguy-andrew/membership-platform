# Next.js Starter Kit Template

A modern, production-ready Next.js starter kit with authentication, dashboard, and comprehensive UI components.

## ✨ Features

- **🚀 Next.js 15** - Latest React framework with App Router
- **⚡ React 19** - Latest React with concurrent features
- **🔒 TypeScript** - Type-safe development with strict mode
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 Shadcn/UI** - Beautiful, accessible component library
- **📝 React Hook Form** - Performant forms with validation
- **🔐 Authentication Ready** - NextAuth.js integration structure
- **📊 Dashboard System** - Complete dashboard architecture
- **✨ Code Quality** - ESLint, Prettier, Husky pre-configured
- **🔍 SEO Optimized** - Dynamic metadata and Open Graph support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the template**

   ```bash
   git clone <your-template-repo>
   cd your-project-name
   ```

2. **Run setup script**

   ```bash
   ./scripts/setup-template.sh
   ```

3. **Install dependencies**

   ```bash
   pnpm install
   ```

4. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

5. **Start development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (dashboard)/       # Dashboard routes
│   │   ├── profile/
│   │   ├── settings/
│   │   └── [feature]/
│   ├── (marketing)/       # Public marketing pages
│   │   ├── about/
│   │   ├── contact/
│   │   └── pricing/
│   ├── api/               # API routes
│   │   ├── auth/
│   │   ├── users/
│   │   └── webhooks/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/            # React components
│   ├── ui/               # Shadcn/UI components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   └── marketing/        # Marketing page components
├── config/               # Configuration files
│   ├── site.ts          # Site configuration
│   ├── auth.ts          # Auth configuration
│   └── features.ts      # Feature toggles
├── lib/                  # Utility functions
│   ├── auth.ts          # Authentication utilities
│   ├── db.ts            # Database utilities
│   ├── utils.ts         # General utilities
│   ├── validations.ts   # Form validations
│   └── metadata.ts      # SEO metadata utilities
├── hooks/                # Custom React hooks
│   ├── use-auth.ts      # Authentication hook
│   └── use-local-storage.ts # Local storage hook
├── types/                # TypeScript types
│   ├── index.ts         # Global type definitions
│   ├── auth.ts          # Auth types
│   └── user.ts          # User types
└── styles/               # Additional styles
    ├── animations.css
    └── components.css
```

## ⚙️ Configuration

### Site Configuration

Edit `src/config/site.ts` to customize your site:

```typescript
export const siteConfig = {
  name: 'Your Project Name',
  description: 'Your project description',
  url: 'https://yourdomain.com',
  // ... more configuration
};
```

### Feature Toggles

Control which features are enabled in `src/config/features.ts`:

```typescript
export const features = {
  authentication: { enabled: true },
  dashboard: { enabled: true },
  marketing: { enabled: true },
  // ... more features
};
```

## 🎨 Customization

### 1. Branding & Colors

Update your brand colors in `tailwind.config.ts`:

```typescript
const colors = {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  },
};
```

### 2. Components

All Shadcn/UI components are available in `src/components/ui/`. Add new components:

```bash
npx shadcn@latest add [component-name]
```

### 3. Styling

- **Global styles**: `src/app/globals.css`
- **Component styles**: `src/styles/components.css`
- **Animations**: `src/styles/animations.css`

## 🔐 Authentication

The template includes a complete authentication system:

### Setup

1. **Install NextAuth.js**

   ```bash
   pnpm add next-auth
   ```

2. **Configure providers** in `src/config/auth.ts`

3. **Set environment variables**
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   ```

### Usage

```typescript
import { useAuth } from '@/hooks/use-auth'

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth()

  if (!isAuthenticated) {
    return <LoginForm onSubmit={login} />
  }

  return <Dashboard user={user} />
}
```

## 📊 Dashboard

The dashboard system is modular and easily customizable:

### Views

- **Overview**: Main dashboard with stats and quick actions
- **Profile**: User profile management
- **Settings**: Application settings
- **Analytics**: Data visualization (when enabled)

### Adding New Views

1. Create a new view component in `src/components/dashboard/views/`
2. Add the route in `src/app/(dashboard)/`
3. Update navigation in the sidebar

## 🔍 SEO Optimization

The template includes comprehensive SEO features:

### Dynamic Metadata

```typescript
import { constructPageMetadata } from '@/lib/metadata';

export const metadata = constructPageMetadata({
  title: 'Page Title',
  description: 'Page description',
  image: '/og-image.jpg',
});
```

### Open Graph & Twitter Cards

Automatically generated for all pages with proper metadata.

## 🧪 Testing

### Setup

```bash
pnpm add -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

### Running Tests

```bash
pnpm test
pnpm test:watch
pnpm test:coverage
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Netlify

1. Build command: `pnpm build`
2. Publish directory: `.next`
3. Configure environment variables

### Self-Hosted

1. Build: `pnpm build`
2. Start: `pnpm start`
3. Configure reverse proxy (nginx)

## 📚 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run tests
- `pnpm setup` - Run template setup script

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Shadcn/UI](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

- 📧 Email: [your-email@example.com]
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/your-repo/issues)
- 📖 Documentation: [GitHub Wiki](https://github.com/your-username/your-repo/wiki)
