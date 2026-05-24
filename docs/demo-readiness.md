# Snap'n'Fix Demo Readiness

## Stable demo path

/ -> /upload?t=TKT-78421 -> /ticket?t=TKT-78421 -> /offers?t=TKT-78421 -> /checkout?t=TKT-78421&o=<offerId> -> /confirmed?t=TKT-78421&o=<offerId>

## Canonical mock data

Use `src/lib/mock-data.ts` as the source of truth for:

- Ticket
- SKUs
- Pros
- Offers
- City config used by the main demo flow

Older `src/data/*` files are legacy unless actively imported. Keep them before the demo; city routes still use `src/data/cityData`.

## Build gate

Before demo:

```bash
pnpm build
pnpm dev
```

The demo is considered presentable only when both pass.

## Non-goals before demo

- Real uploads
- Real AI
- Real payments
- Full App Router migration
- Backend integration
