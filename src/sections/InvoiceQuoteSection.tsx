"use client";

import React from "react";
import { FileDown, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { UpsidesBox } from "../components/UpsidesBox";
import { cn } from "../lib/cn";

type ProjectType = "house_extension" | "loft_conversion" | "full_renovation";
type WorkType = "design_build" | "build_only" | "fit_out";

type LineItem = { label: string; qty?: string; amountPence: number };

type QuotePreviewPayload = {
  quoteNumber: string;
  createdAt: string;
  customer: { name: string; postcode: string; email: string; phone: string };
  job: { projectTypeLabel: string; workTypeLabel: string; areaSqm: number };
  items: LineItem[];
  subtotalPence: number;
  vatPence: number;
  totalPence: number;
  notes: string;
};

const QUOTE_PREVIEW_STORAGE_KEY = "convert_extend_quote_preview_v1";

const COMPANY = {
  name: "Convert Extend",
  phoneDisplay: "0800 123 4567",
  phoneRaw: "08001234567",
  email: "hello@convertextend.co.uk",
};

/**
 * Pricing model
 * - Everything is in pence to avoid float issues.
 * - These are "instant estimate" numbers (not placeholders) you can tune quickly.
 */
const PRICING = {
  currency: "GBP",
  vatRate: 0.2,
  minTotalPence: 250_00,
  projectMultiplier: {
    house_extension: 1.0,
    loft_conversion: 0.95,
    full_renovation: 1.1,
  } satisfies Record<ProjectType, number>,
  work: {
    design_build: { basePence: 300_00, perSqmPence: 30_00 },
    build_only: { basePence: 250_00, perSqmPence: 26_00 },
    fit_out: { basePence: 220_00, perSqmPence: 22_00 },
  } satisfies Record<WorkType, { basePence: number; perSqmPence: number }>,
  addons: {
    planning: { label: "Planning / building regs support (if required)", pence: 650_00 },
    engineer: { label: "Structural engineer (if required)", pence: 450_00 },
    skip: { label: "Waste removal / skip", pence: 240_00 },
    kitchenBath: { label: "Kitchen/bathroom allowance (if applicable)", pence: 1_200_00 },
  },
} as const;

const PROJECT_TYPE_LABEL: Record<ProjectType, string> = {
  house_extension: "House extension",
  loft_conversion: "Loft conversion",
  full_renovation: "Full property renovation",
};

const WORK_TYPE_LABEL: Record<WorkType, string> = {
  design_build: "Design & build (turnkey)",
  build_only: "Build only (existing plans)",
  fit_out: "Fit-out & finishing",
};

function formatGBPFromPence(pence: number) {
  const pounds = pence / 100;
  return pounds.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
}

function todayISO() {
  return new Date().toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "2-digit" });
}

function clampInt(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, Math.round(n)));
}

function buildQuote(params: {
  projectType: ProjectType;
  workType: WorkType;
  areaSqm: number;
  postcode: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  addons: Record<keyof typeof PRICING.addons, boolean>;
}) {
  const areaSqm = clampInt(params.areaSqm, 5, 500);
  const workPricing = PRICING.work[params.workType];
  const multiplier = PRICING.projectMultiplier[params.projectType];

  const base = Math.round(workPricing.basePence * multiplier);
  const variable = Math.round(workPricing.perSqmPence * areaSqm * multiplier);

  const items: LineItem[] = [
    { label: `${WORK_TYPE_LABEL[params.workType]} — base`, amountPence: base },
  ];

  if (workPricing.perSqmPence > 0) {
    items.push({
      label: `${WORK_TYPE_LABEL[params.workType]} — size`,
      qty: `${areaSqm} m²`,
      amountPence: variable,
    });
  }

  (Object.keys(PRICING.addons) as Array<keyof typeof PRICING.addons>).forEach((k) => {
    if (!params.addons[k]) return;
    items.push({
      label: PRICING.addons[k].label,
      amountPence: PRICING.addons[k].pence,
    });
  });

  const subtotal = items.reduce((sum, it) => sum + it.amountPence, 0);
  const minAdjustedSubtotal = Math.max(subtotal, PRICING.minTotalPence);
  const vat = Math.round(minAdjustedSubtotal * PRICING.vatRate);
  const total = minAdjustedSubtotal + vat;

  return {
    areaSqm,
    items,
    subtotal: minAdjustedSubtotal,
    vat,
    total,
    createdAt: todayISO(),
    projectTypeLabel: PROJECT_TYPE_LABEL[params.projectType],
    workTypeLabel: WORK_TYPE_LABEL[params.workType],
  };
}

