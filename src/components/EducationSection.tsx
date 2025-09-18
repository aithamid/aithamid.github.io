import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";

const certifications = [
  {
    date: "2023",
    credentialId: "AWS-CSA-2023-001"
  },
  {
    date: "2022",
    credentialId: "GCP-PD-2022-789"
  },
  {
    date: "2022",
    credentialId: "CKA-2022-456"
  },
  {
    date: "2021",
    credentialId: "MDB-DEV-2021-123"
  }
];


export function EducationSection() {
  const { t } = useLanguage();
  const education = t('education.degrees');
  const certificationData = t('education.certifications');
  
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-4 text-marrakech-primary">{t('education.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('education.subtitle')}
              </p>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-marrakech-card hover-marrakech">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex gap-3">
                        <div className="mt-1">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{edu.degree}</CardTitle>
                          <CardDescription className="text-lg">{edu.school}</CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <Badge variant="outline">{t('education.gpa')}: {edu.gpa}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <Badge key={achIndex} variant="secondary" className="gap-1">
                          <Award className="h-3 w-3" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-4 text-marrakech-primary">{t('education.certificationsTitle')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('education.certificationsSubtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationData.map((cert, index) => (
                <Card key={index} className="bg-marrakech-card hover-marrakech">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <Badge variant="outline">{cert.date}</Badge>
                      <span className="text-muted-foreground">ID: {cert.credentialId}</span>
                      {cert.url && (
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
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
      </div>
    </section>
  );
}