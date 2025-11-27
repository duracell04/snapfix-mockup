import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Prices from "./pages/Prices";
import Pro from "./pages/Pro";
import ProSignup from "./pages/ProSignup";
import Business from "./pages/Business";
import Support from "./pages/Support";
import MarketplaceLegal from "./pages/MarketplaceLegal";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Upload from "./pages/Upload";
import Offers from "./pages/Offers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/pro/signup" element={<ProSignup />} />
          <Route path="/business" element={<Business />} />
          <Route path="/support" element={<Support />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/legal/marketplace" element={<MarketplaceLegal />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
