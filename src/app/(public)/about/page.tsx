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
import { Users, Target, Award, Heart, HelpCircle, TrendingUp, Globe, Clock } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            About Elite Business Coaching
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Empowering Entrepreneurs to Build Million-Dollar Businesses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a community of business coaches, entrepreneurs, and growth experts 
            dedicated to helping you scale your business with proven strategies, 
            expert guidance, and powerful networking opportunities.
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
                To democratize business success by providing entrepreneurs with 
                access to world-class coaching, proven strategies, and a supportive 
                community that accelerates their path to building scalable, profitable businesses.
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
                We believe in transparency, accountability, and results-driven coaching. 
                Every strategy we teach and every connection we facilitate is designed 
                to help you achieve measurable business growth and lasting success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                2,500+
              </div>
              <p className="text-sm text-muted-foreground">Active Members</p>
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
              <div className="text-3xl font-bold text-primary mb-2">94%</div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Expert Coaches</p>
            </CardContent>
          </Card>
        </div>

        {/* Coach Bio Section */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Meet Our Lead Coach</CardTitle>
            <CardDescription>
              The visionary behind Elite Business Coaching Community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">David Chen</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Serial Entrepreneur & Business Coach
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 15 years of experience building and scaling businesses, 
                  David has helped hundreds of entrepreneurs achieve their dreams. 
                  From starting his first company at 22 to building a portfolio 
                  of successful ventures, he brings real-world expertise to every coaching session.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Built 3 companies to $10M+ revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Coached 500+ entrepreneurs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>Certified Business Coach (IBC)</span>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-24 w-24 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Member Success Stories</CardTitle>
            <CardDescription>
              Real results from our community members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Sarah's E-commerce Empire</h3>
                <p className="text-sm text-muted-foreground">
                  "Started with $5K, now generating $2M annually. The coaching and community support were game-changers."
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Mike's Consulting Success</h3>
                <p className="text-sm text-muted-foreground">
                  "Increased my consulting rate from $150 to $500/hour and scaled to a 7-figure business."
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Lisa's SaaS Launch</h3>
                <p className="text-sm text-muted-foreground">
                  "Launched my SaaS product in 6 months and reached $100K ARR within the first year."
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
              Common questions about our coaching methodology
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
                  What makes your coaching different from others?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Our coaching combines proven business strategies with real-world 
                    experience from successful entrepreneurs. We focus on actionable 
                    steps, accountability, and community support rather than just theory.
                  </p>
                  <p>
                    Plus, you get access to a network of 2,500+ entrepreneurs who 
                    are actively building and scaling their businesses, providing 
                    peer support and valuable connections.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How quickly can I expect to see results?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Most members see measurable improvements within 30-60 days of 
                    implementing our strategies. However, sustainable business growth 
                    typically takes 6-12 months of consistent effort and application.
                  </p>
                  <p>
                    We provide ongoing support and accountability to ensure you stay 
                    on track and achieve your long-term business goals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What if I'm not satisfied with the coaching?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We offer a 30-day money-back guarantee. If you're not completely 
                    satisfied with our coaching community within the first 30 days, 
                    we'll provide a full refund, no questions asked.
                  </p>
                  <p>
                    We're committed to your success and will work with you to ensure 
                    you get the value you expect from our community.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Do you offer industry-specific coaching?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Yes! While our core coaching covers universal business principles, 
                    we have specialized coaches and mastermind groups for specific 
                    industries including e-commerce, SaaS, consulting, and service businesses.
                  </p>
                  <p>
                    You can also connect with other members in your industry through 
                    our community forums and networking events.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Transform Your Business?</CardTitle>
              <CardDescription>
                Join our community of successful entrepreneurs and start your journey to business growth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/register">Join Elite Community</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pricing">View Plans</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
