import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"ro" | "en">("ro");
  const location = useLocation();

  const navItems = [
    { path: "/", label: language === "ro" ? "Acasă" : "Home" },
    { path: "/about", label: language === "ro" ? "Despre" : "About" },
    { path: "/services", label: language === "ro" ? "Servicii" : "Services" },
    { path: "/booking", label: language === "ro" ? "Programare" : "Booking" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-heading text-2xl font-semibold text-primary"
          >
            Georgiana Balea
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="z-50 bg-card">
                <DropdownMenuItem
                  onClick={() => setLanguage("ro")}
                  className="cursor-pointer"
                >
                  🇷🇴 Română
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className="cursor-pointer"
                >
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="rounded-full">
              <a href="tel:0744000277">
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 pt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-6 border-t pt-4">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    {language === "ro" ? "Limbă" : "Language"}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant={language === "ro" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage("ro")}
                      className="flex-1"
                    >
                      🇷🇴 RO
                    </Button>
                    <Button
                      variant={language === "en" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage("en")}
                      className="flex-1"
                    >
                      🇬🇧 EN
                    </Button>
                  </div>
                </div>

                <Button asChild className="mt-4 rounded-full">
                  <a href="tel:0744000277">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
