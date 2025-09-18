import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResearchSection } from "./components/ResearchSection";
import { EventsSection } from "./components/EventsSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <Header />
          <main>
            <HeroSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <ResearchSection />
            <EventsSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}