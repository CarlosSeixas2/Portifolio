import Heading from "../atoms/heading";
import Text from "../atoms/text";
import SectionDivider from "../atoms/section-divider";
import ExperienceCard from "../molecules/experience-card";

import lemosImg from "../../assets/lemos.png";
import rgmImg from "../../assets/logo_rgm.jpeg";
// import eliseuImg from "../../assets/Eliseu.jpeg";
import blueyImg from "../../assets/Bluey.ico";
import didaktaImg from "../../assets/Didakta.jpeg";
import AnimatedWrapper from "../atoms/animated-wrapper";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Bluey Data",
      position: "Desenvolvedor Júnior",
      startDate: "Agos 2025",
      endDate: "",
      location: "Parnaíba, PI",
      description:
        "Desenvolvedor FrontEnd React, focado em criar interfaces intuitivas e responsivas. Trabalho com integração de APIs RESTful, otimização de performance e implementação de melhores práticas de acessibilidade.",
      technologies: ["React", "TypeScript", "Tailwind"],
      logo: blueyImg,
    },
    // {
    //   company: "Elizeu Martins",
    //   position: "Desenvolvedor Mobile",
    //   startDate: "Agos 2025",
    //   endDate: "",
    //   location: "Parnaíba, PI",
    //   description:
    //     "Desenvolvo aplicativos móveis para Android e iOS, utilizando Flutter e Dart, com foco em performance e usabilidade. Implemento integração com APIs RESTful, gerenciamento de estado com Riverpod.",
    //   technologies: ["Flutter", "Dart"],
    //   logo: eliseuImg,
    // },
    {
      company: "RGM Tecnologia",
      position: "Desenvolvedor Python",
      startDate: "Jun 2023",
      endDate: "Jul 2025",
      location: "Parnaíba, PI",
      description:
        "Desenvolvo soluções para automatizar processos, integrando IA (API Gemini) na análise de formulários conforme a LGPD, migrando bancos para PostgreSQL e otimizando análises operacionais com Python. Foco em APIs com IA e geração de relatórios contábeis automatizados.",
      technologies: [
        "Python",
        "Flask",
        "Pandas",
        "Linux",
        "Nginx",
        "Gunicorn",
        "Docker",
        "Gemini",
      ],
      logo: rgmImg,
    },
    {
      company: "Didakta",
      position: "Desenvolvedor React",
      tag: "Freelancer",
      startDate: "Jun 2025",
      endDate: "Ago 2025",
      location: "Parnaíba, PI",
      description:
        "Responsável pelo desenvolvimento de aplicações web com React, replicando UX/UI no figma, implementando componentes reutilizáveis com ATOMICS DESIGN, utilizando React Query para gerenciamento de estado e integração com APIs RESTful com Axios.",
      technologies: [
        "React",
        "React Query",
        "TypeScript",
        "Git",
        "Git Flow",
        "Tailwind",
        "Figma",
      ],
      logo: didaktaImg,
    },
    {
      company: "Lemos Energia",
      position: "Desenvolvedor Mobile",
      tag: "Freelancer",
      startDate: "Nov 2024",
      endDate: "Mar 2025",
      location: "Parnaíba, PI",
      description:
        "Desenvolvi app móvel (Android/iOS) para obras, com checklists, registros de não conformidades e ensaios elétricos, gerando PDFs e funcionando offline com sincronização. Inclui gestão de usuários e web app com dashboards interativos e filtros de análise.",
      technologies: ["React Native", "Expo", "Django", "Git"],
      logo: lemosImg,
    },
    {
      company: "Freelancer",
      position: "Analista de Dados",
      tag: "Freelancer",
      startDate: "Jan 2024",
      endDate: "Maio 2024",
      location: "Parnaíba, PI",
      description:
        "Responsável pela geração de insights a partir de dados e geração de relatórios gráficos para acompanhamento de indicadores de performance",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Excel"],
    },
  ];

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
