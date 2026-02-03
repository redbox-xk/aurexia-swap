import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 28, 2026</p>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aurexia (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our 
                  decentralized exchange platform and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a non-custodial platform, we minimize data collection. We may collect:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Wallet addresses (public blockchain data)</li>
                  <li>Transaction data (publicly available on-chain)</li>
                  <li>Device information and IP addresses for security purposes</li>
                  <li>Usage analytics to improve our services</li>
                  <li>Communication data when you contact support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>To provide and maintain our trading services</li>
                  <li>To detect and prevent fraud and abuse</li>
                  <li>To comply with legal obligations</li>
                  <li>To improve our platform and user experience</li>
                  <li>To communicate important updates and announcements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your data. However, no method 
                  of transmission over the Internet is 100% secure. Your assets remain under your control 
                  in your personal wallet at all times - we never have custody of your funds.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform integrates with third-party services including blockchain networks, 
                  wallet providers, and analytics tools. These services have their own privacy policies, 
                  and we encourage you to review them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have rights including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@aurexia.io" className="text-primary hover:underline">
                    privacy@aurexia.io
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
