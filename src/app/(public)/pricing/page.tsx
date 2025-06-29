'use client';

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
import { Check, Zap, Shield, Users, Star, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for entrepreneurs just getting started',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Monthly group coaching calls',
        'Community forum access',
        'Basic resource library',
        'Email support',
        'Business templates & guides',
        'Success tracking dashboard',
        'Mobile app access',
        '30-day money-back guarantee',
      ],
      popular: false,
      icon: Users,
    },
    {
      name: 'Growth',
      description: 'For entrepreneurs ready to scale their business',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        'Weekly coaching sessions',
        'Monthly 1-on-1 coaching session',
        'Premium resource library',
        'Priority support',
        'Networking events access',
        'Advanced business tools',
        'Mastermind group access',
        'Exclusive workshops',
        'Custom business planning',
        'Performance analytics',
      ],
      popular: true,
      icon: Zap,
    },
    {
      name: 'Elite',
      description: 'For serious entrepreneurs seeking maximum growth',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      features: [
        'Unlimited coaching access',
        'Weekly 1-on-1 sessions',
        'Private mastermind groups',
        'Exclusive workshops & events',
        'Dedicated success manager',
        'Custom business strategies',
        'Advanced analytics & reporting',
        'Priority event access',
        'White-label resources',
      ],
      popular: false,
      icon: Shield,
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is adjusted on a prorated basis. When upgrading, you'll only pay the difference for the remaining billing period.",
    },
    {
      question: "What's included in the free trial?",
      answer:
        'The free trial includes all features of the Professional plan for 14 days, with no credit card required. You can explore all premium features and see if our platform is the right fit for your community.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with our platform within the first 30 days, we'll provide a full refund, no questions asked.",
    },
    {
      question: 'Is there a setup fee?',
      answer:
        'No setup fees. You only pay the monthly or yearly subscription cost for your chosen plan. We believe in transparent pricing with no hidden costs.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through Stripe.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer:
        'Yes, you can cancel your subscription at any time through your account dashboard. There are no cancellation fees or penalties. Your access will continue until the end of your current billing period.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial with no credit card required.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-lg border shadow-sm">
            <div className="flex">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                  !isYearly
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                  isYearly
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Yearly
                <Badge variant="secondary" className="ml-2 text-xs">
                  Save 20%
                </Badge>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16">
          {plans.map(plan => {
            const IconComponent = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? 'year' : 'month';

            return (
              <Card
                key={plan.name}
                className={`relative transition-all hover:shadow-lg ${
                  plan.popular ? 'border-2 border-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-4xl font-bold">${price}</div>
                    <div className="text-muted-foreground">per {period}</div>
                    {isYearly && (
                      <div className="text-sm text-green-600 font-medium mt-1">
                        Save ${plan.monthlyPrice * 12 - plan.yearlyPrice}/year
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    {plan.name === 'Enterprise' ? (
                      <Link href="/contact">Contact Sales</Link>
                    ) : (
                      <Link href="/register">Start Free Trial</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-sm text-muted-foreground">
                99.9% uptime guarantee with enterprise-grade security
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">10,000+ Creators</h3>
              <p className="text-sm text-muted-foreground">
                Trusted by creators worldwide to build their communities
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Optimized for speed and performance across all devices
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center gap-2">
                <HelpCircle className="h-8 w-8 text-primary" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>
                Everything you need to know about our pricing and plans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
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
    </div>
  );
}
