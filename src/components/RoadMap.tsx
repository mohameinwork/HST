import React from "react";
import { Card } from "./ui/card";
import { CheckSquare } from "lucide-react";

export const Roadmap: React.FC = () => {
  const phases = [
    {
      phase: "Phase 1 · Year 1",
      title: "Establishment & Grounding",
      color: "border-t-blue-600",
      milestones: [
        "Company registration & corporate office launch",
        "Field equipment, OTDR, & fiber splicing asset acquisition",
        "Strategic rollout of network engineering & IT maintenance",
        "Foundational contracts across Hargeisa educational institutions",
      ],
    },
    {
      phase: "Phase 2 · Year 2",
      title: "Vertical Growth & Services",
      color: "border-t-amber-500",
      milestones: [
        "Deployment of proprietary Cloud ERP systems",
        "Commercial Fortinet/Cisco cyber audit offerings",
        "Long-term annual maintenance SLA programs",
        "Official launch of the HST Professional ICT Training Academy",
      ],
    },
    {
      phase: "Phase 3 · Year 3",
      title: "Regional Authority & Hub",
      color: "border-t-slate-900 dark:border-t-slate-100",
      milestones: [
        "Branch expansion across Berbera, Burao and wider regions",
        "Proprietary local SaaS suite launch for SMBs",
        "Centralized 24/7 Network Operations Center (NOC)",
        "Top-tier certified regional ICT systems integrator status",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-slate-100/70 dark:bg-navy-900/60 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
            3-Year Trajectory
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-2">From Market Entry to Regional Leadership</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p) => (
            <Card key={p.phase} className={`border-t-4 ${p.color} flex flex-col justify-between`}>
              <div>
                <span className="font-mono text-xs font-semibold text-muted-foreground uppercase">{p.phase}</span>
                <h3 className="text-xl font-bold mt-1 mb-4 text-foreground">{p.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {p.milestones.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
