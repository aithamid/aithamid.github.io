import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Trophy, Calendar, MapPin, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function EventsSection() {
  const getResultColor = (result: string) => {
    if (result.includes('1st') || result === 'Winner') return 'default';
    if (result.includes('1ère') || result === 'Gagnant') return 'default';
    if (result.includes('2nd') || result.includes('3rd')) return 'secondary';
    if (result.includes('2ème') || result.includes('3ème')) return 'secondary';
    if (result.includes('Award')) return 'default';
    if (result.includes('Trophée')) return 'default';
    return 'outline';
  };

  const { t } = useLanguage();
  const events = t('events.list');

  return (
    <section id="events" className="py-20 bg-marrakech-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4 text-marrakech-primary">{t('events.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('events.subtitle')}
            </p>
          </div>
          
          {/* Events List */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card key={index} className="bg-marrakech-card hover-marrakech">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <Trophy className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <div>
                          <CardTitle className="text-xl leading-tight">{event.name}</CardTitle>
                          <CardDescription className="text-base mt-1">{event.project}</CardDescription>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant={getResultColor(event.result)} className="gap-1">
                          <Trophy className="h-3 w-3" />
                          {event.result}
                        </Badge>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                      
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          Team of {event.teamSize}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {event.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {t('events.prize')}: {event.prize}
                      </div>
                    </div>
                    
                    {event.url && (
                      <Button variant="outline" size="sm" className="gap-1 w-fit" asChild>
                        <a href={event.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                          {t('events.eventDetails')}
                        </a>
                      </Button>
                    )}
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