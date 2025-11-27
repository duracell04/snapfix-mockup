import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Calendar, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Pro = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="container py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              Your repair empire.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Set your prices. Work your schedule. Get paid fast.
            </p>
            <Button size="lg" className="text-lg h-14 px-8" asChild>
              <Link to="/pro/signup">Become a Pro</Link>
            </Button>
            <p className="text-sm text-muted-foreground pt-4">
              Independent contractor. Snap'n'Fix does not provide tools, uniforms, or schedules.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Why pros choose Snap'n'Fix</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 space-y-4">
                <DollarSign className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">You set the price</h3>
                <p className="text-muted-foreground">
                  Full control over your pricing. No lead fees — we only charge a platform fee when you get paid.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Your schedule</h3>
                <p className="text-muted-foreground">
                  Work when you want. Accept jobs that fit your availability. No forced shifts or quotas.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Instant payouts</h3>
                <p className="text-muted-foreground">
                  Money hits your account as soon as the job is approved. No waiting weeks for payment.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How it works for pros */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center">How it works</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Get matched to jobs</h3>
                  <p className="text-muted-foreground">
                    Our AI matches you with jobs based on location, specialty, and availability. 
                    See photos and details before you quote.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Set your price & warranty</h3>
                  <p className="text-muted-foreground">
                    Quote based on the photos. Set your arrival window. Define your warranty terms. 
                    You control everything.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Complete the job</h3>
                  <p className="text-muted-foreground">
                    Show up prepared with the right tools and parts. Complete the work professionally. 
                    Customer approves, money is released.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Build your reputation</h3>
                  <p className="text-muted-foreground">
                    Great work gets great reviews. Upload before/after photos to your portfolio. 
                    Top-rated pros get more visibility and higher prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More benefits */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-3xl font-bold">Protected payments</h3>
                <p className="text-muted-foreground text-lg">
                  Funds are held in escrow from the start. No chasing payments or dealing with 
                  bounced checks. You focus on the work, we handle the money.
                </p>
              </div>

              <div className="space-y-6">
                <TrendingUp className="h-12 w-12 text-primary" />
                <h3 className="text-3xl font-bold">Grow your business</h3>
                <p className="text-muted-foreground text-lg">
                  Start with door hardware, expand to more categories. Build a portfolio that 
                  showcases your expertise. We're growing — grow with us.
                </p>
              </div>

              <div className="space-y-6">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-3xl font-bold">Quality customers</h3>
                <p className="text-muted-foreground text-lg">
                  Our customers understand fixed pricing and respect professional work. 
                  Clear expectations mean fewer disputes and better reviews.
                </p>
              </div>

              <div className="space-y-6">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-3xl font-bold">Smart matching</h3>
                <p className="text-muted-foreground text-lg">
                  AI analyzes photos so you know what you're getting into. No wasted trips. 
                  Better preparation means higher success rates and happier customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-20">
          <Card className="p-12 text-center bg-primary text-primary-foreground">
            <h2 className="text-4xl font-bold mb-4">Ready to take control?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of independent pros building their repair empire
            </p>
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8" asChild>
              <Link to="/pro/signup">Apply now</Link>
            </Button>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pro;
