const experiences = [
  {
    year: "2024-2025",
    role: "Digital Engagement Designer",
    company: "Officeworks",
    description: "Contract extended from 3 to 9 months due to exceptional delivery"
  },
  {
    year: "2024-2025",
    role: "Social Media Manager",
    company: "Victoria Seadragons Underwater Rugby",
    description: "Complete social media strategy and content creation"
  },
  {
    year: "2019-2024",
    role: "Co-founder & Product Designer",
    company: "Navis Sideralis",
    description: "MVP design, UX research, and design consultancy"
  },
  {
    year: "2015-2019",
    role: "Freelance Graphic Designer",
    company: "Various Clients",
    description: "Portfolio websites, business sites, and branding projects"
  },
  {
    year: "2018-2019",
    role: "Art Curator",
    company: "Dabster Art Lounge",
    description: "Exhibition curation and gallery management"
  },
  {
    year: "2006-2008",
    role: "Art Teacher",
    company: "Kindergarten (Egypt)",
    description: "Teaching art to expatriate children"
  },
  {
    year: "2004-2006",
    role: "Project Manager",
    company: "Architect Agency",
    description: "Project coordination and client relations"
  },
  {
    year: "2003-2004",
    role: "Designer",
    company: "Advertising Agency",
    description: "Commercial design projects"
  },
  {
    year: "2002-2003",
    role: "Character & Colour-In Artist",
    company: "Studio Argus",
    description: "Foundation in artistic skills"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-primary bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            15+ years of creative evolution across continents
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 animate-fade-in ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1.5 md:-translate-x-2 shadow-glow" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-8 md:ml-0`}>
                    <div className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-glow transition-smooth">
                      <div className="text-sm font-semibold text-accent mb-2">{exp.year}</div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <div className="text-muted-foreground font-medium mb-3">{exp.company}</div>
                      <p className="text-foreground/80">{exp.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-16 p-8 bg-gradient-subtle rounded-lg shadow-elegant animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Education</h3>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-lg">BA</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Bachelor of Arts</div>
                <div className="text-muted-foreground">Institute of Contemporary Art</div>
                <div className="text-sm text-muted-foreground mt-1">2003-2007</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
