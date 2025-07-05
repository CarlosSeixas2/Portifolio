import Heading from "../atoms/heading"
import Text from "../atoms/text"
import SectionDivider from "../atoms/section-divider"
import ExperienceCard from "../molecules/experience-card"

import lemosImg from '../../assets/lemos.png';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "RGM Tecnologia",
      position: "Desenvolvedor Python",
      startDate: "Jun 2023",
      endDate: undefined, // Presente
      location: "Parnaíba, PI",
      description:
        "Desenvolvo soluções para automatizar processos, integrando IA (API Gemini) na análise de formulários conforme a LGPD, migrando bancos para PostgreSQL e otimizando análises operacionais com Python. Foco em APIs com IA e geração de relatórios contábeis automatizados.",
      technologies: ["Python", "Flask", "Pandas", "Linux", "Nginx", "Gunicorn", "Docker", "Gemini"],
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQF_dwpU36qwKA/company-logo_200_200/company-logo_200_200/0/1632424407004/rgm_tecnologia_inteligncia_e_processos_logo?e=1756944000&v=beta&t=qwMHGa-AisAJSr3JGYvmLdI-OD1QF5wak0qDSmzaXOE",
    },
    {
      company: "Lemos Energia",
      position: "Freelancer Mobile",
      startDate: "Nov 2024",
      endDate: "Mar 2025",
      location: "Parnaíba, PI",
      description:
        "Desenvolvi app móvel (Android/iOS) para obras, com checklists, registros de não conformidades e ensaios elétricos, gerando PDFs e funcionando offline com sincronização. Inclui gestão de usuários e web app com dashboards interativos e filtros de análise.",
      technologies: ["Vue.js", "Express", "MongoDB", "Stripe", "Git"],
      logo: lemosImg,
    },
    {
      company: "Freelancer",
      position: "Analista de Dados",
      startDate: "Jan 2024",
      endDate: "Maio 2024",
      location: "Parnaíba, PI",
      description:
        "Responsável pela geração de insights a partir de dados e geração de relatórios gráficos para acompanhamento de indicadores de performance",
      technologies: ["React", "Redux", "Sass", "Jest", "Figma"],
      // logo: "/placeholder.svg",
    },

  ]

  return (
    <section id="experience" className="pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heading level={2} highlight="Experiência">
            Minha Experiência
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Minha jornada profissional através de diferentes empresas e projetos, sempre focando em crescimento e
            aprendizado contínuo.
          </Text>
          <SectionDivider />
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <div className="absolute left-2 sm:left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-black shadow-lg shadow-green-500/50"></div>

                <div className="ml-12 sm:ml-20">
                  <ExperienceCard {...experience} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
