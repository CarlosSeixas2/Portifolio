import Heading from "../atoms/heading";
import Text from "../atoms/text";
import SectionDivider from "../atoms/section-divider";
import AnimatedWrapper from "../atoms/animated-wrapper";
import ExperienceCard from "../molecules/experience-card";

import { experiences } from "../../data/experience";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="pt-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heading level={2} highlight="Experiência">
            Minha Experiência
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Minha jornada profissional através de diferentes empresas e
            projetos, sempre focando em crescimento e aprendizado contínuo.
          </Text>
          <SectionDivider />
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <AnimatedWrapper
                key={index}
                className={`transition-delay-[${index * 300}ms]`}
              >
                <div className="relative">
                  <div className="absolute left-2 sm:left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-black shadow-lg shadow-green-500/50"></div>
                  <div className="ml-12 sm:ml-20">
                    <ExperienceCard {...experience} />
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
