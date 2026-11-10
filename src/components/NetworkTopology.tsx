import React from "react";
import { motion } from "framer-motion";

export const NetworkTopology: React.FC = () => {
  return (
    <div className="border border-border bg-white dark:bg-navy-800 p-4 shadow-sm w-full">
      <div className="flex justify-between items-center text-xs font-mono text-muted-foreground uppercase pb-3 border-b border-border mb-4">
        <span>Sample Campus Topology</span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Live Telemetry
        </span>
      </div>

      <svg
        viewBox="0 0 480 380"
        className="w-full h-auto text-foreground font-mono"
        fill="none"
      >
        {/* Core links */}
        <motion.path
          d="M240 52 V92 M240 136 V176 M240 220 V262"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 2"
          className="text-blue-500"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <path
          d="M240 198 H110 V262 M240 198 H370 V262"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-300 dark:text-slate-600"
        />
        <path
          d="M284 114 H400"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeDasharray="6 4"
        />

        {/* Tree Endpoints */}
        <path
          d="M110 306 V322 M70 322 H150 M70 322 V338 M110 322 V338 M150 322 V338"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300 dark:text-slate-600"
        />
        <path
          d="M370 306 V322 M330 322 H410 M330 322 V338 M370 322 V338 M410 322 V338"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300 dark:text-slate-600"
        />

        {/* Nodes */}
        {/* Internet */}
        <rect
          x="190"
          y="12"
          width="100"
          height="40"
          fill="#FEF3C7"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
        <text
          x="240"
          y="30"
          textAnchor="middle"
          fill="#78350F"
          fontSize="11"
          fontWeight="bold"
        >
          INTERNET
        </text>
        <text x="240" y="43" textAnchor="middle" fill="#92400E" fontSize="9">
          ISP Uplink
        </text>

        {/* FortiGate */}
        <rect x="180" y="92" width="120" height="44" fill="#2563EB" />
        <text
          x="240"
          y="112"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="12"
          fontWeight="bold"
        >
          FortiGate
        </text>
        <text x="240" y="126" textAnchor="middle" fill="#BFDBFE" fontSize="9">
          Next-Gen Firewall
        </text>

        {/* Core Switch */}
        <rect
          x="180"
          y="176"
          width="120"
          height="44"
          className="fill-slate-100 dark:fill-navy-700 stroke-slate-900 dark:stroke-slate-300"
          strokeWidth="1.5"
        />
        <text
          x="240"
          y="196"
          textAnchor="middle"
          fill="currentColor"
          fontSize="11"
          fontWeight="600"
        >
          Core Switch
        </text>
        <text
          x="240"
          y="210"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.6"
          fontSize="9"
        >
          L3 Inter-VLAN
        </text>

        {/* Staff Access Switch */}
        <rect
          x="50"
          y="262"
          width="120"
          height="44"
          className="fill-slate-100 dark:fill-navy-700 stroke-slate-900 dark:stroke-slate-300"
          strokeWidth="1.5"
        />
        <text
          x="110"
          y="282"
          textAnchor="middle"
          fill="currentColor"
          fontSize="11"
          fontWeight="600"
        >
          Access SW-1
        </text>
        <text
          x="110"
          y="296"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.6"
          fontSize="9"
        >
          VLAN 10 · Staff
        </text>

        {/* Server Rack */}
        <rect
          x="180"
          y="262"
          width="120"
          height="44"
          className="fill-slate-100 dark:fill-navy-700 stroke-slate-900 dark:stroke-slate-300"
          strokeWidth="1.5"
        />
        <text
          x="240"
          y="282"
          textAnchor="middle"
          fill="currentColor"
          fontSize="11"
          fontWeight="600"
        >
          Server Rack
        </text>
        <text
          x="240"
          y="296"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.6"
          fontSize="9"
        >
          AD · DNS · Backup
        </text>

        {/* Lab Switch */}
        <rect
          x="310"
          y="262"
          width="120"
          height="44"
          className="fill-slate-100 dark:fill-navy-700 stroke-slate-900 dark:stroke-slate-300"
          strokeWidth="1.5"
        />
        <text
          x="370"
          y="282"
          textAnchor="middle"
          fill="currentColor"
          fontSize="11"
          fontWeight="600"
        >
          Access SW-2
        </text>
        <text
          x="370"
          y="296"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.6"
          fontSize="9"
        >
          VLAN 20 · Labs
        </text>

        {/* WISP Radio Tower */}
        <path
          d="M412 66 L400 114 L424 114 Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M406 90 H418 M403 102 H421"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="412"
          cy="62"
          r="5"
          fill="#F59E0B"
          className="animate-ping origin-center"
        />
        <circle cx="412" cy="62" r="4" fill="#F59E0B" />
        <text
          x="412"
          y="132"
          textAnchor="middle"
          fill="currentColor"
          fontSize="9"
        >
          WISP Link
        </text>

        {/* Endpoints */}
        {[64, 104, 144].map((x) => (
          <rect
            key={x}
            x={x}
            y="338"
            width="12"
            height="10"
            className="fill-slate-800 dark:fill-slate-200"
          />
        ))}
        {[324, 364, 404].map((x) => (
          <rect
            key={x}
            x={x}
            y="338"
            width="12"
            height="10"
            className="fill-slate-800 dark:fill-slate-200"
          />
        ))}
        <text x="110" y="365" textAnchor="middle" opacity="0.7" fontSize="10">
          Administrative Offices
        </text>
        <text x="370" y="365" textAnchor="middle" opacity="0.7" fontSize="10">
          Student Classrooms
        </text>
      </svg>
    </div>
  );
};
