'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getMockCityById, getMockSkuById, getMockTicketById, MOCK_TICKET, MOCK_TICKET_ID } from "@/lib/mock-data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Info, MapPin, Sparkles } from "lucide-react";

const TicketPage = () => {
  const searchParams = useSearchParams();
  const ticketId = searchParams.get("t") || MOCK_TICKET_ID;
  const ticket = getMockTicketById(ticketId) || MOCK_TICKET;
  const sku = getMockSkuById(ticket.suggestedSkuId);
  const city = getMockCityById(ticket.cityId);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono">{ticket.id}</span>
            <span>-</span>
            <span>{city?.name ?? ticket.cityId}{ticket.zipcode ? `, ${ticket.zipcode}` : ""}</span>
            <Badge variant="secondary" className="ml-auto capitalize">
              {ticket.priority}
            </Badge>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-wide">AI-curated ticket</p>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-bold leading-tight">
                  {sku?.name || "Replace door handle (lever/knob)"}
                </h1>
                <p className="text-muted-foreground text-lg">
                  Likely issue: {ticket.symptom === "wont_latch" ? "Won't latch" : "Loose or failing handle mechanism"}.
                  Suggested fix: {sku?.name || "Replace handle"}.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border p-4 space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Door</p>
                  <p className="font-semibold">
                    {ticket.doorType === "interior" ? "Interior" : "Exterior"} ·{" "}
                    {ticket.handleType === "lever" ? "Lever" : "Knob"}
                  </p>
                </div>
                <div className="rounded-lg border p-4 space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Location</p>
                  <p className="font-semibold flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {city?.name ?? ticket.cityId}{ticket.zipcode ? `, ${ticket.zipcode}` : ""}
                  </p>
                </div>
                <div className="rounded-lg border p-4 space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Priority</p>
                  <p className="font-semibold capitalize">{ticket.priority} arrival</p>
                  <p className="text-sm text-muted-foreground">
                    Standard: today/tomorrow. Priority: 60-120 minutes (small extra fee).
                  </p>
                </div>
                <div className="rounded-lg border p-4 space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Notes</p>
                  <p className="text-sm text-muted-foreground">
                    {ticket.accessNotes || "No special access notes provided."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 rounded-lg bg-primary/5 border border-primary/10 p-3">
                <Info className="h-4 w-4 text-primary mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  {ticket.aiRationale ||
                    "Likely issue: loose or failing handle mechanism based on the close-up photo and symptom."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="text-sm text-muted-foreground">
                  Photos analyzed: {ticket.photoUrls.length} · SKU: {sku?.name || "Replace handle (lever/knob)"}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" asChild>
                    <Link href={`/upload?t=${ticket.id}`}>Edit photos and answers</Link>
                  </Button>
                  <Button asChild>
                    <Link href={`/offers?t=${ticket.id}`}>See offers</Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-4 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Photos</p>
              <div className="grid grid-cols-3 gap-2">
                {ticket.photoUrls.map((src, idx) => (
                  <div key={src + idx} className="aspect-square overflow-hidden rounded-lg bg-muted">
                    <img src={src} alt={`Ticket photo ${idx + 1}`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                These photos are stored only for this demo and power the mock offers.
              </p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TicketPage;
