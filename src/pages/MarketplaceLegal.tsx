import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const MarketplaceLegal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Marketplace Explainer</h1>
            <p className="text-xl text-muted-foreground">
              Understanding how Snap'n'Fix works — in plain English
            </p>
          </div>

          <Card className="p-8 space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">We're a facilitator, not a service provider</h2>
              <p className="text-muted-foreground leading-relaxed">
                Snap'n'Fix is a technology platform that connects customers with independent professional contractors 
                ("Pros"). We don't employ Pros, provide them with tools or uniforms, or set their schedules. 
                Think of us like Uber or Airbnb — we make the connection happen, but the actual repair work 
                is performed by independent businesses.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Independent contractors, not employees</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every Pro on Snap'n'Fix is an independent contractor running their own business. They:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Set their own prices and warranty terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Choose which jobs to accept</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Control their own schedule and availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Provide their own tools and equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Carry their own insurance and licenses</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">How payments work</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you book a job, payment is held in secure escrow. We act as an "agent of payee" — 
                meaning we collect payment on behalf of the Pro, hold it securely during the job, and 
                release it once you approve the work. This protects both you and the Pro.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our 10% Speed & Trust Fee covers:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>AI photo analysis and Pro matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure escrow and payment processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Dispute mediation if issues arise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Platform support and protection</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Pro-set warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Each Pro defines their own warranty terms (typically 14–45 days). These warranties are between 
                you and the Pro — Snap'n'Fix is not responsible for warranty fulfillment. However, if a Pro 
                doesn't honor their warranty, we can help mediate and may offer a discretionary Platform Protection 
                credit (up to $100) in certain cases.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">What we do provide</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we don't perform repairs ourselves, Snap'n'Fix provides:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Pro vetting (background checks, license verification, insurance validation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>AI-powered photo analysis for accurate quotes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure payment escrow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Review and rating system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Dispute resolution assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Customer support</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed">
                For more details, see our full{" "}
                <a href="/legal/terms" className="text-primary hover:underline">Terms of Service</a> or 
                contact our support team.
              </p>
            </section>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MarketplaceLegal;
