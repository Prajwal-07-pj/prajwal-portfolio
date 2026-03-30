import { useState } from 'react';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_6s0iv61';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_aiw1i0m';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Jz0diKflZ8BQ88_sm';

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
        const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Prajwal',
        }, {
          publicKey: EMAILJS_PUBLIC_KEY,
        });
            console.log('Email sent successfully:', result);
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon!",
            });
            // Reset form
            setFormData({ name: '', email: '', message: '' });
        }
        catch (error) {
            console.error('Failed to send email:', error);

          const status = error?.status;
          const details = error?.text || 'Unknown EmailJS error';
          const isPreconditionError = status === 412;
          const lowerDetails = String(details).toLowerCase();
          const isGmailInvalidGrant = lowerDetails.includes('gmail_api') && lowerDetails.includes('invalid grant');

          let errorDescription = "Something went wrong. Please try again or contact me directly.";

          if (isGmailInvalidGrant) {
            errorDescription = "Email service is disconnected. Reconnect your Gmail in EmailJS dashboard: Email Services > Gmail > Reconnect, then try again.";
          } else if (isPreconditionError) {
            errorDescription = "EmailJS blocked this request (412). Check Service ID, Template ID, Public Key, and allow your current domain (localhost or deployed URL) in EmailJS account settings.";
          }

            toast({
                title: "Error sending message",
            description: errorDescription,
                variant: "destructive"
            });

          if (isPreconditionError) {
            console.error('EmailJS 412 details:', details);
          }
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5"/>,
            label: "Email",
            value: "jadhavprajwal2307@gmail.com",
            link: "mailto:jadhavprajwal2307@gmail.com"
        },
        {
            icon: <Github className="w-5 h-5"/>,
            label: "GitHub",
            value: "github.com/Prajwal-07-pj",
            link: "https://github.com/Prajwal-07-pj"
        },
        {
            icon: <Linkedin className="w-5 h-5"/>,
            label: "LinkedIn",
            value: "https://www.linkedin.com/in/prajwal-jadhav-4a2120373/",
            link: "https://www.linkedin.com/in/prajwal-jadhav-4a2120373/"
        }
    ];
    return (<section id="contact" className="bg-[#080808] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Let's Work Together
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#ff5a14]"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="rounded border border-white/10 bg-[#101010] p-8">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/90">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required disabled={isLoading} className="w-full rounded border border-white/15 bg-[#0b0b0b] px-4 py-3 text-white placeholder:text-white/45 focus:border-[#ff5a14] focus:outline-none disabled:opacity-50" placeholder="Enter your name"/>
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/90">
                    Your Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required disabled={isLoading} className="w-full rounded border border-white/15 bg-[#0b0b0b] px-4 py-3 text-white placeholder:text-white/45 focus:border-[#ff5a14] focus:outline-none disabled:opacity-50" placeholder="Enter your email"/>
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/90">
                    Your Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} disabled={isLoading} className="w-full resize-none rounded border border-white/15 bg-[#0b0b0b] px-4 py-3 text-white placeholder:text-white/45 focus:border-[#ff5a14] focus:outline-none disabled:opacity-50" placeholder="Tell me about your project or just say hello!"/>
                </div>
                
                <button type="submit" disabled={isLoading} className="flex w-full items-center justify-center gap-2 rounded bg-[#ff5a14] px-8 py-3.5 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50">
                  <Send size={18} className={isLoading ? 'animate-spin' : ''}/>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-2xl font-semibold text-white">
                  Get in touch
                </h3>
                <p className="mb-8 leading-relaxed text-white/70">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a chat about technology and development.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (<a key={index} href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="group flex items-center gap-4 rounded border border-white/10 bg-[#101010] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a14]/40">
                    <div className="flex-shrink-0 rounded bg-[#ff5a14]/15 p-3 text-[#ff5a14] transition-transform duration-200 group-hover:scale-110">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">
                        {info.label}
                      </h4>
                      <p className="text-white/65 transition-colors duration-200 group-hover:text-[#ff5a14]">
                        {info.value}
                      </p>
                    </div>
                  </a>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
export default Contact;
