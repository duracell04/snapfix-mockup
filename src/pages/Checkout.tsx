'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  getMockOffersForTicket,
  getMockProById,
  getMockSkuById,
  getMockTicketById,
  MOCK_TICKET,
  MOCK_TICKET_ID,
} from "@/lib/mock-data";
import { useSearchParams, useRouter } from "next/navigation";
import { AlertTriangle, CheckCircle2, Shield } from "lucide-react";
import Link from "next/link";

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const ticketId = searchParams.get("t") || MOCK_TICKET_ID;
  const offerId = searchParams.get("o");

  const ticket = getMockTicketById(ticketId) || MOCK_TICKET;
  const offers = getMockOffersForTicket(ticket.id);
  const offer = offers.find((o) => o.id === offerId) || offers[0];
  const pro = getMockProById(offer.proId);
  const sku = getMockSkuById(ticket.suggestedSkuId);

  const fee = Math.round(offer.price * 0.1);
  const total = offer.price + fee;

  const handleConfirm = () => {
    router.push(`/confirmed?t=${ticket.id}&o=${offer.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono">{ticket.id}</span>
            <span>-</span>
            <span>{ticket.cityId}{ticket.zipcode ? `, ${ticket.zipcode}` : ""}</span>
            <Badge variant="secondary" className="ml-auto capitalize">
              {ticket.priority}
            </Badge>
          </div>

          <Card className="p-6 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Job</p>
                <h1 className="text-2xl font-bold">
                  {sku?.name || "Replace interior door handle (lever/knob)"}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {ticket.cityId}{ticket.zipcode ? `, ${ticket.zipcode}` : ""} · {ticket.doorType} · {ticket.handleType}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">ETA</p>
                <p className="font-semibold">{offer.etaWindow}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Job price</span>
                <span className="font-semibold">${offer.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Speed & Trust Fee (10%)</span>
                <span className="font-semibold">${fee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="rounded-lg border p-4 flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">{pro?.displayName || "Your pro"}</p>
                <p className="text-sm text-muted-foreground">
                  {pro?.rating ? `${pro.rating} rating • ${pro.jobsDone} jobs` : "Verified independent professional"}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3 text-primary" />
                  <span>{offer.warrantyDays}-day warranty · Payment held in secure escrow</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-muted/40 p-3 text-sm text-muted-foreground flex gap-2">
              <AlertTriangle className="h-4 w-4 text-primary mt-0.5" />
              <span>
                Work is performed by {pro?.displayName || "your selected pro"}, an independent professional. Warranty:{" "}
                {offer.warrantyDays} days, provided by {pro?.displayName || "the pro"}.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button variant="outline" asChild>
                <Link href={`/offers?t=${ticket.id}`}>Back to offers</Link>
              </Button>
              <Button onClick={handleConfirm} size="lg">
                Confirm & pay (mock)
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
