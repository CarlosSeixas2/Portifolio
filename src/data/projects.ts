import gerenciadorUsuariosImg from "../assets/gerenciador_usuarios_projeto.png";
import mobileMovieAppImg from "../assets/movie_app.png";
import estudaProImg from "../assets/estuda_pro.png";
import nutriAppImg from "../assets/nutri_app.png";

export const projects = [
  {
    id: 1,
    title: "Gerenciador de Usuários",
    description: "Painel para gerenciamento de usuarios.",
    image: gerenciadorUsuariosImg,
    technologies: ["React", "Typescript", "Tailwind", "Vercel"],
    liveUrl: "https://dashboardusuarios.vercel.app/",
    githubUrl: "https://github.com/CarlosSeixas2/Gestao-de-Pessoas",
  },
  {
    id: 2,
    title: "MovieApp",
    description: "Aplicativo de listagem de filmes.",
    image: mobileMovieAppImg,
    technologies: ["React Native", "Expo", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/CarlosSeixas2/Mobile-Movie-App",
  },
  {
    id: 3,
    title: "EstudaPro",
    alert: "Em desenvolvimento",
    description: "Plataforma para gerenciamento de estudos e produtividade.",
    image: estudaProImg,
    technologies: [
      "React",
      "NestJs",
      "Prisma",
      "Docker",
      "Typescript",
      "ShardCN",
      "Tailwind",
    ],
    githubUrl: "https://github.com/CarlosSeixas2/EstudaPro",
  },
  {
    id: 4,
    title: "NutriApp",
    alert: "Em desenvolvimento",
    description:
      "Aplicativo para acompanhamento de pacientes e gestão de dietas.",
    image: nutriAppImg,
    technologies: ["React Native", "Expo", "NestJS", "Prisma", "Docker"],
    githubUrl: "https://github.com/CarlosSeixas2/Mobile-NutriApp",
  },
];
