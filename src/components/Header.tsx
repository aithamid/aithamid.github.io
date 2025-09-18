import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-b border-marrakech z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl text-marrakech-primary">Adam Ait Hamid</h1>
          <p className="text-sm text-marrakech-secondary">{t('hero.title')}</p>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm hover:text-primary transition-colors"
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-sm hover:text-primary transition-colors"
          >
            {t('nav.experience')}
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className="text-sm hover:text-primary transition-colors"
          >
            {t('nav.education')}
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-sm hover:text-primary transition-colors"
          >
            {t('nav.projects')}
          </button>
          <button 
            onClick={() => scrollToSection('research')}
            className="text-sm hover:text-primary transition-colors"
          >
            {t('nav.research')}
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="text-sm hover:text-primary transition-colors"
          >
            {t('nav.events')}
          </button>
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={toggleLanguage}
            className="h-8 px-2 flex items-center gap-1"
          >
            <Languages className="h-3 w-3" />
            <span className="text-xs">{language.toUpperCase()}</span>
          </Button>
          
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <div className="hidden md:flex">
          <div className="w-px h-6 bg-border mx-1" />
          {/* <Button variant="ghost" size="icon" asChild>
            <a href="mailto:john@example.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button> */}
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/aithamid" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/aithamid" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
            </div>
        </div>
      </div>
    </header>
  );
}