import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockOffers, mockTicket } from "@/data/mockOffers";
import { Star, MapPin, Clock, Shield, Zap, Info } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Offers = () => {
  const [selectedPro, setSelectedPro] = useState<typeof mockOffers[0] | null>(null);
  const [sortBy, setSortBy] = useState<"best" | "price" | "rating">("best");

  const sortedOffers = [...mockOffers].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.firstTimeFix - a.firstTimeFix; // "best" = highest first-time-fix
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12">
        {/* Ticket summary */}
        <Card className="mb-8 p-6 bg-muted/30">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Photos preview */}
            <div className="flex gap-2 md:w-64">
              {mockTicket.photos.slice(0, 3).map((photo, idx) => (
                <div key={idx} className="flex-1 aspect-square rounded-lg overflow-hidden bg-muted">
                  <img 
                    src={photo} 
                    alt={`Uploaded photo ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Details */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-mono">{mockTicket.ticketId}</span>
                <span>•</span>
                <span>{mockTicket.location.city}, {mockTicket.location.zip}</span>
                <Badge variant="secondary" className="ml-auto">{mockTicket.priority}</Badge>
              </div>
              <h2 className="text-2xl font-bold">{mockTicket.sku}</h2>
              <div className="flex items-start gap-2 text-sm">
                <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{mockTicket.aiRationale}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Sort & Book fastest */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Available Pros</h1>
            <p className="text-muted-foreground">Choose your pro or book the fastest available</p>
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <Tabs value={sortBy} onValueChange={(v) => setSortBy(v as any)} className="flex-1 sm:flex-initial">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="best">Best</TabsTrigger>
                <TabsTrigger value="price">Price</TabsTrigger>
                <TabsTrigger value="rating">Rating</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button size="lg" className="gap-2">
              <Zap className="h-4 w-4" />
              Book fastest
            </Button>
          </div>
        </div>

        {/* Offers list */}
        <div className="space-y-4">
          {sortedOffers.map((offer) => (
            <Card key={offer.proId} className="p-6 hover-lift smooth-transition cursor-pointer" onClick={() => setSelectedPro(offer)}>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Pro info */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{offer.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-medium">{offer.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{offer.jobsDone} jobs</span>
                        <span>•</span>
                        <span>{Math.round(offer.firstTimeFix * 100)}% first-time-fix</span>
                      </div>
                    </div>
                    {offer.insurance && (
                      <Badge variant="outline" className="gap-1">
                        <Shield className="h-3 w-3" />
                        Insured
                      </Badge>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {offer.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">{badge}</Badge>
                    ))}
                  </div>

                  {/* Why this pro */}
                  <div className="flex items-start gap-2 text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg">
                    <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-primary">Why this pro:</strong> {offer.why}</span>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{offer.eta}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{offer.distanceKm} km away</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <span>{offer.warrantyDays}-day warranty</span>
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex md:flex-col items-end justify-between md:justify-start gap-4 md:min-w-[200px]">
                  <div className="text-right">
                    <div className="text-4xl font-bold text-primary">${offer.price}</div>
                    <p className="text-xs text-muted-foreground mt-1">Fixed price</p>
                  </div>
                  <Button className="w-full md:w-auto">
                    Select Pro
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info box */}
        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <h3 className="font-bold mb-3">What happens next?</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">1.</span>
              <span>Select your preferred pro or tap "Book fastest" for instant matching</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">2.</span>
              <span>Payment held in secure escrow (includes 10% Speed & Trust Fee)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">3.</span>
              <span>Pro arrives prepared with tools and parts based on photos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">4.</span>
              <span>Approve work and payment releases automatically</span>
            </li>
          </ul>
        </Card>
      </main>

      {/* Pro detail modal */}
      <Dialog open={!!selectedPro} onOpenChange={() => setSelectedPro(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedPro && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedPro.name}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedPro.bio}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{selectedPro.rating}</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{selectedPro.jobsDone}</div>
                    <div className="text-sm text-muted-foreground">Jobs done</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{Math.round(selectedPro.firstTimeFix * 100)}%</div>
                    <div className="text-sm text-muted-foreground">First-time fix</div>
                  </div>
                </div>

                {/* Badges */}
                <div>
                  <h4 className="font-semibold mb-3">Verified badges</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPro.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">{badge}</Badge>
                    ))}
                    {selectedPro.insurance && (
                      <Badge variant="outline" className="gap-1">
                        <Shield className="h-3 w-3" />
                        Licensed & Insured
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Specialties */}
                {selectedPro.specialties && (
                  <div>
                    <h4 className="font-semibold mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPro.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline">{specialty}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Arrival time</span>
                    <span className="font-medium">{selectedPro.eta}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Distance</span>
                    <span className="font-medium">{selectedPro.distanceKm} km away</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Warranty</span>
                    <span className="font-medium">{selectedPro.warrantyDays} days</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-bold text-primary text-lg">${selectedPro.price}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full" size="lg">
                  Book {selectedPro.name} for ${selectedPro.price}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Offers;
