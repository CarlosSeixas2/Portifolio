import ideathonImg from "../assets/trofeu_ideathon_2024.jpeg";

interface Achievement {
  id: number;
  title: string;
  image: string | null;
  date: number;
  description: string;
  category: string;
  link?: string;
}

export const categories = ["Todos", "Competição"];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "1° Lugar no Ideathon 2024",
    image: ideathonImg,
    date: 2024,
    description:
      "Uma maratona de inovação focada em tecnologia e empreendedorismo. Durante 72 horas, desenvolvemos uma solução voltada ao turismo de baixa exploração, sendo o prêmio uma viagem para o Neon2025.",
    category: "Competição",
  },
  {
    id: 2,
    title: "Em Breve",
    image: null,
    date: 2025,
    description: "Estou organizando essa seção ainda!",
    category: "Certificação",
  },
  {
    id: 3,
    title: "Em Breve",
    image: null,
    date: 2025,
    description: "Estou organizando essa seção ainda!",
    category: "Certificação",
  },
];
