import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/hooks/useLanguage";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  const FORMSPREE_ENDPOINT = (import.meta.env.VITE_FORMSPREE_ENDPOINT ??
    "") as string;

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/georgiana-balea-533b34192/",
    instagram: "https://www.instagram.com/psihoterapeut_in_formare/",
  };

  return (
    <div className="min-h-screen py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground lg:text-5xl">
            {t.contact.title}
          </h1>
          <p className="text-xl text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              {t.contact.infoTitle}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a
                  href="mailto:georgianabaleapsihoterapeut@gmail.com"
                  className="hover:text-primary"
                >
                  georgianabaleapsihoterapeut@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p>Cluj-Napoca, Romania</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
                {t.contact.connectTitle}
              </h3>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                >
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-large">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">
                  {t.contact.formTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  className="space-y-6"
                >
                  <Input
                    type="text"
                    placeholder={t.contact.formName}
                    name="Nume"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="_replyto"
                    required
                  />
                  <Input
                    type="text"
                    placeholder={t.contact.formSubject}
                    name="Subiect"
                  />
                  <Textarea
                    placeholder={t.contact.formMessage}
                    rows={5}
                    name="Mesaj"
                    required
                  />
                  <Button type="submit" size="lg" className="rounded-full">
                    {t.contact.formSubmit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
