import seixasImg from "../../assets/seixas.png";
import AnimatedWrapper from "../atoms/animated-wrapper";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedWrapper className="transition-opacity delay-300 duration-700">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Sobre <span className="text-green-400">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
          </AnimatedWrapper>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-green-500/30 shadow-2xl shadow-green-500/20 animate-float">
                <img
                  src={seixasImg}
                  alt="Carlos Seixas"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-green-400 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full -z-10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <AnimatedWrapper className="transition-delay-700ms">
                <h3 className="text-2xl font-semibold text-white">
                  Desenvolvedor Full Stack
                </h3>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Desenvolvedor Full Stack com mais de 3 anos de experiência na
                  construção de aplicações web, APIs, automações e soluções
                  baseadas em IA. Trabalho principalmente com{" "}
                  <span className="font-extrabold">Python, React e Node,</span>{" "}
                  atuando desde a arquitetura e desenvolvimento até a
                  implantação e manutenção das aplicações.
                </p>
                <p className="text-gray-300 leading-relaxed text-justify mt-2">
                  Tenho experiência na integração de sistemas, desenvolvimento
                  de APIs RESTful, automação de processos e construção de
                  soluções orientadas por IA. Ao longo da minha trajetória,
                  desenvolvi aplicações que reduziram processos operacionais em
                  até 50% e automatizei fluxos de recrutamento, atendimento e
                  processamento de dados.
                </p>
              </AnimatedWrapper>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <AnimatedWrapper className="transition-delay-700ms">
                  <div className="text-3xl font-bold text-green-400">3+</div>
                  <div className="text-sm text-gray-400">Anos</div>
                </AnimatedWrapper>
              </div>
              <div className="text-center">
                <AnimatedWrapper className="transition-delay-700ms">
                  <div className="text-3xl font-bold text-green-400">50+</div>
                  <div className="text-sm text-gray-400">Copos de café</div>
                </AnimatedWrapper>
              </div>
              <div className="text-center">
                <AnimatedWrapper className="transition-delay-700ms">
                  <div className="text-3xl font-bold text-green-400">20+</div>
                  <div className="text-sm text-gray-400">Noites viradas</div>
                </AnimatedWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
