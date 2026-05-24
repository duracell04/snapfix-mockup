import { Suspense } from "react";
import ConfirmedPage from "@/pages/Confirmed";

const Page = () => (
  <Suspense fallback={null}>
    <ConfirmedPage />
  </Suspense>
);

export default Page;
