const technologies = [
  {
    title: "AI Verification",
    description:
      "Analyzes community-submitted images to identify potential mosquito breeding sites.",
    icon: "✦",
  },
  {
    title: "Risk Scoring",
    description:
      "Converts verified detections into quantitative risk levels for prioritization.",
    icon: "◈",
  },
  {
    title: "GIS Mapping",
    description:
      "Visualizes reported and verified risks spatially to support location-based decisions.",
    icon: "⌖",
  },
  {
    title: "Risk Forecasting",
    description:
      "Generates short-term 1–7 day risk forecasts using environmental and verified system data.",
    icon: "↗",
  },
];

const appFeatures = [
  {
    title: "Report Breeding Sites",
    description: "Capture and submit photos of potential mosquito breeding sites.",
    icon: "▣",
  },
  {
    title: "Geotagging",
    description: "Automatically records the location and timestamp of reports.",
    icon: "⌖",
  },
  {
    title: "Report Tracking",
    description: "View submitted reports and monitor their verification status.",
    icon: "☷",
  },
];

const dashboardFeatures = [
  {
    title: "Risk Heatmaps",
    description: "Visualize mosquito and dengue risk levels across the community.",
    icon: "▰",
  },
  {
    title: "Verified Reports",
    description: "Review AI-verified reports together with their risk assessments.",
    icon: "▤",
  },
  {
    title: "Interventions",
    description: "Monitor and manage response activities based on identified risks.",
    icon: "✓",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="bg-[#f7faf8]">
      {/* Platform Introduction */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            The VECPRO Ecosystem
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            One system.
            <span className="block text-emerald-800">
              Connected surveillance.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            VECPRO connects community reporting, intelligent verification,
            risk analysis, forecasting, and intervention management through
            AEDEX and AEDIFY.
          </p>
        </div>

        {/* AEDEX + AEDIFY */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* AEDEX */}
          <article className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
            <div className="grid min-h-[420px] items-center gap-8 bg-gradient-to-br from-emerald-50 to-white p-8 md:grid-cols-[0.8fr_1.2fr]">

              {/* App Placeholder */}
              <div className="flex justify-center">
                <div className="flex h-[330px] w-[170px] items-center justify-center rounded-[30px] border-[7px] border-slate-900 bg-slate-100 shadow-xl">
                  <div className="text-center">
                    <p className="text-lg font-bold text-emerald-800">
                      AEDEX
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      App Preview
                    </p>
                  </div>
                </div>
              </div>

              {/* App Information */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
                  Community Application
                </p>

                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                  AEDEX
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Mobile Application
                </p>

                <p className="mt-5 text-sm leading-6 text-slate-600">
                  Empowering the community to report suspected mosquito
                  breeding sites and participate in dengue surveillance.
                </p>

                <div className="mt-6 space-y-4">
                  {appFeatures.map((feature) => (
                    <div key={feature.title} className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm text-emerald-800 shadow-sm ring-1 ring-emerald-100">
                        {feature.icon}
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          {feature.title}
                        </h4>
                        <p className="mt-0.5 text-xs leading-5 text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* AEDIFY */}
          <article className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
            <div className="grid min-h-[420px] items-center gap-8 bg-gradient-to-br from-blue-50 to-white p-8 md:grid-cols-[1.2fr_0.8fr]">

              {/* Dashboard Information */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                  Management Dashboard
                </p>

                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                  AEDIFY
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Web Dashboard
                </p>

                <p className="mt-5 text-sm leading-6 text-slate-600">
                  Providing LGUs and authorized personnel with data,
                  insights, and tools to monitor risks and support
                  intervention decisions.
                </p>

                <div className="mt-6 space-y-4">
                  {dashboardFeatures.map((feature) => (
                    <div key={feature.title} className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm text-blue-700 shadow-sm ring-1 ring-blue-100">
                        {feature.icon}
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          {feature.title}
                        </h4>
                        <p className="mt-0.5 text-xs leading-5 text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Placeholder */}
              <div className="flex justify-center">
                <div className="w-full max-w-[300px] overflow-hidden rounded-xl border-4 border-slate-800 bg-slate-900 shadow-xl">
                  <div className="flex h-7 items-center gap-1 bg-slate-800 px-3">
                    <span className="h-2 w-2 rounded-full bg-slate-500" />
                    <span className="h-2 w-2 rounded-full bg-slate-500" />
                    <span className="h-2 w-2 rounded-full bg-slate-500" />
                  </div>

                  <div className="flex h-[210px] items-center justify-center bg-slate-100">
                    <div className="text-center">
                      <p className="font-bold text-emerald-800">
                        AEDIFY
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Dashboard Preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Technology */}
      <div className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              VECPRO Technology
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              From reports to actionable intelligence.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((technology) => (
              <article
                key={technology.title}
                className="rounded-2xl border border-slate-200 bg-[#f7faf8] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-800">
                  {technology.icon}
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {technology.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {technology.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}