import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    MP
                  </span>
                </div>
                <span className="font-bold text-xl">MembershipPro</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            🚀 Launch Your Membership Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Build Your
            <span className="text-primary"> Membership Empire</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Create, launch, and scale your membership platform with powerful
            tools for content creators, educators, and businesses. Own your
            audience, control your brand, and maximize your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you build, grow, and monetize
            your membership community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <CardTitle>Member Management</CardTitle>
              <CardDescription>
                Complete control over your community with advanced user
                management, roles, and permissions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <CardTitle>Payment Processing</CardTitle>
              <CardDescription>
                Seamless payment integration with Stripe, multiple pricing
                tiers, and automated billing.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <CardTitle>Content Management</CardTitle>
              <CardDescription>
                Organize and deliver content with advanced CMS, video streaming,
                and file management.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <CardTitle>Community Features</CardTitle>
              <CardDescription>
                Build engagement with forums, direct messaging, and real-time
                community interactions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <CardTitle>Analytics & Insights</CardTitle>
              <CardDescription>
                Track revenue, member engagement, and growth with comprehensive
                analytics dashboard.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <CardTitle>White-Label Branding</CardTitle>
              <CardDescription>
                Customize every aspect of your platform with your brand colors,
                logo, and domain.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-muted/30"
      >
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. Scale up as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Starter</CardTitle>
              <div className="space-y-2">
                <div className="text-3xl font-bold">$29</div>
                <div className="text-muted-foreground">per month</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Up to 1,000 members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Basic content management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Email support</span>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Professional</CardTitle>
              <div className="space-y-2">
                <div className="text-3xl font-bold">$79</div>
                <div className="text-muted-foreground">per month</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Up to 10,000 members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Priority support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Custom branding</span>
                </div>
              </div>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <div className="space-y-2">
                <div className="text-3xl font-bold">$199</div>
                <div className="text-muted-foreground">per month</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Unlimited members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Advanced integrations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Dedicated support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Custom development</span>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Membership Platform?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of creators who are already building successful
              membership businesses with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                Start Your Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    MP
                  </span>
                </div>
                <span className="font-bold text-xl">MembershipPro</span>
              </div>
              <p className="text-muted-foreground">
                Build, launch, and scale your membership platform with powerful
                tools designed for creators.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  API
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="block hover:text-foreground transition-colors"
                >
                  Status
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 MembershipPro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
