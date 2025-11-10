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

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Îngrijire Empatică",
      description:
        "Un spațiu cald și necritic unde poți explora gândurile și sentimentele tale în siguranță.",
    },
    {
      icon: Lightbulb,
      title: "Metode Bazate pe Dovezi",
      description:
        "Utilizăm abordări terapeutice dovedite, adaptate nevoilor și obiectivelor tale unice.",
    },
    {
      icon: Sun,
      title: "Bunăstare Holistică",
      description:
        "Abordarea minții, corpului și spiritului pentru sănătate mentală și bunăstare cuprinzătoare.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden gradient-hero nature-pattern py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in space-y-8">
              <h1 className="font-heading text-4xl font-bold leading-tight text-foreground lg:text-6xl">
                Îndrumare Blândă pentru Călătoria Ta de Bunăstare Mentală
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Servicii profesionale de psihologie într-un mediu cald și
                natural, concepute pentru a te ajuta să te redescoperi și să îți
                orchestrezi viața ca pe o capodoperă.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/booking">
                    Programează Consultație
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <Link to="/about">Află Mai Multe</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <div className="overflow-hidden rounded-3xl shadow-large">
                <img
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
              O Abordare Naturală a Sănătății Mentale
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Experimentează terapia într-un mediu liniștit care promovează
              vindecarea și creșterea personală
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
            Pregătit să Începi Călătoria Ta?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Primul pas către bunăstarea mentală începe cu o conversație. Să
            discutăm despre cum te pot ajuta.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full"
          >
            <Link to="/booking">Programează-te Acum</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
