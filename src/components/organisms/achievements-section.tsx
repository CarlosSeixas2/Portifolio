import { Calendar, Trophy } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SectionDivider from "../atoms/section-divider";
import AnimatedWrapper from "../atoms/animated-wrapper";
import { achievements, categories } from "../../data/achievements";

export default function AchievementsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredAchievements, setFilteredAchievements] =
    useState(achievements);

  useEffect(() => {
    if (selectedCategory === "Todos") {
      return setFilteredAchievements(achievements);
    }

    const newFilteredAchievements = filteredAchievements.filter(
      (achievement) => achievement.category === selectedCategory,
    );

    setFilteredAchievements(newFilteredAchievements);
  }, [selectedCategory]);

  return (
    <section
      id="achievements"
      className="pb-20 pt-6 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="text-center mb-12">
        <AnimatedWrapper className={`transition-delay-[300ms]`}>
          <div className="flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Conquistas
            </h1>
            <Trophy className="w-10 h-10 text-yellow-500 ml-3" />
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma coleção das minhas principais conquistas profissionais,
            certificações e reconhecimentos ao longo da minha jornada como
            desenvolvedor.
          </p>

          <SectionDivider />
        </AnimatedWrapper>
      </div>

      <AnimatedWrapper className={`transition-delay-[300ms]`}>
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper className={`transition-delay-[300ms]`}>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-2xl px-8">
            {filteredAchievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={`w-full bg-black/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group overflow-hidden backdrop-blur-sm ${filteredAchievements.length === 1 ? "lg:col-start-2" : ""}`}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {achievement.image ? (
                      <img
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-64 flex items-center justify-center bg-gray-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-12 h-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 0l7 9 5-6 7 9"
                          />
                          <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                        </svg>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-4">
                    {achievement.description}
                  </CardDescription>
                  <div className="flex items-center justify-end gap-2 mb-3">
                    <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {achievement.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
