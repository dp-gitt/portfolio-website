import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}