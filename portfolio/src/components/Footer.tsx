import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Mail, Github, Linkedin, Twitter, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { t } = useLanguage();
  const footer = t('footer');

  return (
    <footer className="bg-marrakech-gradient py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Contact Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-marrakech-primary">{footer.letsConnect}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {footer.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {/* <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              {/* <Button variant="outline" size="icon" asChild>
                <a href="mailto:john.doe@example.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button> */}
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/aithamid" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/aithamid" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              {/* <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button> */}
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Adam Ait Hamid. {footer.rights}
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-foreground"
              >
                {footer.backToTop}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}