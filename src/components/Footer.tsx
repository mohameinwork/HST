import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-white tracking-wide">
            Hargeisa Service Technology (HST)
          </span>
          <span className="mx-2">·</span>
          <span>Hargeisa, Somaliland</span>
        </div>
        <div className="font-mono text-xs">
          Connecting Technology, Empowering the Future.
        </div>
      </div>
    </footer>
  );
};
