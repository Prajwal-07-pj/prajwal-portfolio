import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SecureVault",
      description: "Decentralized platform using Ethereum & Homomorphic Encryption for secure the sensitive information.",
      techStack: ["Blockchain", "Ethereum", "Homomorphic Encryption", "React", "Node.js"],
      githubLink: "#",
      liveLink: null,
      status: "In Development"
    },
    {
      title: "Stackulator",
      description: "Infix to Prefix & Postfix converter using stacks in C. Efficient algorithm implementation with comprehensive error handling.",
      techStack: ["C", "Data Structures", "Algorithms", "Stack Implementation"],
      githubLink: "#",
      liveLink: null,
      status: "Completed"
    },
    {
      title: "Resume Analyzer",
      description: "Upload resume PDF and get AI-driven suggestions for improvement. Built with React frontend and Flask backend.",
      techStack: ["React", "Flask", "Python", "AI/ML", "PDF Processing"],
      githubLink: "#",
      liveLink: null,
      status: "Coming Soon"
    },
    {
      title: "NagarNetra",
      description: "App which Report local problems and track resolutions. Built with Flutter frontend and Node.js backend.”",
      techStack: ["Flutter", "Node.js", "PosgreSQL", "Etherem"],
      githubLink: "#",
      liveLink: null,
      status: "Coming Soon"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Coming Soon":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in various technologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-pill text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">
                      {project.status === "Coming Soon" ? "Coming Soon" : "View Code"}
                    </span>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;