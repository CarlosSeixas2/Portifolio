import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import AnimatedWrapper from "../atoms/animated-wrapper";
import SectionDivider from "../atoms/section-divider";
import { projects } from "../../data/projects";
import { useEffect, useState } from "react";

const ProjectsSection = () => {
  const [selectedImage, setselectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  }, [selectedImage]);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setselectedImage(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setselectedImage(null)}
            aria-label="Fechar visualização"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={selectedImage}
            alt="Imagem Expandida"
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedWrapper className="transition-delay-700ms">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Meus <span className="text-green-400">Projetos</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi, demonstrando minhas
              habilidades e paixão por criar soluções inovadoras.
            </p>
          </AnimatedWrapper>
          <SectionDivider />
        </div>

        <div className=" grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <AnimatedWrapper
              className="transition-delay-700ms"
              key={project.id}
            >
              <Card
                key={project.id}
                className="bg-black/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group overflow-hidden backdrop-blur-sm cursor-pointer"
                onClick={() => setselectedImage(project.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex flex-row items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.alert && (
                      <span className="px-3 py-1 bg-yellow-500/10 rounded-full border border-yellow-400/20 text-yellow-400 text-xs font-semibold">
                        {project.alert}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank">
                        <Button
                          size="sm"
                          className="bg-green-500 hover:bg-green-600 text-black font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Ver Projeto
                        </Button>
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 bg-transparent"
                      >
                        <Github className="w-4 h-4" />
                        Repositório
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
