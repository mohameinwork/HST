import React from "react";
import {
  Users,
  Server,
  Shield,
  Globe,
  Terminal,
  Briefcase,
} from "lucide-react";

export const OrgChart: React.FC = () => {
  const depts = [
    {
      title: "Network Engineering",
      focus: "LAN, WAN, Optical Fiber & Wireless",
      icon: Globe,
    },
    {
      title: "Software Development",
      focus: "ERP, Web Engines & Databases",
      icon: Terminal,
    },
    {
      title: "IT Systems Maintenance",
      focus: "Host Upgrades & Field Support",
      icon: Server,
    },
    {
      title: "Cybersecurity Division",
      focus: "Firewalls, Audits & Active Directory",
      icon: Shield,
    },
    {
      title: "ICT Consultation",
      focus: "Solution Architecture & Scoping",
      icon: Users,
    },
    {
      title: "Administration & Sales",
      focus: "Billing, Client SLA & Partnerships",
      icon: Briefcase,
    },
  ];

  return (
    <section id="team" className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
            Operational Structure
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-2">
            Executive Leadership & Divisions
          </h2>
        </div>

        {/* Tree Header */}
        <div className="flex flex-col items-center">
          <div className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-8 py-3 font-bold font-mono text-sm tracking-wide shadow">
            MANAGING DIRECTOR / CEO
          </div>
          <div className="w-0.5 h-8 bg-slate-900 dark:bg-white" />
          <div className="w-full max-w-3xl border-t-2 border-slate-900 dark:border-white mb-8 hidden md:block" />
        </div>

        {/* Grid of Divisions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {depts.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="p-4 border border-border bg-white dark:bg-navy-800 flex items-start gap-4"
              >
                <div className="p-2 bg-blue-50 dark:bg-navy-700 text-blue-600 dark:text-blue-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    {d.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {d.focus}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 mx-auto max-w-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 p-4 text-xs font-mono text-amber-900 dark:text-amber-300 text-center">
          Note: Early agile operations employ cross-functional certified
          engineers executing combined divisional responsibilities.
        </div>
      </div>
    </section>
  );
};
