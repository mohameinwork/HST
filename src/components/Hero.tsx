import React from "react";
import { motion } from "framer-motion";
import { NetworkTopology } from "./NetworkTopology";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              Hargeisa, Somaliland
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Connecting Technology,{" "}
              <span className="text-blue-600 dark:text-blue-400 underline decoration-amber-500 decoration-wavy underline-offset-4">
                Empowering the Future.
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              HST constructs mission-critical network backbones, architects
              bespoke software, and maintains resilient IT infrastructure for
              businesses, universities, and institutions across the Horn of
              Africa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact" className="gap-2">
                  Book Free Consultation <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">Explore Services</a>
              </Button>
            </div>

            <div className="mt-10 pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500 font-bold">▸</span> Structured
                Cabling
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500 font-bold">▸</span> Custom
                Software
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500 font-bold">▸</span> FortiGate
                Security
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500 font-bold">▸</span> ICT Capacity
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <NetworkTopology />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
