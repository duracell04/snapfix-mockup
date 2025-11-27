import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, Star, Shield, Clock, CheckCircle2, Wrench, DoorClosed } from "lucide-react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Snap, fix, done.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Fixed price from a photo. Book a vetted pro in minutes - most small fixes done in one visit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg h-14 px-8" asChild>
                <Link href="/upload">
                  <Camera className="mr-2 h-5 w-5" />
                  Get price from a photo
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                <Link href="/offers">
                  <Users className="mr-2 h-5 w-5" />
                  Pick your pro
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-medium">4.8 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium">Independent pros</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="font-medium">Secure escrow</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="font-medium">Pro-set warranties</span>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 text-center space-y-4 hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">1. Snap</h3>
                <p className="text-muted-foreground">
                  Take 2-3 guided photos: context, close-up, and scale. Our AI analyzes the issue instantly.
                </p>
              </Card>

              <Card className="p-8 text-center space-y-4 hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">2. Pick or go</h3>
                <p className="text-muted-foreground">
                  Get 3-5 curated offers with fixed prices, or tap "Book fastest" for instant matching.
                </p>
              </Card>

              <Card className="p-8 text-center space-y-4 hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">3. Fix</h3>
                <p className="text-muted-foreground">
                  Your pro arrives prepared with tools and parts. Usually fixed in one visit.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Category */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 text-primary">
              <DoorClosed className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Door Hardware</span>
            </div>
            <h2 className="text-4xl font-bold">We fix what bugs you most</h2>
            <p className="text-xl text-muted-foreground">
              Starting with door hardware - those small annoyances that you've been meaning to fix for months.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-base py-2 px-4">Latch/strike plate</Badge>
              <Badge variant="secondary" className="text-base py-2 px-4">Handle replacement</Badge>
              <Badge variant="secondary" className="text-base py-2 px-4">Hinges</Badge>
              <Badge variant="secondary" className="text-base py-2 px-4">Re-hang doors</Badge>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Why Snap'n'Fix-</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Instant certainty</h3>
                <p className="text-muted-foreground">
                  Get a fixed price and arrival time from just photos. No waiting for quotes or callbacks.
                </p>
              </div>

              <div className="space-y-4">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Curated choice</h3>
                <p className="text-muted-foreground">
                  See 3-5 top-rated pros with transparent pricing, ratings, and portfolios. You pick, or we match instantly.
                </p>
              </div>

              <div className="space-y-4">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Protected & clear</h3>
                <p className="text-muted-foreground">
                  Secure escrow, pro-set warranties, and clear marketplace terms. Independent pros you can trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="container py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Now serving</h2>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <Link href="/cities/chicago" className="text-primary hover:underline font-medium">Chicago</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/cities/miami" className="text-primary hover:underline font-medium">Miami</Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/cities/seattle" className="text-primary hover:underline font-medium">Seattle</Link>
            </div>
            <div className="pt-8">
              <p className="text-muted-foreground mb-4">Not in your city yet-</p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 px-4 py-2 rounded-lg border bg-background"
                />
                <Button>Join waitlist</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
