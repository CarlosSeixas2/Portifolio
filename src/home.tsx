import AboutSection from "./components/organisms/about-section";
import ContactSection from "./components/organisms/contact-section";
import ExperienceSection from "./components/organisms/experience-section";
import HeroSection from "./components/organisms/hero-section";
import Navigation from "./components/organisms/navigation";
import ProjectsSection from "./components/organisms/projects-section";
import SkillsSection from "./components/organisms/skills-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
