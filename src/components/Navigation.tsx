import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-smooth"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/70 hover:text-foreground transition-smooth"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="default"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
