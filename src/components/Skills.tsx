import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Design Tools",
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe Premiere Pro", "Adobe After Effects", "Framer"]
  },
  {
    category: "Development",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "Contentful", "Joomla", "InDesign Server"]
  },
  {
    category: "Core Competencies",
    skills: ["UX Research", "UI Design", "Product Design", "Digital Strategy", "User Testing", "Prototyping", "Design Systems", "Branding"]
  },
  {
    category: "Soft Skills",
    skills: ["Project Management", "Client Relations", "Multicultural Communication", "Strategic Thinking", "Problem Solving", "Adaptability"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            A comprehensive toolkit built through diverse experiences
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default hover:scale-105 hover:shadow-glow"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
