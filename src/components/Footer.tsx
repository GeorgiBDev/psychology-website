import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
              Georgiana Balea
            </h3>
            <p className="text-muted-foreground">
              Psiholog Clinician
              <br />
              Îndrumare profesională pentru bunăstarea ta mentală
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
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
            <h4 className="mb-4 font-semibold text-foreground">Program</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Luni - Joi:</strong> 9:00 - 18:00
              </p>
              <p>
                <strong>Vineri:</strong> 9:00 - 15:00
              </p>
              <p>
                <strong>Weekend:</strong> La cerere
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Georgiana Balea. Toate drepturile
            rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
