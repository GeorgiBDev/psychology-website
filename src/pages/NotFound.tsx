import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-4 font-heading text-6xl font-bold text-primary">
          404
        </h1>
        <h2 className="mb-4 font-heading text-3xl font-semibold text-foreground">
          {t.notFound.title}
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          {t.notFound.subtitle}
        </p>
        <Button asChild className="rounded-full">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            {t.notFound.btn}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
