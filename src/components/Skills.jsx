import { Code, Globe, Database, Wrench } from 'lucide-react';
const Skills = () => {
    const skillCategories = [
        {
            icon: <Code className="w-6 h-6"/>,
            title: "Programming",
            skills: ["Python", "JavaScript", "Java", "C"]
        },
        {
            icon: <Globe className="w-6 h-6"/>,
            title: "Web Development",
            skills: ["HTML", "CSS", "React", "Node.js", "Express.js"]
        },
        {
            icon: <Database className="w-6 h-6"/>,
            title: "Databases",
            skills: ["MongoDB", "MySQL"]
        },
        {
            icon: <Wrench className="w-6 h-6"/>,
            title: "Tools & Others",
            skills: ["Git", "GitHub", "VS Code", "Data Structures & Algorithms", "Cloud & Cybersecurity"]
        }
    ];
    return (<section id="skills" className="bg-[#060606] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Skills & Technologies
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#ff5a14]"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (<div key={index} className="rounded border border-white/10 bg-[#101010] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a14]/50">
                <div className="mb-4 inline-flex rounded bg-[#ff5a14]/15 p-4 text-[#ff5a14]">
                  {category.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (<span key={skillIndex} className="m-1 inline-block rounded border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium text-white/85 transition hover:border-[#ff5a14] hover:text-[#ff5a14]">
                      {skill}
                    </span>))}
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </section>);
};
export default Skills;
