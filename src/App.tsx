
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { BlockchainProvider } from "./context/BlockchainContext";
import { Toaster } from "@/components/ui/toaster";
import Index from "./pages/Index";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumePreview from "./pages/ResumePreview";
import ShareToCompany from "./pages/ShareToCompany";
import JobBoard from "./pages/JobBoard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ATSScanner from "./pages/ATSScanner";
import ResumeCompare from "./pages/ResumeCompare";
import CareerPathSimulator from "./pages/CareerPathSimulator";
import Dashboard from "./pages/Dashboard";
import CertificationCenter from "./pages/CertificationCenter";
import CertificationTest from "./pages/CertificationTest";
import CertificateVerification from "./pages/CertificateVerification";
import { useEffect } from "react";

function App() {
  // Load fonts
  useEffect(() => {
    // Add Google Fonts to the document head
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontLink);

    // Add SF Pro Display (or a similar font that mimics it)
    const sfProLink = document.createElement('link');
    sfProLink.rel = 'stylesheet';
    sfProLink.href = 'https://fonts.cdnfonts.com/css/sf-pro-display';
    document.head.appendChild(sfProLink);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(sfProLink);
    };
  }, []);

  return (
    <ThemeProvider>
      <BlockchainProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/builder" element={<ResumeBuilder />} />
            <Route path="/resume-preview" element={<ResumePreview />} />
            <Route path="/share-to-company" element={<ShareToCompany />} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ats-scanner" element={<ATSScanner />} />
            <Route path="/resume-compare" element={<ResumeCompare />} />
            <Route path="/career-path-simulator" element={<CareerPathSimulator />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/certification-center" element={<CertificationCenter />} />
            <Route path="/certification/:testId" element={<CertificationTest />} />
            <Route path="/verify-cert/:certHash?" element={<CertificateVerification />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </BlockchainProvider>
    </ThemeProvider>
  );
}

export default App;
