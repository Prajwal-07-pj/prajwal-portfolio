import { Award, BookOpen, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Projects & Presentations",
      description: "Successfully completed and presented multiple technical projects in areas including IoT, blockchain technology, and software development.",
      highlights: ["Project presentations", "Technical documentation", "Peer collaboration"]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Notable Coursework",
      description: "Comprehensive study in core computer science subjects with hands-on practical experience.",
      highlights: ["Data Mining", "Operating Systems", "Networking", "Cyber Security"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            My journey in computer science through academic projects, coursework, and creative endeavors
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover-lift"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-4 hero-gradient rounded-full text-white">
                      {experience.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="skill-pill text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;