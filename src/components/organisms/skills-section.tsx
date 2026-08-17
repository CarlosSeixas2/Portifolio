import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiVite,
  SiVitest,
  SiFigma,
  SiPrisma,
  SiSequelize,
  SiCypress,
  SiSass,
  SiPostman,
  SiVercel,
  SiJest,
  SiNginx,
  SiGunicorn,
  SiExpo,
  SiFirebase,
  SiAxios,
  SiStyledcomponents,
  SiKnexdotjs,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import AnimatedWrapper from "../atoms/animated-wrapper";
import SectionDivider from "../atoms/section-divider";

const skillIcons: Record<string, React.ReactElement> = {
  // Frontend
  React: <SiReact />,
  ReactNative: <SiReact />,
  Next: <RiNextjsFill />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  Tailwind: <SiTailwindcss />,
  StyledComponents: <SiStyledcomponents />,
  Sass: <SiSass />,
  Expo: <SiExpo />,
  Vite: <SiVite />,
  TanStackQuery: <SiReact />,
  Zustand: <SiReact />,
  Axios: <SiAxios />,

  // Backend
  NodeJS: <SiNodedotjs />,
  Express: <SiExpress />,
  NestJS: <SiNestjs />,
  Python: <SiPython />,
  Flask: <SiFlask />,
  FastAPI: <SiFastapi />,
  Django: <SiDjango />,
  DjangoNinja: <SiDjango />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  SQLite: <SiSqlite />,
  RESTAPI: <SiPostman />,

  // ORM / Database
  Prisma: <SiPrisma />,
  Sequelize: <SiSequelize />,
  Knex: <SiKnexdotjs />,
  SQL: <SiPostgresql />,

  // DevOps
  Docker: <SiDocker />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Linux: <SiLinux />,
  Nginx: <SiNginx />,
  Gunicorn: <SiGunicorn />,
  CICD: <SiGithub />,

  // Testing
  Vitest: <SiVitest />,
  Jest: <SiJest />,
  Cypress: <SiCypress />,

  // Tools
  Postman: <SiPostman />,
  Figma: <SiFigma />,
  Vercel: <SiVercel />,
  Firebase: <SiFirebase />,
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next",
        "ReactNative",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind",
      ],
    },
    {
      title: "Backend",
      skills: [
        "NodeJS",
        "Express",
        "NestJS",
        "Python",
        "Flask",
        "FastAPI",
        "Django",
        "DjangoNinja",
        "PostgreSQL",
        "RESTAPI",
      ],
    },
    {
      title: "DevOps, Testing & Tools",
      skills: [
        "Docker",
        "Git",
        "GitHub",
        "Nginx",
        "Gunicorn",
        "Postman",
        "Figma",
        "Firebase",
      ],
    },
  ];

  const othersSkills = [
    "Vite",
    "Expo",
    "Sass",
    "Styled Components",
    "MySQL",
    "MongoDB",
    "SQLite",
    "Vitest",
    "Jest",
    "Prisma",
    "Sequelize",
    "Knex",
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedWrapper className="transition-delay-700ms">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Minhas <span className="text-green-400">Habilidades</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
              e eficientes.
            </p>
            <SectionDivider />
          </AnimatedWrapper>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category) => (
            <AnimatedWrapper className="transition-delay-700ms">
              <div
                key={category.title}
                className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-800/50 hover:bg-green-500/10 border border-gray-700 hover:border-green-500/30 rounded-lg p-3 text-center transition-all duration-200 group cursor-default flex items-center justify-center gap-2"
                    >
                      {skillIcons[skill.replace(/\s/g, "")] ?? null}
                      <span className="text-gray-300 group-hover:text-green-400 font-medium text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        <div className="text-center">
          <AnimatedWrapper className="transition-delay-700ms">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Outras Tecnologias
            </h3>
          </AnimatedWrapper>
          <div className="flex flex-wrap justify-center gap-3">
            {othersSkills.map((tech) => (
              <AnimatedWrapper className="transition-delay-700ms">
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700 hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/5 transition-all duration-200 cursor-default flex items-center gap-2"
                >
                  {skillIcons[tech.replace(/\s/g, "")] ?? null}
                  {tech}
                </span>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
