'use client';

import Link from "next/link";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Fixed price from a photo. Book a vetted pro in minutes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="text-muted-foreground hover:text-foreground">How it works</Link></li>
              <li><Link href="/prices" className="text-muted-foreground hover:text-foreground">Prices</Link></li>
              <li><Link href="/cities/chicago" className="text-muted-foreground hover:text-foreground">Cities</Link></li>
              <li><Link href="/support" className="text-muted-foreground hover:text-foreground">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Partners</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pro" className="text-muted-foreground hover:text-foreground">For Pros</Link></li>
              <li><Link href="/business" className="text-muted-foreground hover:text-foreground">For Business</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal/marketplace" className="text-muted-foreground hover:text-foreground">Marketplace Info</Link></li>
              <li><Link href="/legal/terms" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
              <li><Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-sm text-muted-foreground">
          <p className="mb-4 font-medium">
            Repairs by independent professionals. Snap'n'Fix facilitates bookings and payments.
          </p>
          <p>(c) 2024 Snap'n'Fix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
