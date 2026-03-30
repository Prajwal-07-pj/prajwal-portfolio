import { ExternalLink, Github } from 'lucide-react';
const Projects = () => {
    const projects = [
        {
            title: "SecureVault",
            description: "Decentralized platform using Ethereum & Homomorphic Encryption for secure the sensitive information.",
            techStack: ["Blockchain", "Ethereum", "Homomorphic Encryption", "React", "Node.js"],
            githubLink: "https://github.com/Prajwal-07-pj/securevault",
            liveLink: null,
            status: "Completed"
        },
        {
          title: "Internet Time Machine",
          description: "React project that recreates historical web experiences with a timeline-based browsing concept.",
          techStack: ["React", "JavaScript", "CSS", "API Integration"],
          githubLink: "https://github.com/Prajwal-07-pj/Internet_TimeMachine",
          liveLink: null,
          status: "Completed"
        },
        {
          title: "Portfolio",
          description: "Personal portfolio built with React to showcase skills, projects, and contact information.",
          techStack: ["React", "JavaScript", "CSS", "Vite"],
          githubLink: "https://github.com/Prajwal-07-pj/prajwal-portfolio",
          liveLink: null,
          status: "Completed"
        },
        {
          title: "Amazon Clone",
          description: "Frontend clone of Amazon built using HTML, CSS, and JavaScript with responsive UI sections.",
          techStack: ["HTML", "CSS", "JavaScript"],
          githubLink: "https://github.com/Prajwal-07-pj/Amazon_Clone",
          liveLink: null,
          status: "Completed"
        },
        {
          title: "Intern Management System",
          description: "Complete MERN stack project for managing interns, assignments, progress tracking, and admin workflows.",
          techStack: ["MongoDB", "Express.js", "React", "Node.js", "MERN"],
          githubLink: "https://github.com/Prajwal-07-pj/Intern_Managment_System",
          liveLink: null,
          status: "Completed"
        },
        {
          title: "GTA VI Clone",
          description: "Completed MERN stack clone project inspired by GTA VI with modern UI, routing, and full-stack integration.",
          techStack: ["MongoDB", "Express.js", "React", "Node.js", "MERN"],
          githubLink: "https://github.com/Prajwal-07-pj/GTA_VI",
          liveLink: null,
          status: "Completed"
        },

    ];
    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "bg-[#0f1a10] text-[#7dff90] border-[#234727]";
            case "In Development":
                return "bg-[#2d1608] text-[#ffad77] border-[#6f3616]";
            case "Coming Soon":
                return "bg-[#1f1a09] text-[#ffd96d] border-[#5f4e1d]";
            default:
                return "bg-[#121212] text-[#c6c6c6] border-[#353535]";
        }
    };
    return (<section id="projects" className="bg-[#080808] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Featured Projects
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#ff5a14]"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Here are some of the projects I've worked on, showcasing my skills in various technologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (<div key={index} className="group rounded border border-white/10 bg-[#101010] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a14]/40">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white transition-colors duration-200 group-hover:text-[#ff5a14]">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="mb-4 leading-relaxed text-white/70">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (<span key={techIndex} className="rounded border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium text-white/85 transition hover:border-[#ff5a14] hover:text-[#ff5a14]">
                      {tech}
                    </span>))}
                </div>

                <div className="flex gap-4">
                  <a href={project.githubLink} className="flex items-center gap-2 text-white/70 transition-colors duration-200 hover:text-[#ff5a14]">
                    <Github size={18}/>
                    <span className="text-sm font-medium">
                      {project.status === "Coming Soon" ? "Coming Soon" : "View Code"}
                    </span>
                  </a>
                  {project.liveLink && (<a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 transition-colors duration-200 hover:text-[#ff5a14]">
                      <ExternalLink size={18}/>
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>)}
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </section>);
};
export default Projects;
