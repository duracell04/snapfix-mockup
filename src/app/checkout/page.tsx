import { Suspense } from "react";
import CheckoutPage from "@/pages/Checkout";

const Page = () => (
  <Suspense fallback={null}>
    <CheckoutPage />
  </Suspense>
);

export default Page;
