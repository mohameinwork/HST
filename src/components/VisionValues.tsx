import React from "react";

export const VisionValues: React.FC = () => {
  const values = [
    {
      name: "Professionalism",
      desc: "Rigorous standards and certified engineering",
    },
    {
      name: "Innovation",
      desc: "Adopting modern architectures and cloud paradigms",
    },
    {
      name: "Reliability",
      desc: "Zero-downtime mentality for critical networks",
    },
    {
      name: "Integrity",
      desc: "Transparent billing, warranties and honest scoping",
    },
    {
      name: "Customer Centric",
      desc: "Matching institutional needs with precision",
    },
    {
      name: "Continuous Learning",
      desc: "Upskilling staff with global technology trends",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-900 text-white dark:bg-navy-900 border-y border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              Strategic Intent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
              The Most Trusted Technology Provider in the Horn of Africa.
            </h2>
            <p className="mt-6 text-slate-300 leading-relaxed text-base">
              HST operates to anchor Somaliland’s rapid modernization with
              industrial-grade ICT infrastructure. We combine local operational
              agility with international network and cyber-defense standards.
            </p>
            <div className="mt-8 border-l-2 border-amber-400 pl-4 py-1">
              <h4 className="text-sm uppercase tracking-wide font-mono text-amber-300 font-bold">
                Our Mission
              </h4>
              <p className="text-slate-300 text-sm mt-1">
                To deliver resilient, affordable, and high-performance
                technological services that elevate universities, enterprises,
                and public agencies to global competitive parity.
              </p>
            </div>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              Guiding Principles
            </span>
            <h3 className="text-xl font-bold mt-3 mb-6">
              Our Core Operational Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <div
                  key={v.name}
                  className="p-4 bg-slate-800/80 border border-slate-700"
                >
                  <div className="font-bold text-white text-base">{v.name}</div>
                  <div className="text-xs text-slate-400 mt-1">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
