import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ConsultationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    service: "Network Installation",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-100/50 dark:bg-navy-900/40 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              Direct Engagement
            </span>
            <h2 className="text-3xl font-extrabold text-foreground mt-2 leading-tight">
              Request a Technical Scoping Session & Quotation
            </h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Tell us about your physical layout, user density, or software
              requirements. Our lead network engineers will respond with an
              initial topology draft and quotation.
            </p>

            <div className="mt-8 space-y-3 font-mono text-xs text-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-amber-500" />
                Turnaround within 24 business hours
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-amber-500" />
                Comprehensive physical and logical audits
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-amber-500" />
                Custom maintenance contracts (SLA)
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 border border-border bg-white dark:bg-navy-800 shadow-sm space-y-4"
            >
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-foreground mb-1">
                  Full Name
                </label>
                <Input
                  required
                  placeholder="e.g. Ahmed Dualeh"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-bold text-foreground mb-1">
                  Company / Institution
                </label>
                <Input
                  placeholder="e.g. Somaliland University or Enterprise Ltd"
                  value={formData.org}
                  onChange={(e) =>
                    setFormData({ ...formData, org: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-bold text-foreground mb-1">
                  Primary Requirement
                </label>
                <select
                  className="flex h-11 w-full border border-border bg-white dark:bg-navy-700 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option>Network Installation & Fiber Splicing</option>
                  <option>Software Development & Enterprise Systems</option>
                  <option>Network & IT Maintenance SLA</option>
                  <option>Cybersecurity & Firewall (FortiGate)</option>
                  <option>ICT Consultation & Architecture Planning</option>
                  <option>Staff Training & CCNA Bootcamps</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-bold text-foreground mb-1">
                  Scope Details
                </label>
                <Textarea
                  placeholder="Describe your nodes, building dimensions, or existing pain-points..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Consultation Request
              </Button>

              {submitted && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-mono">
                  ✓ Request captured. Connect your backend endpoint
                  (Node/API/Resend) here to dispatch notifications to the HST
                  NOC.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
