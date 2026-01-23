import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div className="relative bg-background text-foreground">
      <NavBar />
      
      <main className="flex flex-col min-h-screen">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
    </div>
  );
}