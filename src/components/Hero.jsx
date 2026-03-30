import { Download } from 'lucide-react';
import prajwalImage from '@/assets/prajwal.png';

const Hero = () => {
    const handleDownload = () => {
        const pdfUrl = "/Prajwal_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Prajwal_Resume.pdf";
        link.click();
    };

    return (<section id="home" className="relative min-h-screen overflow-hidden bg-[#040404] pt-[72px] text-white [background:radial-gradient(circle_at_68%_32%,rgba(38,38,38,0.4),transparent_34%),#040404]">
      <div className="absolute left-0 top-0 h-full w-[10px] bg-[#ff5f1f]" aria-hidden="true"></div>
      <div className="mx-auto grid min-h-[calc(100vh-72px)] w-[94%] max-w-[1240px] grid-cols-1 items-center gap-8 py-8 lg:grid-cols-[1fr_1.1fr] lg:py-0">
        <div className="mx-auto max-w-[500px] px-4 text-center lg:mx-0 lg:pl-14 lg:text-left">
          <span className="mb-7 inline-flex items-center rounded-[3px] bg-[#ff5f1f] px-6 py-3 text-[0.95rem] font-medium text-white">Hello, I am</span>

          <h1 className="mb-4 text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-[1.08] tracking-[0.2px]">
            Prajwal Jadhav
          </h1>

          <p className="mb-8 text-[1.03rem] text-white/85">
            A Professional Web Developer and Passionate about new technologies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button className="inline-flex h-[50px] min-w-[158px] items-center justify-center gap-2 rounded-md bg-[#ff5f1f] px-5 text-[0.96rem] font-medium text-white transition hover:-translate-y-0.5 hover:brightness-110" onClick={handleDownload}>
              <Download size={18}/>
              Download CV
            </button>

            <button className="inline-flex h-[50px] min-w-[158px] items-center justify-center rounded-md border border-white/55 bg-transparent px-5 text-[0.96rem] font-medium text-white transition hover:border-[#ff5f1f] hover:text-[#ff5f1f]" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
              My Work
            </button>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <div className="relative aspect-[4/5] w-[min(92%,760px)] border-l border-t border-white/10 bg-[linear-gradient(160deg,rgba(8,8,8,0.95),rgba(2,2,2,0.96))] max-lg:w-[min(95%,560px)] max-lg:aspect-[4/4.8]">
            <img src={prajwalImage} alt="Prajwal portrait" className="h-full w-full scale-[0.9] object-cover object-[center_35%] [filter:contrast(1.08)_saturate(0.55)_brightness(0.86)_drop-shadow(0_0_10px_rgba(255,255,255,0.14))_drop-shadow(0_10px_20px_rgba(0,0,0,0.32))] md:scale-[0.94]"/>
            <div className="pointer-events-none absolute left-[21%] top-[10%] h-[36%] w-[52%] rotate-[-14deg] border border-white/20" aria-hidden="true"></div>
            <div className="pointer-events-none absolute left-[33%] top-[27%] h-[42%] w-[60%] rotate-[18deg] border border-white/20" aria-hidden="true"></div>
            <div className="pointer-events-none absolute left-[25%] top-[58%] h-[28%] w-[48%] rotate-[-8deg] border border-white/20" aria-hidden="true"></div>

            <div className="absolute bottom-[18px] left-1/2 flex h-[44px] w-[27px] -translate-x-1/2 justify-center rounded-[15px] border border-[#ff5f1f] bg-[#040404]/65 pt-2" aria-hidden="true">
              <span className="h-[10px] w-1 animate-bounce rounded-[10px] bg-[#ff5f1f]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
export default Hero;
