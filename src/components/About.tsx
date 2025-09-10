import { GraduationCap, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Diploma in Computer Engineering, 3rd Year",
      description: "Building strong foundations in computer science and engineering principles"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Building projects like SkillChain",
      description: "Blockchain + homomorphic encryption for decentralized verification"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Exploring Modern Technologies",
      description: "Flask, React, and Node.js for real-world applications"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Engineering student with a strong foundation in{' '}
                <span className="text-primary font-semibold">Python, JavaScript, and Java</span>. 
                I enjoy solving real-world problems using technology, and I'm currently focusing on{' '}
                <span className="text-primary font-semibold">Backend Development</span> and{' '}
                <span className="text-primary font-semibold">Data Structures & Algorithms</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Apart from coding, I love cricket, design, and working on creative projects. 
                I believe in the power of technology to transform ideas into impactful solutions 
                that can make a difference in people's lives.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 hero-gradient rounded-lg text-white">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;