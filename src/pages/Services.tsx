import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Users, Brain, Sparkles, Heart, TrendingUp } from "lucide-react";

import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const mainServices = [
    {
      icon: User,
      title: t.services.individual.title,
      description: t.services.individual.desc,
      duration: t.services.individual.duration,
      price: "150 RON",
    },
    {
      icon: Users,
      title: t.services.couples.title,
      description: t.services.couples.desc,
      duration: t.services.couples.duration,
      price: "200 RON",
    },
    {
      icon: Brain,
      title: t.services.anxiety.title,
      description: t.services.anxiety.desc,
      duration: t.services.anxiety.duration,
      price: "De la 150 RON",
    },
    {
      icon: Sparkles,
      title: t.services.trauma.title,
      description: t.services.trauma.desc,
      duration: t.services.trauma.duration,
      price: "De la 150 RON",
    },
  ];

  const specializations = [
    {
      icon: Heart,
      title: t.services.specializations.depression.title,
      description: t.services.specializations.depression.desc,
    },
    {
      icon: TrendingUp,
      title: t.services.specializations.transitions.title,
      description: t.services.specializations.transitions.desc,
    },
    {
      icon: Brain,
      title: t.services.specializations.mindfulness.title,
      description: t.services.specializations.mindfulness.desc,
    },
    {
      icon: Heart,
      title: t.services.specializations.women.title,
      description: t.services.specializations.women.desc,
    },
    {
      icon: Sparkles,
      title: t.services.specializations.grief.title,
      description: t.services.specializations.grief.desc,
    },
    {
      icon: User,
      title: t.services.specializations.selfEsteem.title,
      description: t.services.specializations.selfEsteem.desc,
    },
  ];

  return (
    <div className="min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-6 font-heading text-4xl font-bold text-foreground lg:text-5xl">
            {t.services.title}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mb-20 grid gap-8 lg:grid-cols-2">
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className="card-hover gradient-card border-0 shadow-medium"
            >
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-1 pt-4">
                  <p className="text-sm text-muted-foreground">
                    {service.duration}
                  </p>
                  <p className="font-semibold text-primary">{service.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-3xl bg-accent/30 p-12 backdrop-blur-sm">
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-foreground">
            {t.services.specializations.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {specializations.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/booking">{t.services.cta}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
