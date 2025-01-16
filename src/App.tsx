import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Mining from "./pages/services/Mining";
import Transport from "./pages/services/Transport";
import Forestry from "./pages/services/Forestry";
import Agriculture from "./pages/services/Agriculture";
import CEO from "./pages/about/CEO";
import Team from "./pages/about/Team";
import Projects from "./pages/Projects";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/mining" element={<Mining />} />
            <Route path="/services/transport" element={<Transport />} />
            <Route path="/services/forestry" element={<Forestry />} />
            <Route path="/services/agriculture" element={<Agriculture />} />
            <Route path="/about/ceo" element={<CEO />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;