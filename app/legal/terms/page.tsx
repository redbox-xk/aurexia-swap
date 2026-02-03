import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 28, 2026</p>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Aurexia (&quot;the Platform&quot;), you agree to be bound by these Terms of 
                  Service. If you do not agree to these terms, do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You must be at least 18 years old and legally able to enter into contracts. The Platform 
                  is not available to users in restricted jurisdictions. You are responsible for ensuring 
                  compliance with your local laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Non-Custodial Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aurexia is a non-custodial platform. We never take custody of your digital assets. 
                  You are solely responsible for the security of your wallet, private keys, and seed phrases. 
                  We cannot recover lost funds or reverse transactions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Trading Risks</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Trading digital assets involves substantial risk of loss. You acknowledge and accept:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Digital asset prices are highly volatile</li>
                  <li>Past performance does not guarantee future results</li>
                  <li>You may lose some or all of your investment</li>
                  <li>Smart contracts may contain bugs or vulnerabilities</li>
                  <li>Blockchain networks may experience congestion or failures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Prohibited Activities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the Platform for illegal activities</li>
                  <li>Attempt to manipulate markets or engage in wash trading</li>
                  <li>Use bots or automated systems to interfere with the Platform</li>
                  <li>Circumvent geographic restrictions</li>
                  <li>Violate intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Fees</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trading on Aurexia incurs fees as displayed on our platform. Fees are subject to change. 
                  You are also responsible for any blockchain network fees (gas) required to execute transactions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Aurexia name, logo, and all related materials are our intellectual property. 
                  Our smart contracts are open source under the MIT license.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Aurexia shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages arising from your use of the Platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may modify these Terms at any time. Continued use of the Platform after changes 
                  constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, contact us at{" "}
                  <a href="mailto:legal@aurexia.io" className="text-primary hover:underline">
                    legal@aurexia.io
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
