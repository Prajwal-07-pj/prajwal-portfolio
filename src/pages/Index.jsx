import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
const Index = () => {
    return (<div className="relative min-h-screen overflow-x-clip bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-y-0 left-0 z-0 hidden w-24 bg-[#ff5a14] xl:block"></div>
      <div className="pointer-events-none fixed inset-y-0 right-0 z-0 hidden w-24 bg-[#ff5a14] xl:block"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>);
};
export default Index;
