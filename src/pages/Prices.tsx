import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, DollarSign, MapPin } from "lucide-react";

const Prices = () => {
  const priceExamples = [
    {
      service: "Fix misaligned strike plate",
      priceRange: "$79–$109",
      includes: "Adjust/shim strike plate",
      excludes: "Frame repair",
      duration: "30–60 min"
    },
    {
      service: "Replace door handle",
      priceRange: "$99–$149",
      includes: "New handle installation",
      excludes: "Smart locks",
      duration: "30–45 min"
    },
    {
      service: "Tighten/replace hinges",
      priceRange: "$89–$129",
      includes: "Up to 3 hinges",
      excludes: "Major frame damage",
      duration: "45–90 min"
    },
    {
      service: "Re-hang interior door",
      priceRange: "$129–$179",
      includes: "Alignment and hardware",
      excludes: "New door",
      duration: "60–120 min"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">Transparent pricing</h1>
            <p className="text-xl text-muted-foreground">
              Pros set their own prices. You see the fixed price before booking — no surprises.
            </p>
          </div>

          {/* City selector */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Prices vary by city and pro.</span>
              <span className="text-muted-foreground">Examples shown for Chicago.</span>
            </div>
          </Card>

          {/* Price cards */}
          <div className="space-y-6">
            {priceExamples.map((item, index) => (
              <Card key={index} className="p-6 hover-lift smooth-transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-3">
                      <Wrench className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-bold">{item.service}</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          Typical duration: {item.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Includes: {item.includes}
                      </Badge>
                      <Badge variant="outline" className="text-xs text-muted-foreground">
                        Excludes: {item.excludes}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-3xl font-bold text-primary">
                      <DollarSign className="h-6 w-6" />
                      {item.priceRange}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Fixed price</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pricing info */}
          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-6">Understanding our pricing</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p>
                  <strong className="text-foreground">Pros set their own prices</strong> based on their expertise, 
                  materials, and local market rates.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p>
                  <strong className="text-foreground">Fixed price guarantee</strong> means no surprise charges. 
                  If the job changes significantly, pros will discuss it with you first.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p>
                  <strong className="text-foreground">10% Speed & Trust Fee</strong> covers secure escrow, 
                  AI matching, dispute mediation, and platform support.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p>
                  <strong className="text-foreground">Price variations</strong> reflect pro experience, 
                  location, warranty terms, and availability.
                </p>
              </div>
            </div>
          </Card>

          {/* Warranty info */}
          <div className="text-center space-y-4 pt-8">
            <h3 className="text-2xl font-bold">What about warranties?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each pro sets their own warranty terms (typically 14–45 days). You'll see the warranty details 
              before booking. If something goes wrong within the warranty period, your pro will make it right.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Prices;
