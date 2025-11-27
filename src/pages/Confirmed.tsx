'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getMockOffersForTicket,
  getMockProById,
  getMockSkuById,
  getMockTicketById,
  MOCK_TICKET,
  MOCK_TICKET_ID,
} from "@/lib/mock-data";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Clock3, MapPin } from "lucide-react";

const ConfirmedPage = () => {
  const searchParams = useSearchParams();
  const ticketId = searchParams.get("t") || MOCK_TICKET_ID;
  const offerId = searchParams.get("o");

  const ticket = getMockTicketById(ticketId) || MOCK_TICKET;
  const offers = getMockOffersForTicket(ticket.id);
  const offer = offers.find((o) => o.id === offerId) || offers[0];
  const pro = getMockProById(offer.proId);
  const sku = getMockSkuById(ticket.suggestedSkuId);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold">You are booked!</h1>
          <p className="text-lg text-muted-foreground">
            {pro?.displayName || "Your pro"} is confirmed for {offer.etaWindow}. You will get a reminder before arrival.
          </p>

          <Card className="p-6 text-left space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Job</p>
              <p className="font-semibold">{sku?.name || "Replace interior door handle (lever/knob)"}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {ticket.cityId}{ticket.zipcode ? `, ${ticket.zipcode}` : ""}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg border p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Pro</p>
                <p className="font-semibold">{pro?.displayName || "Selected Pro"}</p>
                <p className="text-sm text-muted-foreground">
                  {pro?.rating ? `${pro.rating} rating • ${pro.jobsDone} jobs` : "Independent professional"}
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Arrival window</p>
                <div className="flex items-center gap-2 font-semibold">
                  <Clock3 className="h-4 w-4 text-primary" />
                  <span>{offer.etaWindow}</span>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              You will be able to rate your pro after the job. Payment is held in secure escrow until completion.
            </div>
          </Card>

          <div className="flex justify-center gap-3">
            <Button variant="outline" asChild>
              <Link href={`/offers?t=${ticket.id}`}>Back to offers</Link>
            </Button>
            <Button asChild>
              <Link href="/">Return home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConfirmedPage;
