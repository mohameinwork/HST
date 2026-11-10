import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import {
  Network,
  Code2,
  Wrench,
  ShieldCheck,
  Compass,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    tag: "INFRASTRUCTURE",
    title: "Network Installation & Architecture",
    icon: Network,
    items: [
      "Enterprise LAN, WAN, and Optical Fiber",
      "Point-to-Point Wireless & WISP Backhauls",
      "Multi-VLAN & Dynamic OSPF/BGP Routing",
      "Server Racks & Structured Cabling (Cat6a/Cat7)",
      "CCTV Camera",
      "Fingerprint Attendance System",
    ],
  },
  {
    tag: "SOFTWARE",
    title: "Software Development & Systems",
    icon: Code2,
    items: [
      "University & School ERP Management Suites",
      "Business Intelligence & Inventory Software",
      "Custom Web Applications & REST API Design",
      "Relational & Distributed Database Design",
      "ODOO ERP & CRM Customization and Deployment",
    ],
  },
  {
    tag: "MAINTENANCE",
    title: "Network & IT Maintenance SLA",
    icon: Wrench,
    items: [
      "24/7 Troubleshooting & Rapid Response",
      "On-premises Hardware & Host Repair",
      "Automated Off-site Backup & Disaster Recovery",
      "System Patch Management & Upgrades",
    ],
  },
  {
    tag: "SECURITY",
    title: "Cybersecurity & Systems Hardening",
    icon: ShieldCheck,
    items: [
      "Fortinet FortiGate Firewall Deployments",
      "Active Directory, Domain & Group Policy",
      "Linux/Windows Hardened Server Administration",
      "Penetration Auditing & Access Governance",
    ],
  },
  {
    tag: "CONSULTATION",
    title: "ICT Consultation & Technical PM",
    icon: Compass,
    items: [
      "Turnkey IT Project Planning & Scoping",
      "Infrastructure Lifecycle Assessments",
      "Vendor-Neutral Hardware Procurement",
      "Enterprise ICT Policy & Data Governance",
    ],
  },
  {
    tag: "ACADEMY",
    title: "Training & Capacity Building",
    icon: GraduationCap,
    items: [
      "Cisco CCNA Exam Preparation Mentorship",
      "Windows Server & Linux SysAdmin Bootcamps",
      "Fiber Splicing & Wireless Field Tech Labs",
      "Modern Fullstack Programming Tracks",
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-slate-100/60 dark:bg-navy-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-foreground">
            Six Comprehensive ICT Services Under One Roof
          </h2>
          <p className="mt-3 text-muted-foreground text-base">
            From the structured patch panel in the basement to proprietary
            enterprise software on high-resolution screens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="h-full flex flex-col justify-between hover:border-blue-500 hover:shadow-md transition-all duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-bold tracking-wider">
                        {svc.tag}
                      </span>
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      {svc.title}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {svc.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-none bg-blue-600 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
