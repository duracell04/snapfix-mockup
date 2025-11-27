import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Camera, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground smooth-transition">
            How it works
          </Link>
          <Link to="/prices" className="text-muted-foreground hover:text-foreground smooth-transition">
            Prices
          </Link>
          <Link to="/pro" className="text-muted-foreground hover:text-foreground smooth-transition">
            For Pros
          </Link>
          <Link to="/business" className="text-muted-foreground hover:text-foreground smooth-transition">
            For Business
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild className="hidden sm:flex">
            <Link to="/offers">
              <Users className="mr-2 h-4 w-4" />
              Pick your pro
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/upload">
              <Camera className="mr-2 h-4 w-4" />
              Get price
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
