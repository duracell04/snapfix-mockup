import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CityData } from "@/data/cityData";
import { 
  MapPin, Clock, Users, Star, DollarSign, Camera, 
  Wrench, CheckCircle2, TrendingUp 
} from "lucide-react";

type CityProps = {
  city: CityData;
};

const City = ({ city }: CityProps) => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="text-base px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                Now serving {city.name}
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold">
                Door repairs in {city.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Fixed price from a photo. {city.activePros} local pros ready to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg h-14 px-8" asChild>
                  <Link href="/upload">
                    <Camera className="mr-2 h-5 w-5" />
                    Get price now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                  <Link href="/offers">
                    <Users className="mr-2 h-5 w-5" />
                    Browse {city.name} pros
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-bold">{city.avgResponseTime}</div>
                    <div className="text-muted-foreground">Avg. response</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-bold">{city.activePros} pros</div>
                    <div className="text-muted-foreground">Active in {city.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary fill-primary" />
                  <div className="text-left">
                    <div className="font-bold">4.8 rating</div>
                    <div className="text-muted-foreground">Customer reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="container py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Neighborhoods we serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {city.neighborhoods.map((neighborhood) => (
                <Card 
                  key={neighborhood}
                  className="p-4 text-center hover-lift smooth-transition cursor-pointer"
                >
                  <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="font-medium">{neighborhood}</p>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Don't see your neighborhood- We're expanding coverage daily.{" "}
              <Link href="/" className="text-primary hover:underline">Join the waitlist</Link>
            </p>
          </div>
        </section>

        {/* Local Pricing */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">
                  {city.name} pricing
                </h2>
                <p className="text-xl text-muted-foreground">
                  Typical price ranges from local pros
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-bold">Fix misaligned strike plate</h3>
                      <p className="text-sm text-muted-foreground">Most common fix</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{city.priceRange.strike}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Usually done in 30-60 min</span>
                  </div>
                </Card>

                <Card className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-bold">Replace door handle</h3>
                      <p className="text-sm text-muted-foreground">New hardware included</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{city.priceRange.handle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Usually done in 30-45 min</span>
                  </div>
                </Card>

                <Card className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-bold">Tighten/replace hinges</h3>
                      <p className="text-sm text-muted-foreground">Up to 3 hinges</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{city.priceRange.hinge}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Usually done in 45-90 min</span>
                  </div>
                </Card>

                <Card className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-bold">Re-hang interior door</h3>
                      <p className="text-sm text-muted-foreground">Full alignment</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{city.priceRange.rehang}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Usually done in 60-120 min</span>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20 text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-medium mb-2">All prices are fixed before booking</p>
                <p className="text-sm text-muted-foreground">
                  No surprises. See the exact price from your photos before choosing a pro.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">
                What {city.name} residents say
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-medium">4.8 average rating</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {city.testimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-6 space-y-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                  <div className="space-y-1 pt-2 border-t">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.neighborhood}</p>
                    <Badge variant="secondary" className="text-xs">
                      <Wrench className="h-3 w-3 mr-1" />
                      {testimonial.service}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works for this city */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-4xl font-bold">
                How it works in {city.name}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">1. Take photos</h3>
                  <p className="text-muted-foreground">
                    Snap 2-3 photos of your door issue. Our AI analyzes them instantly.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">2. Get local quotes</h3>
                  <p className="text-muted-foreground">
                    Receive fixed-price offers from {city.activePros} vetted {city.name} pros.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">3. Pro arrives ready</h3>
                  <p className="text-muted-foreground">
                    Average {city.avgResponseTime} response time. Usually fixed in one visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us section */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center">
              Why {city.name} residents choose Snap'n'Fix
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <TrendingUp className="h-10 w-10 text-primary flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Local expertise</h3>
                  <p className="text-muted-foreground">
                    All {city.activePros} pros are based in {city.name} and know local building codes, 
                    typical door issues, and how to work efficiently in your area.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-10 w-10 text-primary flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Fast response</h3>
                  <p className="text-muted-foreground">
                    Average {city.avgResponseTime} response time in {city.name}. Most jobs completed 
                    same-day or next-day depending on your schedule.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <DollarSign className="h-10 w-10 text-primary flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Transparent pricing</h3>
                  <p className="text-muted-foreground">
                    See exact prices from your photos. No surprises, no hidden fees. 
                    Prices are competitive with {city.name} market rates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-10 w-10 text-primary flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Quality guaranteed</h3>
                  <p className="text-muted-foreground">
                    All pros are vetted, insured, and offer warranties. Secure escrow 
                    protects your payment until the job is done right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary-hover py-20">
          <div className="container text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to fix your door in {city.name}-
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join hundreds of {city.name} residents who've discovered the easier way 
              to handle door repairs.
            </p>
            <Button size="lg" variant="secondary" className="text-lg h-14 px-8" asChild>
              <Link href="/upload">
                <Camera className="mr-2 h-5 w-5" />
                Get your price now
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default City;
