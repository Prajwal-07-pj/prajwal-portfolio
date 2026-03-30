import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'About Me', href: '#about' },
        { label: 'Services', href: '#skills' },
        { label: 'Portfolio', href: '#projects' },
        { label: 'Testimonials', href: '#experience' },
        { label: 'Blog', href: '#projects' },
        { label: 'Contact Us', href: '#contact' },
    ];

    const handleNavClick = (href) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (<nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95' : 'bg-black/80'}`}>
      <div className="mx-auto w-[94%] max-w-[1240px] border-t-[3px] border-[#ff5f1f] bg-[#050505]">
        <div className="flex h-[72px] items-center justify-between px-4">
          <div className="min-w-[140px]">
            <span className="text-[2rem] font-bold leading-none tracking-[0.4px] text-white">Cod<span className="text-[#ff5f1f]">er</span></span>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (<button key={item.label} onClick={() => handleNavClick(item.href)} className="text-[0.8rem] font-medium text-[#f2f2f2] transition-colors duration-200 hover:text-[#ff5f1f]">
                  {item.label}
                </button>))}
            </div>
          </div>

          <button className="hidden rounded-md bg-[#ff5f1f] px-4 py-2.5 text-[0.8rem] font-semibold text-white transition duration-200 hover:brightness-110 lg:inline-flex" onClick={() => handleNavClick('#contact')}>
            Hire Me!
          </button>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-[#ff5f1f] transition-colors duration-200">
              {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (<div className="lg:hidden">
            <div className="m-4 rounded-lg border border-[#ff5f1f]/25 bg-[#0a0a0a]/95 p-2.5">
              {navItems.map((item) => (<button key={item.label} onClick={() => handleNavClick(item.href)} className="block w-full rounded-md px-2 py-2.5 text-left text-sm text-[#f5f5f5] transition hover:bg-[#ff5f1f]/15">
                  {item.label}
                </button>))}
              <button onClick={() => handleNavClick('#contact')} className="mt-2 w-full rounded-md bg-[#ff5f1f] px-4 py-2.5 text-[0.8rem] font-semibold text-white transition duration-200 hover:brightness-110">
                Hire Me!
              </button>
            </div>
          </div>)}
      </div>
    </nav>);
};
export default Navbar;
