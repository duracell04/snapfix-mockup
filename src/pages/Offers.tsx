'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getMockCityById,
  getMockOffersForTicket,
  getMockProById,
  getMockSkuById,
  getMockTicketById,
  MOCK_TICKET,
  MOCK_TICKET_ID,
  sortOffers,
} from "@/lib/mock-data";
import { Offer } from "@/lib/types";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Star, MapPin, Clock, Shield, Zap, Info } from "lucide-react";
import Link from "next/link";

const Offers = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ticketId = searchParams.get("t") || MOCK_TICKET_ID;

  const ticket = getMockTicketById(ticketId) || MOCK_TICKET;
  const offers = getMockOffersForTicket(ticket.id);
  const sku = getMockSkuById(ticket.suggestedSkuId);
  const city = getMockCityById(ticket.cityId);

  const [sortBy, setSortBy] = useState<"best_overall" | "lowest_price" | "top_rated">("best_overall");
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);

  const sortedOffers = useMemo(() => sortOffers(offers, sortBy), [offers, sortBy]);
  const selectedOffer = sortedOffers.find((offer) => offer.id === selectedOfferId) || null;
  const modalPro = selectedOffer ? getMockProById(selectedOffer.proId) : null;

  const handleSelect = (offer: Offer) => {
    setSelectedOfferId(offer.id);
    router.push(`/checkout?t=${ticket.id}&o=${offer.id}`);
  };

  const handleBookFastest = () => {
    const top = sortedOffers[0];
    if (top) {
      handleSelect(top);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        {/* Ticket summary */}
        <Card className="mb-8 p-6 bg-muted/30">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex gap-2 md:w-64">
              {ticket.photoUrls.slice(0, 3).map((photo, idx) => (
                <div key={photo + idx} className="flex-1 aspect-square rounded-lg overflow-hidden bg-muted">
                  <img src={photo} alt={`Uploaded photo ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-mono">{ticket.id}</span>
                <span>-</span>
                <span>
                  {city?.name ?? ticket.cityId}
                  {ticket.zipcode ? `, ${ticket.zipcode}` : ""}
                </span>
                <Badge variant="secondary" className="ml-auto capitalize">
                  {ticket.priority}
                </Badge>
              </div>
              <h2 className="text-2xl font-bold">{sku?.name || "Replace handle (lever/knob)"}</h2>
              <div className="flex items-start gap-2 text-sm">
                <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{ticket.aiRationale}</p>
              </div>
              <div className="flex gap-2 text-xs text-muted-foreground">
                <span>
                  Door: {ticket.doorType === "interior" ? "Interior" : "Exterior"} ·{" "}
                  {ticket.handleType === "lever" ? "Lever" : "Knob"}
                </span>
                <span>•</span>
                <span>{ticket.accessNotes || "No notes"}</span>
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
                <TabsTrigger value="best_overall" className="text-white data-[state=active]:text-foreground">
                  Best
                </TabsTrigger>
                <TabsTrigger value="lowest_price" className="text-white data-[state=active]:text-foreground">
                  Price
                </TabsTrigger>
                <TabsTrigger value="top_rated" className="text-white data-[state=active]:text-foreground">
                  Rating
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Button size="lg" className="gap-2" onClick={handleBookFastest}>
              <Zap className="h-4 w-4" />
              Book fastest
            </Button>
          </div>
        </div>

        {/* Offers list */}
        <div className="space-y-4">
          {sortedOffers.map((offer) => {
            const pro = getMockProById(offer.proId);
            if (!pro) return null;
            return (
              <Card
                key={offer.id}
                className="p-6 hover-lift smooth-transition cursor-pointer"
                onClick={() => setSelectedOfferId(offer.id)}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{pro.displayName}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">{pro.rating}</span>
                          </div>
                          <span>-</span>
                          <span>{pro.jobsDone} jobs</span>
                          <span>-</span>
                          <span>{Math.round(offer.firstTimeFixRate * 100)}% first-time-fix</span>
                        </div>
                      </div>
                      {pro.insuranceVerified && (
                        <Badge variant="outline" className="gap-1">
                          <Shield className="h-3 w-3" />
                          Insured
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {(offer.badges || []).map((badge) => (
                        <Badge key={badge} variant="secondary">
                          {badge.replace(/_/g, " ")}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-start gap-2 text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg">
                      <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong className="text-primary">Why this pro:</strong> {offer.whyThisPro}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{offer.etaWindow}</span>
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

                  <div className="flex md:flex-col items-end justify-between md:justify-start gap-4 md:min-w-[200px]">
                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary">${offer.price}</div>
                      <p className="text-xs text-muted-foreground mt-1">Fixed price</p>
                    </div>
                    <Button className="w-full md:w-auto" onClick={() => handleSelect(offer)}>
                      Select Pro
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

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

      <Dialog open={!!selectedOffer && !!modalPro} onOpenChange={() => setSelectedOfferId(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedOffer && modalPro && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{modalPro.displayName}</DialogTitle>
                <DialogDescription className="text-base">{modalPro.bio}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{modalPro.rating}</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{modalPro.jobsDone}</div>
                    <div className="text-sm text-muted-foreground">Jobs done</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{Math.round(selectedOffer.firstTimeFixRate * 100)}%</div>
                    <div className="text-sm text-muted-foreground">First-time fix</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Verified badges</h4>
                  <div className="flex flex-wrap gap-2">
                    {(selectedOffer.badges || []).map((badge) => (
                      <Badge key={badge} variant="secondary">
                        {badge.replace(/_/g, " ")}
                      </Badge>
                    ))}
                    {modalPro.insuranceVerified && (
                      <Badge variant="outline" className="gap-1">
                        <Shield className="h-3 w-3" />
                        Licensed & Insured
                      </Badge>
                    )}
                  </div>
                </div>

                {modalPro.specialties?.length ? (
                  <div>
                    <h4 className="font-semibold mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {modalPro.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline">
                          {specialty.replace(/-/g, " ")}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Arrival time</span>
                    <span className="font-medium">{selectedOffer.etaWindow}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Distance</span>
                    <span className="font-medium">{selectedOffer.distanceKm} km away</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Warranty</span>
                    <span className="font-medium">{selectedOffer.warrantyDays} days</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-bold text-primary text-lg">${selectedOffer.price}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg" onClick={() => handleSelect(selectedOffer)}>
                  Book {modalPro.displayName} for ${selectedOffer.price}
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
