import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
              Georgiana Balea
            </h3>
            <p className="text-muted-foreground">
              {t.footer.role}
              <br />
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">
              {t.footer.contact}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:0744000277"
                  className="hover:text-primary transition-colors"
                >
                  0744 000 277
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:contact@georgianabalea.ro"
                  className="hover:text-primary transition-colors"
                >
                  contact@georgianabalea.ro
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>București, România</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">
              {t.footer.schedule}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>{t.footer.weekdays}</strong> 9:00 - 18:00
              </p>
              <p>
                <strong>{t.footer.friday}</strong> 9:00 - 15:00
              </p>
              <p>
                <strong>{t.footer.weekend}</strong> {t.footer.onRequest}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Georgiana Balea. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
