import { Suspense } from "react";
import TicketPage from "@/pages/Ticket";

const Page = () => (
  <Suspense fallback={null}>
    <TicketPage />
  </Suspense>
);

export default Page;
