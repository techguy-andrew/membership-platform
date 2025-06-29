import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our membership platform,
            billing, features, and support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main FAQ Accordion */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Common Questions
              </CardTitle>
              <CardDescription>
                Everything you need to know about our membership platform
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
                    What is included in my membership?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Your membership provides exclusive access to premium
                      content, community forums, and member-only resources.
                      You&apos;ll get unlimited access to courses, downloadable
                      materials, and direct communication with instructors and
                      fellow members.
                    </p>
                    <p>
                      Additional benefits include early access to new content,
                      exclusive workshops, networking opportunities, and
                      priority support from our team.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How does billing and subscription work?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer flexible monthly and annual subscription plans.
                      All payments are processed securely through Stripe with
                      automatic renewal. You can choose between Basic
                      ($29/month), Professional ($79/month), or Enterprise
                      ($199/month) plans.
                    </p>
                    <p>
                      You can upgrade, downgrade, or cancel your subscription at
                      any time through your account dashboard. No hidden fees or
                      cancellation charges. We also offer a 14-day free trial
                      with no credit card required.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We accept all major credit cards including Visa,
                      Mastercard, American Express, and Discover. We also
                      support PayPal for international payments and bank
                      transfers for annual enterprise plans.
                    </p>
                    <p>
                      All payments are processed securely through Stripe,
                      ensuring your financial information is protected with
                      bank-level security standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can I cancel my subscription anytime?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Yes, you can cancel your subscription at any time through
                      your account dashboard. There are no cancellation fees or
                      penalties. Your access will continue until the end of your
                      current billing period.
                    </p>
                    <p>
                      If you cancel, you&apos;ll still have access to all
                      content until your subscription expires. You can
                      reactivate your subscription at any time and pick up right
                      where you left off.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How do I get technical support?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Our support team is available 24/7 to help with any
                      technical issues or questions about your membership. You
                      can access our comprehensive help center, submit support
                      tickets, or join our community forums for peer-to-peer
                      assistance.
                    </p>
                    <p>
                      For urgent issues, you can contact us via live chat,
                      email, or phone. Enterprise customers receive dedicated
                      support with priority response times.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Is there a mobile app available?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Yes! We offer native mobile apps for both iOS and Android
                      devices. The apps provide full access to all platform
                      features including content streaming, community forums,
                      and push notifications for new content.
                    </p>
                    <p>
                      You can download our mobile apps from the App Store or
                      Google Play Store. The apps sync seamlessly with your web
                      account, so you can continue learning on any device.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    What happens if I exceed my member limit?
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      If you approach your member limit, we&apos;ll notify you
                      via email and in your dashboard. You can upgrade your plan
                      at any time to accommodate more members without any
                      interruption to your service.
                    </p>
                    <p>
                      Basic plans support up to 1,000 members, Professional
                      plans support up to 10,000 members, and Enterprise plans
                      have unlimited member capacity.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer a 30-day money-back guarantee for all new
                      subscriptions. If you&apos;re not satisfied with our
                      platform within the first 30 days, we&apos;ll provide a
                      full refund, no questions asked.
                    </p>
                    <p>
                      After the 30-day period, refunds are handled on a
                      case-by-case basis. We&apos;re committed to your
                      satisfaction and will work with you to resolve any issues
                      you may have.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Support Section */}
          <Card>
            <CardHeader>
              <CardTitle>Still Need Help?</CardTitle>
              <CardDescription>
                Can&apos;t find what you&apos;re looking for? Our support team
                is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center space-y-3">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant help from our support team
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Start Chat
                  </Button>
                </div>

                <div className="text-center space-y-3">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Send us a detailed message
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link href="/contact">Send Email</Link>
                  </Button>
                </div>

                <div className="text-center space-y-3">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Phone Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Call us during business hours
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Call Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
