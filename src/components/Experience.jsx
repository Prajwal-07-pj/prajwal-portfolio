import { Award, BookOpen } from 'lucide-react';
const Experience = () => {
    const experiences = [
        {
            icon: <BookOpen className="w-6 h-6"/>,
            title: "Academic Projects & Presentations",
            description: "Successfully completed and presented multiple technical projects in areas including IoT, blockchain technology, and software development.",
            highlights: ["Project presentations", "Technical documentation", "Peer collaboration"]
        },
        {
            icon: <Award className="w-6 h-6"/>,
            title: "Notable Coursework",
            description: "Comprehensive study in core computer science subjects with hands-on practical experience.",
            highlights: ["Data Mining", "Operating Systems", "Networking", "Cyber Security"]
        }
    ];
    return (<section id="experience" className="bg-[#060606] px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Experience & Achievements
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#ff5a14]"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            My journey in computer science through academic projects, coursework, and creative endeavors
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (<div key={index} className="rounded border border-white/10 bg-[#101010] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a14]/40">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex rounded bg-[#ff5a14]/15 p-4 text-[#ff5a14]">
                      {experience.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-semibold text-white">
                      {experience.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-white/70">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.highlights.map((highlight, highlightIndex) => (<span key={highlightIndex} className="rounded border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium text-white/85 transition hover:border-[#ff5a14] hover:text-[#ff5a14]">
                          {highlight}
                        </span>))}
                    </div>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </section>);
};
export default Experience;
