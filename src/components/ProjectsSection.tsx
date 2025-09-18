import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function ProjectsSection() {
  const { t } = useLanguage();
  const projects = t('projects.list');
  return (
    <section id="projects" className="py-20 bg-marrakech-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4 text-marrakech-primary">{t('projects.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('projects.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col bg-marrakech-card hover-marrakech h-full">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground flex-shrink-0">
                      <Calendar className="h-3 w-3" />
                      {project.period}
                    </div>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="text-sm text-muted-foreground">
                          • {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                          {t('projects.viewCode')}
                        </a>
                      </Button>
                      {project.demo && (
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                            {t('projects.viewProject')}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}