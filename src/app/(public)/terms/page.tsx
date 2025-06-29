import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Terms of Service</CardTitle>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using MembershipPlatform, you accept and agree to
              be bound by the terms and provision of this agreement.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials on MembershipPlatform for personal, non-commercial
              transitory viewing only.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on MembershipPlatform are provided on an &apos;as
              is&apos; basis. MembershipPlatform makes no warranties, expressed
              or implied, and hereby disclaims and negates all other warranties
              including without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall MembershipPlatform or its suppliers be liable
              for any damages (including, without limitation, damages for loss
              of data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on MembershipPlatform,
              even if MembershipPlatform or a MembershipPlatform authorized
              representative has been notified orally or in writing of the
              possibility of such damage.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on MembershipPlatform could include
              technical, typographical, or photographic errors.
              MembershipPlatform does not warrant that any of the materials on
              its website are accurate, complete, or current.
            </p>

            <h2>6. Links</h2>
            <p>
              MembershipPlatform has not reviewed all of the sites linked to our
              website and is not responsible for the contents of any such linked
              site.
            </p>

            <h2>7. Modifications</h2>
            <p>
              MembershipPlatform may revise these terms of service for its
              website at any time without notice. By using this website, you are
              agreeing to be bound by the then current version of these terms of
              service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws and you irrevocably submit to the
              exclusive jurisdiction of the courts in that state or location.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
