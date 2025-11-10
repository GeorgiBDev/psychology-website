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

const Services = () => {
  const mainServices = [
    {
      icon: User,
      title: "Terapie Individuală",
      description:
        "Sesiuni unu-la-unu concentrate pe obiectivele, provocările și creșterea ta personală. Folosim abordări bazate pe dovezi, inclusiv TCC, mindfulness și terapie somatică.",
      duration: "Sesiuni de 50 de minute",
      price: "150 RON",
    },
    {
      icon: Users,
      title: "Terapie de Cuplu",
      description:
        "Îmbunătățește-ți relația prin comunicare îmbunătățită, rezolvarea conflictelor și conexiune emotională mai profundă, folosind metodele Gottman și EFT.",
      duration: "Sesiuni de 75 de minute",
      price: "200 RON",
    },
    {
      icon: Brain,
      title: "Management Anxietate & Stres",
      description:
        "Tratament specializat pentru tulburările de anxietate, atacurile de panică și stresul cronic, folosind intervenții bazate pe mindfulness și tehnici cognitive-comportamentale.",
      duration: "Sesiuni individuale sau de grup disponibile",
      price: "De la 150 RON",
    },
    {
      icon: Sparkles,
      title: "Recuperare după Traume",
      description:
        "Terapie blândă și informată despre traume, folosind EMDR și abordări somatice pentru a te ajuta să te vindeci de experiențele din trecut și să îți recapeți siguranța și puterea.",
      duration: "Sesiuni intensive specializate disponibile",
      price: "De la 150 RON",
    },
  ];

  const specializations = [
    {
      icon: Heart,
      title: "Depresie & Tulburări de Dispoziție",
      description:
        "Tratament cuprinzător pentru depresie, tulburare bipolară și tulburare afectivă sezonieră",
    },
    {
      icon: TrendingUp,
      title: "Tranziții de Viață",
      description:
        "Sprijin prin schimbări majore de viață, tranziții de carieră și schimbări în relații",
    },
    {
      icon: Brain,
      title: "Mindfulness & Meditație",
      description:
        "Predarea practicilor de mindfulness pentru reducerea stresului și reglarea emoțională",
    },
    {
      icon: Heart,
      title: "Sănătatea Mentală a Femeilor",
      description:
        "Îngrijire specializată pentru sănătatea mentală perinatală, schimbări hormonale și probleme ale femeilor",
    },
    {
      icon: Sparkles,
      title: "Doliu & Pierdere",
      description: "Sprijin compassionate prin doliu și pierderi semnificative",
    },
    {
      icon: User,
      title: "Stimă de Sine & Identitate",
      description:
        "Construirea încrederii, valorii de sine și exprimării de sine autentice",
    },
  ];

  return (
    <div className="min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-6 font-heading text-4xl font-bold text-foreground lg:text-5xl">
            Servicii Profesionale
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Servicii cuprinzătoare de sănătate mentală adaptate pentru a
            sprijini călătoria ta unică către bunăstare și creștere personală
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
            Arii de Specializare
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
            <Link to="/booking">Programează o Consultație</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
