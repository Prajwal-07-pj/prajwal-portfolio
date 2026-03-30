import { GraduationCap, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <GraduationCap className="w-6 h-6"/>,
            title: "Diploma in Computer Engineering, 3rd Year",
            description: "Building strong foundations in computer science and engineering principles"
        },
        {
            icon: <Lightbulb className="w-6 h-6"/>,
            title: "Building projects like SecureVault, Internet Time Machine, Portfolio, and Amazon Clone",
            description: "Completed projects focused on practical and real-world development skills"
        },
        {
            icon: <Rocket className="w-6 h-6"/>,
            title: "Exploring Modern Technologies",
            description: "GENAI, React, and Node.js for real-world applications"
        }
    ];
    return (<section id="about" className="bg-[#080808] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">About Me</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((highlight, index) => (<div key={index} className="rounded border border-white/10 bg-[#101010] p-5">
              <div className="mb-3 inline-flex rounded bg-[#ff5a14]/20 p-2 text-[#ff5a14]">{highlight.icon}</div>
              <h3 className="mb-2 text-sm font-semibold text-white">{highlight.title}</h3>
              <p className="text-xs leading-5 text-white/60">{highlight.description}</p>
            </div>))}
        </div>
      </div>
    </section>);
};
export default About;
