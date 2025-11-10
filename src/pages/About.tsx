import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Heart } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Ph.D. în Psihologie Clinică",
      description: "Universitatea Babes-Bolyai, 2025",
    },
    {
      icon: Award,
      title: "Psiholog Clinician Licențiat",
      description: "Colegiul Psihologilor din România",
    },
    {
      icon: Heart,
      title: "Terapeut Certificat în Mindfulness",
      description: "Centrul pentru Studii de Mindfulness",
    },
  ];

  return (
    <div className="min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground lg:text-5xl">
              Despre Georgiana Balea
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Cu peste 15 ani de experiență în psihologie clinică, sunt
                dedicată să ofer îngrijire empatică și bazată pe dovezi pentru
                sănătatea mentală, într-un mediu liniștit și primitor.
              </p>
              <p>
                Abordarea mea combină metodele terapeutice tradiționale cu
                practicile de mindfulness și tehnicile de vindecare inspirate de
                natură. Cred că adevărata bunăstare vine din înțelegerea
                interconexiunii dintre bunăstarea noastră mentală, emotională și
                fizică.
              </p>
              <p>
                Mă specializez în tulburări de anxietate, depresie, recuperarea
                după traume și tranziții de viață, ajutând indivizii să își
                găsească calea către echilibrul emoțional și creșterea
                personală.
              </p>
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
            Acreditări & Educație
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

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 font-heading text-3xl font-semibold text-foreground lg:text-4xl">
            Filosofia Mea Terapeutică
          </h2>
          <Card className="gradient-card border-0 shadow-large">
            <CardContent className="p-12">
              <blockquote className="font-heading text-xl italic leading-relaxed text-foreground lg:text-2xl">
                "Vindecarea are loc în relație și în conexiune cu natura. Cred
                că fiecare persoană are o capacitate înnăscută de creștere și
                reziliență. Rolul meu este să ofer un spațiu sigur și îngrijitor
                unde poți să te reconectezi cu înțelepciunea ta interioară și să
                îți găsești calea înainte."
              </blockquote>
              <div className="mt-8 font-medium text-primary">
                — Georgiana Balea
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
