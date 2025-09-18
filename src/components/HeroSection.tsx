import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Download, ArrowDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToNext = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-marrakech-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <ImageWithFallback
              src="profile.jpg"
              alt="Professional workspace"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary/10"
            />
          </div>
          
          <h1 className="text-5xl mb-4 text-marrakech-primary">
            {t('hero.greeting')} Adam Ait Hamid
          </h1>
          <h2 className="text-2xl text-marrakech-secondary mb-6">
            {t('hero.title')}
          </h2>
          
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-muted-foreground">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              {t('hero.downloadCV')}
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToNext}>
              {t('hero.contactMe')}
            </Button>
          </div>
          
          <div className="flex justify-center animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}