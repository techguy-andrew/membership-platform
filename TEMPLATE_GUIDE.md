# Template Customization Guide

## Quick Customization

This template is designed to be easily customizable for different project types.

### 1. Branding Changes

- Update colors in `tailwind.config.ts`
- Replace logo and favicon in `public/` directory
- Update brand name throughout the application

### 2. Feature Toggles

Enable/disable features by modifying the configuration:

- **Authentication**: Remove `(auth)` routes and auth components
- **Dashboard**: Remove `(dashboard)` routes and dashboard components
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

```
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
```

## Best Practices

1. **Keep it modular**: Each feature should be self-contained
2. **Use TypeScript**: Maintain type safety throughout
3. **Follow conventions**: Use consistent naming and structure
4. **Document changes**: Update README and documentation
5. **Test thoroughly**: Ensure all features work as expected

## Configuration Files

### Site Configuration (`src/config/site.ts`)

Contains all site-wide settings like name, description, URLs, and social links.

### Feature Toggles (`src/config/features.ts`)

Control which features are enabled in your application.

### Auth Configuration (`src/config/auth.ts`)

Configure authentication providers and settings.

## Customization Examples

### Changing Colors

```typescript
// tailwind.config.ts
const colors = {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  },
};
```

### Adding New Components

```bash
npx shadcn@latest add [component-name]
```

### Custom Hooks

Create new hooks in `src/hooks/` directory following the existing patterns.

### API Routes

Add new API routes in `src/app/api/` following the existing structure.

## Testing

The template includes Jest and React Testing Library setup:

```bash
pnpm test              # Run all tests
pnpm test:watch        # Run tests in watch mode
pnpm test:coverage     # Run tests with coverage
```

## Deployment Checklist

- [ ] Update environment variables
- [ ] Configure domain and SSL
- [ ] Set up analytics
- [ ] Test all features
- [ ] Optimize images and assets
- [ ] Configure error monitoring

## Common Customizations

### 1. Authentication Providers

Edit `src/config/auth.ts` to enable/disable providers.

### 2. Dashboard Views

Add new views in `src/components/dashboard/views/` and update navigation.

### 3. Marketing Pages

Create new pages in `src/app/(marketing)/` for public-facing content.

### 4. API Endpoints

Add new endpoints in `src/app/api/` following REST conventions.

### 5. Styling

- Global styles: `src/app/globals.css`
- Component styles: `src/styles/components.css`
- Animations: `src/styles/animations.css`

## Troubleshooting

### Build Errors

- Check TypeScript errors: `pnpm type-check`
- Verify all dependencies are installed
- Clear `.next` cache and rebuild

### Styling Issues

- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS imports
- Verify component variants are correct

### Authentication Problems

- Verify environment variables are set
- Check NextAuth configuration
- Ensure callback URLs are correct

## Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Shadcn/UI documentation](https://ui.shadcn.com/)
- Search existing issues in the repository
- Create a new issue with detailed information

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This template is licensed under the MIT License. Feel free to use it for personal and commercial projects.
