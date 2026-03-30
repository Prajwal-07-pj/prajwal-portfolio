import { Github, Linkedin, Mail, Heart } from 'lucide-react';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];
    const socialLinks = [
        {
            icon: <Github className="w-5 h-5"/>,
            href: 'https://github.com/Prajwal-07-pj',
            label: 'GitHub'
        },
        {
            icon: <Linkedin className="w-5 h-5"/>,
            href: 'https://linkedin.com/in/yourusername',
            label: 'LinkedIn'
        },
        {
            icon: <Mail className="w-5 h-5"/>,
            href: 'mailto:jadhavprajwal2307@gmail.com',
            label: 'Email'
        }
    ];
    const handleNavClick = (href) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };
    return (<footer className="border-t border-white/10 bg-[#050505] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Prajwal Jadhav</h3>
            <p className="leading-relaxed text-white/70">
              Aspiring Backend & Full-Stack Developer passionate about creating 
              innovative solutions and turning ideas into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
                {quickLinks.map((link, index) => (<button key={index} onClick={() => handleNavClick(link.href)} className="block w-full text-white/70 transition-colors duration-200 hover:text-[#ff5a14]">
                  {link.label}
                </button>))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (<a key={index} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="rounded-full bg-white/10 p-3 text-white transition-all duration-200 hover:scale-105 hover:bg-[#ff5a14] hover:text-white" aria-label={social.label}>
                  {social.icon}
                </a>))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-white/70">
            © {currentYear} Prajwal Jadhav. Made with{' '}
            <Heart className="w-4 h-4 text-red-400" fill="currentColor"/>
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>);
};
export default Footer;
