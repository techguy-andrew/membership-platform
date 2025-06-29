import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Users, Target, Award, Heart, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Building the Future of Membership Platforms
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help creators, educators, and businesses build their own branded
            subscription-based communities with powerful tools and seamless
            experiences.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To democratize the creation of membership platforms, empowering
                creators and businesses to build sustainable revenue streams
                through community-driven content and experiences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We believe in transparency, innovation, and putting creators
                first. Every feature we build is designed to help you succeed
                and grow your community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                10,000+
              </div>
              <p className="text-sm text-muted-foreground">Active Creators</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <p className="text-sm text-muted-foreground">Revenue Generated</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <p className="text-sm text-muted-foreground">Members Served</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Meet Our Team</CardTitle>
            <CardDescription>
              The passionate people behind MembershipPlatform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Leadership Team</h3>
                <p className="text-sm text-muted-foreground">
                  Experienced executives with deep knowledge in SaaS and creator
                  economy
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Engineering Team</h3>
                <p className="text-sm text-muted-foreground">
                  World-class developers building scalable, secure solutions
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Support Team</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated customer success specialists ready to help you
                  succeed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl flex items-center justify-center gap-2">
              <HelpCircle className="h-8 w-8 text-primary" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription>
              Common questions about our membership platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is included in each membership tier?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Our Basic plan ($29/month) includes up to 1,000 members,
                    basic content management, email support, and standard
                    integrations. The Professional plan ($79/month) adds
                    advanced analytics, priority support, custom branding, video
                    streaming, and API access.
                  </p>
                  <p>
                    The Enterprise plan ($199/month) provides unlimited members,
                    custom analytics, dedicated support, white-label solutions,
                    advanced security, and custom development.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How do I cancel my subscription?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    You can cancel your subscription at any time through your
                    account dashboard. Simply go to Settings → Billing and click
                    the &quot;Cancel Subscription&quot; button. There are no
                    cancellation fees or penalties.
                  </p>
                  <p>
                    Your access will continue until the end of your current
                    billing period. You can reactivate your subscription at any
                    time and pick up right where you left off.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I upgrade or downgrade my plan?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Yes, you can upgrade or downgrade your plan at any time
                    through your account dashboard. Changes take effect
                    immediately, and billing is adjusted on a prorated basis.
                  </p>
                  <p>
                    When upgrading, you&apos;ll only pay the difference for the
                    remaining billing period. When downgrading, you&apos;ll
                    receive a credit for the unused portion of your current
                    plan.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We offer a 30-day money-back guarantee for all new
                    subscriptions. If you&apos;re not satisfied with our
                    platform within the first 30 days, we&apos;ll provide a full
                    refund, no questions asked.
                  </p>
                  <p>
                    After the 30-day period, refunds are handled on a
                    case-by-case basis. We&apos;re committed to your
                    satisfaction and will work with you to resolve any issues
                    you may have.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How do I access member-only content?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Once you&apos;re a member, you&apos;ll have access to all
                    member-only content through your dashboard. This includes
                    exclusive courses, downloadable resources, community forums,
                    and live events.
                  </p>
                  <p>
                    You can access content on any device - desktop, tablet, or
                    mobile. Our platform syncs across all devices, so you can
                    continue learning wherever you are.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Is my payment information secure?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Absolutely. We use Stripe for all payment processing, which
                    is PCI DSS Level 1 compliant - the highest level of security
                    certification in the payment industry. Your payment
                    information is encrypted and never stored on our servers.
                  </p>
                  <p>
                    We also implement additional security measures including SSL
                    encryption, two-factor authentication, and regular security
                    audits to ensure your data is always protected.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="text-center bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
            <CardDescription>
              Join thousands of creators building successful membership
              platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register">Start Free Trial</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
