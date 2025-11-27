import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: November 27, 2024
            </p>
          </div>

          <Card className="p-8 space-y-6 text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Snap'n'Fix ("Service"), you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, do not use the Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">2. Description of Service</h2>
              <p>
                Snap'n'Fix is a technology platform that connects customers seeking home repair services with 
                independent professional contractors ("Pros"). Snap'n'Fix is a facilitator and marketplace, 
                not a service provider. All repair work is performed by independent contractors who set their 
                own prices, schedules, and warranty terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">3. User Accounts</h2>
              <p>
                You must create an account to use certain features. You are responsible for maintaining the 
                confidentiality of your account credentials and for all activities under your account. 
                You must provide accurate information and keep it updated.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">4. Payments and Fees</h2>
              <p>
                Payments are processed through secure escrow. When you book a job, payment is held until you 
                approve the completed work. A 10% Speed & Trust Fee is added to all transactions to cover 
                platform services including AI matching, escrow, and support.
              </p>
              <p>
                All prices are set by Pros and displayed before booking. Prices are fixed unless the scope 
                of work changes significantly, in which case the Pro must discuss changes with you before proceeding.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">5. Independent Contractors</h2>
              <p>
                Pros are independent contractors, not employees or agents of Snap'n'Fix. Snap'n'Fix does not 
                control how Pros perform their work, does not provide tools or equipment, and does not set 
                Pros' schedules. Each Pro carries their own insurance and licenses.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">6. Warranties and Liability</h2>
              <p>
                Each Pro sets their own warranty terms. Warranties are between you and the Pro. Snap'n'Fix 
                is not responsible for Pro performance or warranty fulfillment. However, we may offer 
                discretionary Platform Protection credits (up to $100) in certain dispute situations.
              </p>
              <p>
                To the maximum extent permitted by law, Snap'n'Fix is not liable for damages arising from 
                Pro services or use of the platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">7. Prohibited Conduct</h2>
              <p>
                You may not: circumvent the platform to avoid fees; provide false information; abuse, harass, 
                or threaten Pros or support staff; attempt unauthorized access to the platform; or use the 
                Service for illegal purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">8. Dispute Resolution</h2>
              <p>
                If you have a dispute with a Pro, contact them first. If unresolved, contact Snap'n'Fix support 
                for mediation. Any legal disputes will be resolved through binding arbitration in accordance 
                with the laws of [Jurisdiction].
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">9. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify users of material changes. 
                Continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">10. Contact</h2>
              <p>
                For questions about these Terms, contact us at legal@snapnfix.com
              </p>
            </section>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
