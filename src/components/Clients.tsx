import React from "react";


export const Clients: React.FC = () => {
  const segments = [
    { name: "Universities & Academic Hubs", scope: "High-density student Wi-Fi, campus core switches, AD domains" },
    { name: "Government Ministries", scope: "Secure VLAN partitions, encrypted links, policy consultation" },
    { name: "Private Enterprises & Banks", scope: "Redundant uplinks, daily offsite snapshots, FortiGate security" },
    { name: "ISPs & Telecom Entities", scope: "Optical splice contracts, WISP towers, last-mile delivery" },
    { name: "International NGOs", scope: "Disaster recovery, secure mobile access, audit-ready tech stacks" },
    { name: "Hospitality & Multi-Tenant Units", scope: "Guest portals, unified IP surveillance networks, VoIP setups" },
  ];

  return (
    <section id="clients" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
            Ecosystem
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-2">Engineered For Scale</h2>
          <p className="text-muted-foreground mt-2">Tailored SLAs match the exact throughput and security criteria of your sector.</p>
        </div>

        <div className="border border-border divide-y divide-border bg-white dark:bg-navy-800 shadow-sm">
          {segments.map((s) => (
            <div key={s.name} className="p-5 sm:grid sm:grid-cols-12 sm:gap-4 items-center hover:bg-slate-50 dark:hover:bg-navy-700/50 transition-colors">
              <div className="sm:col-span-5 font-bold text-foreground text-base mb-1 sm:mb-0">
                {s.name}
              </div>
              <div className="sm:col-span-7 text-sm text-muted-foreground">
                {s.scope}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

