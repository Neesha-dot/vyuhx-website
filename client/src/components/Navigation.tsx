import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Journey", to: "journey" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Technologies", to: "technologies" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-gray-200 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <img 
            src="/logo.png" 
            alt="VyuhX Technologies Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className={cn(
            "font-display font-bold text-2xl tracking-tight transition-all duration-300",
            isScrolled ? "text-slate-900" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          )}>
            VyuhX <span className="text-cyan-400">Technologies</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={cn(
                "nav-link text-sm font-medium cursor-pointer transition-colors relative group",
                isScrolled ? "text-slate-600 hover:text-cyan-600" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="contact" smooth={true} duration={500}>
            <Button 
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full px-6 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-600 hover:text-cyan-600 hover:bg-slate-50 rounded-lg font-medium flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-cyan-500" />
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Link to="contact" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="nav-cta-button w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-6">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
