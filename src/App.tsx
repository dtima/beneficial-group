import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "./contexts/LanguageContext";
import "./App.css";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Team from "./pages/about/Team";
import CEO from "./pages/about/CEO";
import Forestry from "./pages/services/Forestry";
import Mining from "./pages/services/Mining";
import Agriculture from "./pages/services/Agriculture";
import Transport from "./pages/services/Transport";

const App = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/ceo" element={<CEO />} />
            <Route path="/services/forestry" element={<Forestry />} />
            <Route path="/services/mining" element={<Mining />} />
            <Route path="/services/agriculture" element={<Agriculture />} />
            <Route path="/services/transport" element={<Transport />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;