import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Lightbulb, Sun, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-therapy-office.jpg";
import { useLanguage } from "@/hooks/useLanguage";

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: t.home.features.empathy.title,
      description: t.home.features.empathy.desc,
    },
    {
      icon: Lightbulb,
      title: t.home.features.evidence.title,
      description: t.home.features.evidence.desc,
    },
    {
      icon: Sun,
      title: t.home.features.holistic.title,
      description: t.home.features.holistic.desc,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden gradient-hero nature-pattern py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in space-y-8">
              <h1 className="font-heading text-4xl font-bold leading-tight text-foreground lg:text-6xl">
                {t.home.hero.title}
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/booking">
                    {t.home.hero.bookBtn}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <Link to="/about">{t.home.hero.learnBtn}</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <div className="overflow-hidden rounded-3xl shadow-large">
                <img
                  src={heroImage}
                  alt="Cabinet terapeutic profesional"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-heading text-3xl font-semibold text-foreground lg:text-4xl">
              {t.home.features.title}
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              {t.home.features.subtitle}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-hover gradient-card border-0 shadow-medium"
              >
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 font-heading text-3xl font-semibold lg:text-4xl">
            {t.home.cta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            {t.home.cta.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full"
          >
            <Link to="/booking">{t.home.cta.btn}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
