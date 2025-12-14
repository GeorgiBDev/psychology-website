import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import {
  GraduationCap,
  Award,
  Heart,
  FileText,
  Video,
  Linkedin,
  Instagram,
} from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const credentials = [
    {
      icon: GraduationCap,
      title: t.about.credentials.phd.title,
      description: t.about.credentials.phd.desc,
    },
    {
      icon: Award,
      title: t.about.credentials.licensed.title,
      description: t.about.credentials.licensed.desc,
    },
    {
      icon: Heart,
      title: t.about.credentials.certified.title,
      description: t.about.credentials.certified.desc,
    },
  ];

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/georgiana-balea-533b34192/",
    instagram: "https://www.instagram.com/psihoterapeut_in_formare/",
  };
  const cvLinks = {
    cv: "/psychology-website/GeorgianaBalea.pdf",
    videoCv: "https://youtu.be/52yIMt10xa4",
  };

  return (
    <div className="min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground lg:text-5xl">
              {t.about.title}
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl bg-nature-100 shadow-large">
              <div className="flex aspect-square items-center justify-center p-12">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <circle cx="200" cy="200" r="180" fill="hsl(160 40% 96%)" />
                  <circle
                    cx="200"
                    cy="160"
                    r="70"
                    fill="hsl(160 84% 39%)"
                    opacity="0.2"
                  />
                  <circle
                    cx="200"
                    cy="220"
                    r="100"
                    fill="hsl(160 84% 39%)"
                    opacity="0.1"
                  />
                  <path
                    d="M150 250 Q200 220 250 250"
                    stroke="hsl(160 84% 39%)"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle cx="185" cy="155" r="4" fill="hsl(160 25% 15%)" />
                  <circle cx="215" cy="155" r="4" fill="hsl(160 25% 15%)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-foreground lg:text-4xl">
            {t.about.credentials.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {credentials.map((item, index) => (
              <Card
                key={index}
                className="gradient-card border-0 shadow-medium"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-foreground lg:text-4xl">
            {t.about.resources.title}{" "}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
            <Card className="gradient-card border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">
                    {t.about.resources.cv.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t.about.resources.cv.desc}
                  </p>
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={cvLinks.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View CV
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="gradient-card border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <Video className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-heading text-lg font-semibold text-foreground">
                    {t.about.resources.videoCv.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t.about.resources.videoCv.desc}
                  </p>
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={cvLinks.videoCv}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Video
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 font-heading text-3xl font-semibold text-foreground lg:text-4xl">
            {t.about.philosophy.title}
          </h2>
          <Card className="gradient-card border-0 shadow-large">
            <CardContent className="p-12">
              <blockquote className="font-heading text-xl italic leading-relaxed text-foreground lg:text-2xl">
                "{t.about.philosophy.quote}"
              </blockquote>
              <div className="mt-8 font-medium text-primary">
                {t.about.philosophy.author}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <h3 className="mb-4 font-heading text-2xl font-semibold text-foreground">
            {t.about.connectTitle}
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-primary/10"
            >
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-primary/10"
            >
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-primary" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
