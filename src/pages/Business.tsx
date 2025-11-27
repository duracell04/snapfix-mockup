import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, FileText, BarChart3, Clock, CreditCard, Shield } from "lucide-react";

const Business = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="container py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Snap'n'Fix Pro
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Door fixes at scale.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Purpose-built for property managers handling dozens or hundreds of units.
            </p>
            <Button size="lg" className="text-lg h-14 px-8">
              Talk to Sales
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Built for your workflow</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 space-y-4">
                <FileText className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Batch tickets</h3>
                <p className="text-muted-foreground">
                  Upload multiple work orders at once via CSV or API. Perfect for maintenance teams managing hundreds of units.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <CreditCard className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Fixed pricebook</h3>
                <p className="text-muted-foreground">
                  Pre-negotiated rates for common fixes. Budget with confidence across your entire portfolio.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">SLAs & live ETAs</h3>
                <p className="text-muted-foreground">
                  Set priority levels for urgent vs routine fixes. Track every job in real-time with live arrival windows.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Analytics dashboard</h3>
                <p className="text-muted-foreground">
                  See costs by property, pro performance, and turnaround times. Export reports for accounting.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <Building2 className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">API/CSV integration</h3>
                <p className="text-muted-foreground">
                  Connect to your property management system. Two-way sync keeps everyone updated automatically.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Consolidated billing</h3>
                <p className="text-muted-foreground">
                  One invoice for all jobs. Net-30 terms available. Simplified accounting for multi-property portfolios.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center">Perfect for</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Property Managers</h3>
                <p className="text-muted-foreground">
                  Handle maintenance requests across 50+ units without hiring full-time staff. 
                  Fixed pricing makes budgeting predictable.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Turn-ready punch lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Tenant move-in/out fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Routine maintenance</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Facilities Teams</h3>
                <p className="text-muted-foreground">
                  Commercial buildings with high door traffic. Schedule preventive maintenance 
                  or respond to urgent issues with SLA guarantees.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Office building common areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Retail storefronts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>School/university facilities</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-muted/30 py-20">
          <div className="container max-w-4xl text-center space-y-8">
            <h2 className="text-4xl font-bold">Enterprise pricing</h2>
            <p className="text-xl text-muted-foreground">
              Volume discounts start at 20 jobs/month. Custom SLAs and dedicated account management available.
            </p>
            <Button size="lg" className="text-lg h-14 px-8">
              Request a quote
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-20">
          <Card className="p-12 text-center bg-primary text-primary-foreground">
            <h2 className="text-4xl font-bold mb-4">See it in action</h2>
            <p className="text-xl mb-8 opacity-90">
              Book a 15-minute demo to see how Snap'n'Fix Pro fits your workflow
            </p>
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
              Schedule demo
            </Button>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Business;
