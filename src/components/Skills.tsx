import { Code, Globe, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming",
      skills: ["Python", "JavaScript", "Java", "C"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "Node.js", "Express.js"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      skills: ["MongoDB", "MySQL"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Data Structures & Algorithms", "Cloud & Cybersecurity"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift text-center"
              >
                <div className="inline-flex p-4 hero-gradient rounded-full text-white mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-pill inline-block m-1"
                    >
                      {skill}
                    </span>
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

export default Skills;