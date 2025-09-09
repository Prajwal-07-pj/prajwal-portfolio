import { Download, Mail, Github, Linkedin } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 fade-in">
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="Prajwal Jadhav - Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover shadow-xl ring-4 ring-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 fade-in fade-in-delay-1">
              Hi, I'm{' '}
              <span className="hero-gradient bg-clip-text text-transparent">
                Prajwal Jadhav
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 fade-in fade-in-delay-2">
              Aspiring Backend & Full-Stack Developer
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-2 fade-in fade-in-delay-2">
              2nd Year Diploma Student
            </p>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-primary font-medium mb-12 fade-in fade-in-delay-3">
              "Turning ideas into reliable, scalable, and creative solutions."
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in fade-in-delay-3">
              <button className="btn-hero flex items-center gap-2 w-full sm:w-auto">
                <Download size={20} />
                Download Resume
              </button>
              <button 
                className="btn-outline flex items-center gap-2 w-full sm:w-auto"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 fade-in fade-in-delay-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-scale"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-scale"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:prajwal.jadhav@example.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-scale"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;