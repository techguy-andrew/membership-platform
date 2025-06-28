export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <button
            onClick={() => (window.location.href = '/')}
            className="mr-6 flex items-center space-x-2"
          >
            <span className="font-bold">MembershipPlatform</span>
          </button>
          <nav className="flex items-center space-x-6 text-sm">
            <a href="/pricing" className="hover:text-foreground/80">
              Pricing
            </a>
            <a href="/about" className="hover:text-foreground/80">
              About
            </a>
            <a href="/contact" className="hover:text-foreground/80">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <a
              href="/login"
              className="text-sm font-medium hover:text-foreground/80"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="text-sm font-medium bg-primary text-primary-foreground px-3 py-1 rounded-md hover:bg-primary/90"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
