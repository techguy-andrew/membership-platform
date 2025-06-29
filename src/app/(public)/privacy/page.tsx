import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Privacy Policy</CardTitle>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, subscribe to our newsletter, or contact us
              for support.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, process transactions, and communicate with
              you.
            </p>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except as described in this policy.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2>5. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience on our website and analyze usage patterns.
            </p>

            <h2>6. Third-Party Services</h2>
            <p>
              Our service may contain links to third-party websites or services.
              We are not responsible for the privacy practices of these third
              parties.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer
              retention period is required by law.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal
              information. You may also opt out of certain communications from
              us.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our service is not intended for children under 13. We do not
              knowingly collect personal information from children under 13.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please
              contact us at privacy@membershipplatform.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
