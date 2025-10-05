import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="accent" 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-elegant"
              asChild
            >
              <a href="mailto:your.email@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-background/10 backdrop-blur-sm"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-background/10 backdrop-blur-sm"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70">
              Based in Australia • Available for remote opportunities worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
