export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-primary bg-clip-text text-transparent">
            A Creative Journey Across Continents
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p className="animate-slide-in">
              My professional journey is a story of <strong className="text-foreground">creative passion, adaptability, and continuous growth</strong> across diverse industries and countries.
            </p>

            <p className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
              Part of my career was spent in the field of music industry, working as a <strong className="text-foreground">vocalist and songwriter</strong> for a few years in a jazz band and electronic experiment project.
            </p>

            <p className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              My design journey began during my diploma studies as a Character & Colour-In Artist at Studio Argus, providing a strong creative foundation. After transitioning into advertising and later project management at an architect agency, I developed invaluable skills in <strong className="text-foreground">project coordination, client relations, and managing complex creative workflows</strong>.
            </p>

            <p className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
              Living in Egypt, I channeled my passion into education as an Art Teacher, adapting my communication skills to a unique, multicultural environment. After relocating to Australia in 2015, I re-entered the professional world as a <strong className="text-foreground">freelance graphic designer</strong>, serving diverse clients while deepening my expertise.
            </p>

            <p className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
              In 2018, I stepped into art curation at Dabster Art Lounge in Bentleigh, developing a keen eye for talent and exhibition management. A year later, I co-founded the startup <strong className="text-foreground">Navis Sideralis</strong>, where I conducted in-depth research and designed solutions that directly bridged client pains with business goals.
            </p>

            <p className="animate-slide-in" style={{ animationDelay: '0.5s' }}>
              Most recently, in December 2024, I joined <strong className="text-foreground">Officeworks as a Digital Engagement Designer</strong>. My ability to quickly deliver value led to my initial three-month contract being extended to nine months, contributing to significant digital projects for a leading national brand.
            </p>

            <div className="pt-8 border-t border-border mt-8 animate-slide-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-xl font-semibold text-foreground text-center">
                My career is a testament to my ability to thrive in new environments, master new skills, and consistently apply a creative and strategic mindset to every challenge.
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-12 p-6 bg-card rounded-lg shadow-elegant animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { lang: 'English', level: 'Fluent' },
                { lang: 'Russian', level: 'Native' },
                { lang: 'Ukrainian', level: 'Fluent' },
                { lang: 'French', level: 'Basic (A2)' },
                { lang: 'Portuguese', level: 'Basic (A1)' }
              ].map((item) => (
                <span key={item.lang} className="px-4 py-2 bg-secondary rounded-full text-sm hover:scale-105 transition-smooth cursor-default">
                  <strong className="text-foreground">{item.lang}</strong>
                  <span className="text-muted-foreground ml-1">• {item.level}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
