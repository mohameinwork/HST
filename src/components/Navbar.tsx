import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 dark:bg-navy-900/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="relative w-10 h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold flex items-center justify-center font-mono">
            HST
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500" />
          </div>
          <div>
            <div className="font-bold tracking-tight text-base sm:text-lg leading-tight text-foreground">
              Hargeisa Service Technology
            </div>
            <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              ICT Solutions · Somaliland
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a
            href="#services"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#clients"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Clients
          </a>
          <a
            href="#roadmap"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Roadmap
          </a>
          <a
            href="#team"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Team
          </a>
          <Button size="sm">
            <a href="#contact">Free Consultation</a>
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="p-2 text-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-b border-border bg-white dark:bg-navy-900 px-4 pt-2 pb-6 space-y-3">
          {["services", "about", "clients", "roadmap", "team"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="block capitalize py-1 text-base font-medium text-foreground"
            >
              {item}
            </a>
          ))}
          <Button className="w-full mt-2">
            <a href="#contact" onClick={() => setOpen(false)}>
              Free Consultation
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};
