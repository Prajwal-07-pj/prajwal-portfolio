import { useState } from 'react';
import { Send, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "prajwal.jadhav@example.com",
      link: "mailto:prajwal.jadhav@example.com"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/yourusername",
      link: "https://github.com/yourusername"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      link: "https://linkedin.com/in/yourusername"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-hero w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get in touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a chat about technology and development.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass-card p-6 rounded-xl hover-lift flex items-center gap-4 group"
                  >
                    <div className="flex-shrink-0 p-3 hero-gradient rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.label}
                      </h4>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;