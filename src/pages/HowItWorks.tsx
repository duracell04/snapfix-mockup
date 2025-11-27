import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Camera, Search, Calendar, Wrench, Star } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">How Snap'n'Fix works</h1>
            <p className="text-xl text-muted-foreground">
              From photo to fixed in five simple steps
            </p>
          </div>

          {/* Step 1: Snap */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                1
              </div>
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Camera className="h-8 w-8 text-primary" />
                Snap photos
              </h2>
              <p className="text-lg text-muted-foreground">
                Take 2–3 guided photos: context shot, close-up of the issue, and scale reference (like a coin). 
                Our AI analyzes the photos to understand what needs fixing.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Guided prompts ensure quality photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Instant feedback if images need improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Add notes about door type, symptoms, access</span>
                </li>
              </ul>
            </div>
            <Card className="p-8 bg-muted/30">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                <Camera className="h-16 w-16 text-muted-foreground" />
              </div>
            </Card>
          </div>

          {/* Step 2: Get offers */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="p-8 bg-muted/30 md:order-1">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                <Search className="h-16 w-16 text-muted-foreground" />
              </div>
            </Card>
            <div className="space-y-4 md:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                2
              </div>
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Search className="h-8 w-8 text-primary" />
                Get curated offers
              </h2>
              <p className="text-lg text-muted-foreground">
                Within seconds, receive 3–5 offers from vetted pros near you. Each offer includes a fixed price, 
                live ETA, ratings, portfolio, and warranty terms.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Transparent pricing — no surprises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>See verified portfolios and reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Compare warranties and specializations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3: Book */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                3
              </div>
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Calendar className="h-8 w-8 text-primary" />
                Book in one tap
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose your preferred pro or tap "Book fastest" for instant matching. 
                Payment is held in secure escrow until the job is complete.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>10% Speed & Trust Fee covers matching and escrow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Immediate confirmation with pro contact info</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Track pro's arrival in real-time</span>
                </li>
              </ul>
            </div>
            <Card className="p-8 bg-muted/30">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                <Calendar className="h-16 w-16 text-muted-foreground" />
              </div>
            </Card>
          </div>

          {/* Step 4: Fix */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="p-8 bg-muted/30 md:order-1">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                <Wrench className="h-16 w-16 text-muted-foreground" />
              </div>
            </Card>
            <div className="space-y-4 md:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                4
              </div>
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Wrench className="h-8 w-8 text-primary" />
                Pro arrives prepared
              </h2>
              <p className="text-lg text-muted-foreground">
                Your pro shows up with the right tools and parts based on the photos. 
                Most jobs are completed in one visit, typically 30–90 minutes.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Pros come equipped based on diagnosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Clean, professional service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Job walkthrough and warranty explanation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 5: Review */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                5
              </div>
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Star className="h-8 w-8 text-primary" />
                Review & release payment
              </h2>
              <p className="text-lg text-muted-foreground">
                Rate your experience and payment is automatically released from escrow. 
                Your warranty kicks in immediately.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Payment held until you approve</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Dispute resolution if issues arise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Pro gets paid fast after approval</span>
                </li>
              </ul>
            </div>
            <Card className="p-8 bg-muted/30">
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                <Star className="h-16 w-16 text-muted-foreground" />
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
