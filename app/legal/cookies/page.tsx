import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "Required for the Platform to function. Cannot be disabled.",
    examples: ["Session management", "Security tokens", "Load balancing"],
  },
  {
    name: "Functional Cookies",
    description: "Remember your preferences and settings.",
    examples: ["Language preferences", "Theme settings", "Recent markets"],
  },
  {
    name: "Analytics Cookies",
    description: "Help us understand how users interact with the Platform.",
    examples: ["Page views", "Feature usage", "Error tracking"],
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 28, 2026</p>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files stored on your device when you visit a website. 
                  They help us provide a better user experience by remembering your preferences 
                  and understanding how you use our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Aurexia uses cookies and similar technologies for various purposes:
                </p>
                <div className="space-y-4">
                  {cookieTypes.map((type) => (
                    <Card key={type.name}>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-2">{type.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {type.examples.map((example) => (
                            <span
                              key={example}
                              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services that set their own cookies, including analytics 
                  providers. These third parties have their own privacy and cookie policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Most browsers allow you to control cookies through their settings. You can typically:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>View what cookies are stored</li>
                  <li>Delete specific or all cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all third-party cookies</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Note: Disabling essential cookies may prevent certain features from working correctly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Local Storage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In addition to cookies, we may use browser local storage to save your preferences 
                  such as selected trading pairs, chart settings, and theme preferences. This data 
                  remains on your device and is not transmitted to our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our use of cookies, please contact us at{" "}
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