export function InvoiceQuoteSection() {
  const router = useRouter();
  const [projectType, setProjectType] = React.useState<ProjectType>("house_extension");
  const [workType, setWorkType] = React.useState<WorkType>("design_build");
  const [areaSqm, setAreaSqm] = React.useState<number>(40);
  const [addons, setAddons] = React.useState<Record<keyof typeof PRICING.addons, boolean>>({
    planning: true,
    engineer: false,
    skip: true,
    kitchenBath: false,
  });

  const [name, setName] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const quote = React.useMemo(
    () =>
      buildQuote({
        projectType,
        workType,
        areaSqm,
        postcode,
        name,
        email,
        phone,
        notes,
        addons,
      }),
    [projectType, workType, areaSqm, postcode, name, email, phone, notes, addons]
  );

  const demoStats = {
    timeSavedPerWeek: "1–2 hours",
    qualifiedLeads: "+20–30%",
    fasterDecisions: "Same-day follow-up",
  } as const;

  const generateQuoteNumber = React.useCallback(() => {
    const seed = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const short = seed.replaceAll(".", "").slice(-6).toUpperCase();
    return `CE-${short}`;
  }, []);

  const [quoteNumber, setQuoteNumber] = React.useState<string>("");

  React.useEffect(() => {
    setQuoteNumber(generateQuoteNumber());
  }, [generateQuoteNumber]);

  const toggleAddon = (k: keyof typeof PRICING.addons) =>
    setAddons((prev) => ({ ...prev, [k]: !prev[k] }));

  const canGenerate = postcode.trim().length >= 4;

  return (
    <section className="bg-slate-50 py-12 lg:py-16 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Quote Builder">Generate a quote summary PDF</SectionHeading>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 text-slate-600 mb-7">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="text-base font-semibold">
                No prices shown • Subject to survey and access
              </span>
            </div>

            {/* Job details */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-extrabold tracking-wider text-slate-500 uppercase">Job details</p>
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="text-base font-semibold text-slate-700">Project type</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value as ProjectType)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-base"
                  >
                    {(Object.keys(PROJECT_TYPE_LABEL) as ProjectType[]).map((k) => (
                      <option key={k} value={k}>
                        {PROJECT_TYPE_LABEL[k]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-base font-semibold text-slate-700">Work type</label>
                  <select
                    value={workType}
                    onChange={(e) => setWorkType(e.target.value as WorkType)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-base"
                  >
                    {(Object.keys(WORK_TYPE_LABEL) as WorkType[]).map((k) => (
                      <option key={k} value={k}>
                        {WORK_TYPE_LABEL[k]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-base font-semibold text-slate-700">
                    Approx. size <span className="text-slate-500">(m²)</span>
                  </label>
                  <div className="rounded-xl border border-slate-200 bg-white px-5 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <input
                        type="number"
                        min={5}
                        max={500}
                        value={areaSqm}
                        onChange={(e) => setAreaSqm(Number(e.target.value))}
                        className="w-28 text-slate-900 font-bold outline-none bg-transparent text-base"
                      />
                      <span className="text-xs font-semibold text-slate-500">5–500</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={500}
                      value={areaSqm}
                      onChange={(e) => setAreaSqm(Number(e.target.value))}
                      className="mt-2 w-full accent-blue-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Other details */}
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="text-xs font-extrabold tracking-wider text-slate-500 uppercase">Other details</p>
              <div className="mt-4">
                <p className="text-base font-semibold text-slate-700 mb-3">Add-ons</p>
                <div className="flex flex-wrap gap-3">
                  {(Object.keys(PRICING.addons) as Array<keyof typeof PRICING.addons>).map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => toggleAddon(k)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                        addons[k]
                          ? "border-blue-200 bg-blue-50 text-blue-800"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      )}
                    >
                      {PRICING.addons[k].label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 space-y-1.5">
                <label className="text-base font-semibold text-slate-700">Notes (optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white resize-none text-base"
                  placeholder="Anything we should know (access, target start date, budget range, etc.)"
                />
              </div>
            </div>

            {/* Customer details */}
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="text-xs font-extrabold tracking-wider text-slate-500 uppercase">Your details</p>
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-1.5 lg:col-span-2">
                  <label className="text-base font-semibold text-slate-700">Postcode</label>
                  <input
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-base"
                    placeholder="e.g., SW1A 1AA"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-base font-semibold text-slate-700">Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-base"
                    placeholder="e.g., 07700 900000"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-base font-semibold text-slate-700">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-base"
                    placeholder="you@example.co.uk"
                  />
                </div>
                <div className="space-y-1.5 lg:col-span-2">
                  <label className="text-base font-semibold text-slate-700">Name (optional)</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-base"
                    placeholder="Full name"
                  />
                </div>
              </div>
            </div>

            {/* Action bar */}
            <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold text-slate-600">Summary</p>
                  <p className="mt-1 text-2xl font-extrabold text-slate-900 leading-tight">
                    {quote.projectTypeLabel}
                  </p>
                  <p className="mt-2 text-base font-semibold text-slate-600">
                    {quote.workTypeLabel} • {quote.areaSqm} m²
                  </p>
                </div>

                <div className="w-full lg:w-auto">
                  <Button
                    disabled={!canGenerate}
                    onClick={() => {
                      const qn = quoteNumber || generateQuoteNumber();
                      const payload: QuotePreviewPayload = {
                        quoteNumber: qn,
                        createdAt: quote.createdAt,
                        customer: { name, postcode, email, phone },
                        job: {
                          projectTypeLabel: quote.projectTypeLabel,
                          workTypeLabel: quote.workTypeLabel,
                          areaSqm: quote.areaSqm,
                        },
                        items: quote.items,
                        subtotalPence: quote.subtotal,
                        vatPence: quote.vat,
                        totalPence: quote.total,
                        notes,
                      };
                      window.sessionStorage.setItem(QUOTE_PREVIEW_STORAGE_KEY, JSON.stringify(payload));
                      router.push("/quote-preview");
                    }}
                    size="lg"
                    className="w-full lg:w-auto gap-2"
                  >
                    <FileDown className="w-4 h-4" />
                    Generate PDF quote
                  </Button>
                  {!canGenerate ? (
                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      Enter a postcode to generate the PDF.
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button size="lg" variant="outline" as="a" href={`tel:${COMPANY.phoneRaw}`} className="w-full">
                  Call {COMPANY.phoneDisplay}
                </Button>
                <Button size="lg" variant="white" as="a" href={`mailto:${COMPANY.email}`} className="w-full">
                  Email {COMPANY.email}
                </Button>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-6">
              <UpsidesBox className="bg-slate-50">
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      t: "More qualified leads",
                      d: "Customers self-select the service and give key details before you call them back.",
                    },
                    {
                      t: "Saves you time",
                      d: "Less back-and-forth — you start the conversation with the right context.",
                    },
                    {
                      t: "Faster decisions",
                      d: "A clean PDF summary builds trust and keeps the job moving to a survey/booking.",
                    },
                  ].map((c) => (
                    <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-sm font-extrabold text-slate-900">{c.t}</div>
                      <div className="mt-2 text-sm text-slate-600 leading-relaxed">{c.d}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-extrabold tracking-wider text-slate-500 uppercase">
                      Time saved / week
                    </div>
                    <div className="mt-2 text-2xl font-extrabold text-slate-900 tabular-nums">
                      {demoStats.timeSavedPerWeek}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-slate-500">
                      Fewer calls — customers use the tool instead
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-extrabold tracking-wider text-slate-500 uppercase">
                      Higher qualified leads
                    </div>
                    <div className="mt-2 text-2xl font-extrabold text-slate-900 tabular-nums">
                      {demoStats.qualifiedLeads}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-slate-500">
                      More details captured up front
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-extrabold tracking-wider text-slate-500 uppercase">
                      Faster decisions
                    </div>
                    <div className="mt-2 text-2xl font-extrabold text-slate-900 tabular-nums">
                      {demoStats.fasterDecisions}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-slate-500">
                      Clear PDF summary + quick follow-up
                    </div>
                  </div>
                </div>
              </UpsidesBox>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


