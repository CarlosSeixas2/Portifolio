import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Heading from "../atoms/heading";
import Text from "../atoms/text";
import Badge from "../atoms/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card className="bg-black/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group overflow-hidden backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardContent className="p-6 space-y-4">
        <Heading
          level={3}
          className="group-hover:text-green-400 transition-colors text-xl"
        >
          {title}
        </Heading>

        <Text variant="small" className="leading-relaxed">
          {description}
        </Text>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            size="sm"
            className="bg-green-500 hover:bg-green-600 text-black font-medium"
            asChild
          >
            <a
              href={liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver projeto ao vivo"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Projeto
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 bg-transparent"
            asChild
          >
            <a
              href={githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código no GitHub"
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
