
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Menu, Briefcase, Zap, FileCheck, MessageSquare, User, Instagram, Twitter, Linkedin, Globe, Sparkles, Award, Shield } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Resume Builder", href: "/builder" },
    { name: "ATS Scanner", href: "/ats-scanner" },
    { name: "Compare Resumes", href: "/resume-compare" },
    { name: "QwiXCert", href: "/certification-center" },
    { name: "Job Board", href: "/job-board" },
    { name: "Career Path Simulator", href: "/career-path-simulator" },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const productLinks = [
    { name: "Resume Builder", href: "/builder", icon: FileText },
    { name: "ATS Scanner", href: "/ats-scanner", icon: Zap },
    { name: "Compare Resumes", href: "/resume-compare", icon: FileCheck },
    { name: "QwiXCert", href: "/certification-center", icon: Shield },
    { name: "Job Board", href: "/job-board", icon: Briefcase },
    { name: "Career Simulator", href: "/career-path-simulator", icon: Sparkles },
  ];

  const companyLinks = [
    { name: "Home", href: "/", icon: FileText },
    { name: "About", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: MessageSquare },
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", href: "https://instagram.com/qwikzen_india" },
    { icon: Twitter, name: "Twitter", href: "https://twitter.com/dspraneeth07" },
    { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/company/qwikzen" },
    { icon: Globe, name: "Website", href: "https://qwikzen.netlify.app" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-gradient-to-r from-modern-blue-600 to-soft-purple text-white sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xl font-bold text-white"
            >
              <FileText className="h-6 w-6" />
              <span className="font-sf-pro tracking-tight">QwiX CV</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white font-poppins"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[385px] bg-gradient-to-b from-modern-blue-600 to-soft-purple text-white">
                <div className="flex flex-col gap-6 pt-10">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-base font-medium text-white/90 transition-colors hover:text-white font-poppins"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      <main className="flex-1 bg-gradient-to-b from-gray-50 to-white">
        {children}
      </main>
      
      <footer className="bg-gradient-to-r from-modern-blue-700 to-modern-blue-900 text-white py-10 md:py-14">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company description column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <span className="font-semibold font-sf-pro">QwiX CV</span>
            </div>
            <p className="text-sm text-gray-300 font-poppins max-w-md">
              AI-powered resume builder helping job seekers create professional resumes optimized for ATS systems. Stand out and land your dream job.
            </p>
          </div>
          
          {/* Footer links - balanced layout */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <p className="font-medium font-sf-pro">Product</p>
            <div className="grid grid-cols-2 gap-2">
              {productLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-sm text-gray-300 hover:text-white font-poppins flex items-center gap-2"
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-3">
            <p className="font-medium font-sf-pro">Company</p>
            <div className="grid grid-cols-2 gap-2">
              {companyLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-sm text-gray-300 hover:text-white font-poppins flex items-center gap-2"
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Social Media Links - Centered */}
        <div className="container mt-8 text-center">
          <p className="font-medium font-sf-pro mb-4">FOLLOW US</p>
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="container pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-400 font-poppins">
            © {new Date().getFullYear()} QwiX CV by QwikZen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
