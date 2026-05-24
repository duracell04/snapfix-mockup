import { Suspense } from "react";
import OffersPage from "@/pages/Offers";

const Page = () => (
  <Suspense fallback={null}>
    <OffersPage />
  </Suspense>
);

export default Page;
