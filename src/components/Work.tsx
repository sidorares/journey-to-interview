import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Officeworks Digital Engagement",
    role: "Digital Engagement Designer",
    period: "2024-2025",
    description: "Leading digital design initiatives for Australia's leading office supplies retailer. Extended contract from 3 to 9 months due to exceptional delivery and value.",
    tags: ["UX Design", "Digital Strategy", "E-commerce"],
    highlight: true
  },
  {
    title: "Navis Sideralis",
    role: "Co-founder & Product Designer",
    period: "2019-2024",
    description: "Conducted in-depth research and designed MVP solutions bridging client needs with business goals. Provided design consultancy for various clients.",
    tags: ["Product Design", "UX Research", "Strategy"],
    highlight: true
  },
  {
    title: "Victoria Seadragons Underwater Rugby",
    role: "Social Media Manager",
    period: "2024-2025",
    description: "Complete social media management for a sports club, creating engaging content and building community presence.",
    tags: ["Social Media", "Content Strategy", "Branding"]
  },
  {
    title: "Portfolio & Commercial Websites",
    role: "Freelance Designer & Developer",
    period: "2015-2019",
    description: "Designed and developed multiple websites including artist portfolios, photographer showcases, educational platforms, and business websites.",
    tags: ["Web Design", "Development", "WordPress"],
    links: [
      { name: "apale.art", url: "https://apale.art" },
      { name: "zhmodikov.com", url: "https://zhmodikov.com" },
      { name: "irisart.com", url: "https://irisart.com/" },
      { name: "victoryaccounts.com.au", url: "https://victoryaccounts.com.au/" }
    ]
  },
  {
    title: "Dabster Art Lounge",
    role: "Art Curator",
    period: "2018-2019",
    description: "Curated art exhibitions and managed gallery operations in Bentleigh, developing a keen eye for talent and exhibition design.",
    tags: ["Curation", "Exhibition Design", "Art Direction"]
  }
];

export const Work = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-primary bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            A selection of projects showcasing strategic thinking and creative excellence
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-elegant transition-smooth ${
                  project.highlight ? 'md:col-span-2 border-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-smooth">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.role} • {project.period}
                      </CardDescription>
                    </div>
                    {project.highlight && (
                      <Badge variant="default" className="bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.links && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-smooth"
                        >
                          {link.name}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
