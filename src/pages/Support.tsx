import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Shield } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">Help & Support</h1>
            <p className="text-xl text-muted-foreground">
              Find answers or get in touch with our team
            </p>
          </div>

          {/* Contact options */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-4 hover-lift">
              <MessageCircle className="h-10 w-10 text-primary mx-auto" />
              <h3 className="font-bold">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Available Mon-Fri, 9am-6pm</p>
              <Button variant="outline" className="w-full">Start chat</Button>
            </Card>

            <Card className="p-6 text-center space-y-4 hover-lift">
              <Mail className="h-10 w-10 text-primary mx-auto" />
              <h3 className="font-bold">Email Support</h3>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              <Button variant="outline" className="w-full">Send email</Button>
            </Card>

            <Card className="p-6 text-center space-y-4 hover-lift">
              <Shield className="h-10 w-10 text-primary mx-auto" />
              <h3 className="font-bold">File Dispute</h3>
              <p className="text-sm text-muted-foreground">Protected by escrow</p>
              <Button variant="outline" className="w-full">Open case</Button>
            </Card>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Who actually performs the repair work-
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  All repairs are performed by independent professional contractors ("Pros"). 
                  Snap'n'Fix facilitates the connection but doesn't employ the Pros or perform repairs directly. 
                  Each Pro runs their own business, carries their own insurance, and sets their own prices and warranties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What if something goes wrong during or after the repair-
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  First, contact your Pro directly - they're responsible for the work quality and warranty. 
                  If you can't resolve the issue with the Pro, contact Snap'n'Fix support. We'll mediate the dispute 
                  and may offer a discretionary Platform Protection credit (up to $100) depending on the circumstances. 
                  Payment is held in escrow until you approve the work, protecting both parties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How does the warranty work-
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Each Pro sets their own warranty terms (typically 14-45 days), which you'll see before booking. 
                  The warranty is between you and the Pro. If something goes wrong within the warranty period, 
                  contact the Pro first. If they don't respond or honor the warranty, reach out to Snap'n'Fix support 
                  for mediation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What is the 10% Speed & Trust Fee-
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  This fee covers AI photo analysis, Pro matching, secure escrow payment processing, dispute mediation, 
                  and platform support. It ensures you get accurate quotes from vetted pros and protected payments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Can I cancel or reschedule a booking-
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, you can cancel or reschedule through the app or by contacting the Pro directly. 
                  Cancellation policies vary by Pro and timing. Check the specific terms shown at booking.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Are Pros licensed and insured-
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, all Pros on Snap'n'Fix must carry general liability insurance and any licenses required 
                  by local regulations. We verify these during onboarding and monitor them regularly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  What if the price changes after I book-
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Prices are fixed based on the photos you submit. If the Pro discovers the issue is significantly 
                  different upon arrival, they must discuss any price changes with you before proceeding. 
                  You can decline and pay nothing beyond the escrow fee if you don't agree to the new price.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  What's Platform Protection-
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Platform Protection is a discretionary credit (up to $100) that Snap'n'Fix may offer if a Pro 
                  doesn't honor their warranty or if there's a serious service issue we can't otherwise resolve. 
                  It's not insurance, but an additional layer of customer protection.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Legal links */}
          <Card className="p-8 bg-muted/30 text-center space-y-4">
            <h3 className="text-xl font-bold">Legal & Policies</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/legal/marketplace" className="text-primary hover:underline">
                Marketplace Info
              </a>
              <span className="text-muted-foreground">-</span>
              <a href="/legal/terms" className="text-primary hover:underline">
                Terms of Service
              </a>
              <span className="text-muted-foreground">-</span>
              <a href="/legal/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
