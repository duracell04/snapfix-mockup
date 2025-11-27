import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: November 27, 2024
            </p>
          </div>

          <Card className="p-8 space-y-6 text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
              <p>
                We collect information you provide directly (name, email, phone, address, payment information), 
                information automatically collected (device data, usage data, cookies), and information from third parties 
                (identity verification services, payment processors).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
              <p>
                We use your information to: provide and improve the Service; match you with Pros; process payments 
                via escrow; communicate with you; ensure safety and prevent fraud; analyze platform usage; and 
                comply with legal obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">3. Information Sharing</h2>
              <p>
                We share information with: Pros (contact info, job details, photos); service providers (payment 
                processors, AI analysis, hosting); legal authorities when required; and with your consent or as 
                necessary to provide the Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">4. Your Photos</h2>
              <p>
                Photos you upload are used for AI analysis and shown to Pros to generate quotes. Photos may be 
                included in Pro portfolios (with your permission) after job completion. We do not sell your photos 
                to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">5. Data Security</h2>
              <p>
                We use industry-standard security measures including encryption, secure servers, and access controls. 
                However, no transmission over the internet is 100% secure. Payment information is handled by PCI-compliant 
                processors and not stored directly by Snap'n'Fix.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">6. Your Rights</h2>
              <p>
                You have the right to: access your personal data; correct inaccurate data; delete your account 
                (subject to legal retention requirements); opt out of marketing communications; and request 
                data portability.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to provide functionality, analyze usage, and improve the Service. 
                You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">8. Data Retention</h2>
              <p>
                We retain your information as long as necessary to provide services, comply with legal obligations, 
                resolve disputes, and enforce agreements. You can request deletion by contacting support.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">9. Children's Privacy</h2>
              <p>
                Snap'n'Fix is not intended for users under 18. We do not knowingly collect information from children.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">10. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes via 
                email or platform notification.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">11. Contact</h2>
              <p>
                For privacy-related questions or to exercise your rights, contact us at privacy@snapnfix.com
              </p>
            </section>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
