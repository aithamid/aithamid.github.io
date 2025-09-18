import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, FileText, Calendar, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";


export function ResearchSection() {
  const { t } = useLanguage();
  const publications = t('research.list');
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4 text-marrakech-primary">{t('research.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('research.subtitle')}
            </p>
          </div>
          
          {/* Publications List */}
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <Card key={index} className="bg-marrakech-card hover-marrakech">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl leading-tight mb-2">{pub.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {pub.authors.join(", ")}
                        </div>
                      </div>
                      <CardDescription className="text-base">{pub.venue}</CardDescription>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {pub.year}
                      </div>
                      <div className="flex gap-2">
                        <Badge variant={pub.status === 'Published' ? 'default' : 'secondary'}>
                          {pub.status === 'Published' ? t('research.published_status') : t('research.underReview')}
                        </Badge>
                        <Badge variant="outline">{pub.type}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{pub.abstract}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm mb-2">{t('research.keywords')}</div>
                    <div className="flex flex-wrap gap-1">
                      {pub.keywords.map((keyword, keywordIndex) => (
                        <Badge key={keywordIndex} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {pub.citations > 0 && (
                        <div>{t('research.citations')}: {pub.citations}</div>
                      )}
                      {pub.doi && pub.doi !== 'Pending' && (
                        <div>DOI: {pub.doi}</div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      {pub.url && (
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <a href={pub.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                            {t('research.viewPaper')}
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="gap-1">
                        <FileText className="h-3 w-3" />
                        {t('research.cite')}
                      </Button>
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