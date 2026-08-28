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
    description:
      "Capture and submit photos of potential mosquito breeding sites.",
    icon: "▣",
  },
  {
    title: "Geotagging",
    description:
      "Automatically records the location and timestamp of reports.",
    icon: "⌖",
  },
  {
    title: "Report Tracking",
    description:
      "View submitted reports and monitor their verification status.",
    icon: "☷",
  },
];

const dashboardFeatures = [
  {
    title: "Risk Heatmaps",
    description:
      "Visualize mosquito and dengue risk levels across the community.",
    icon: "▰",
  },
  {
    title: "Verified Reports",
    description:
      "Review AI-verified reports together with their risk assessments.",
    icon: "▤",
  },
  {
    title: "Interventions",
    description:
      "Monitor and manage response activities based on identified risks.",
    icon: "✓",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="bg-[#F6FBFC]">

      {/* ========================================================= */}
      {/* PLATFORM INTRODUCTION */}
      {/* ========================================================= */}

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#008C95]">
            The VECPRO Ecosystem
          </p>

          <div className="mt-4 flex w-full items-center justify-center gap-4 sm:gap-8 lg:gap-14">
            <img
              src="/logo/aedex.png"
              alt="AEDEX logo"
              className="h-16 w-20 object-contain sm:h-20 sm:w-28 lg:h-24 lg:w-36"
            />

            <h2 className="text-4xl font-bold tracking-tight text-[#102A35] sm:text-5xl">
              One system.
              <span className="block bg-gradient-to-r from-[#006B78] to-[#159BD3] bg-clip-text text-transparent">
                Connected surveillance.
              </span>
            </h2>

            <img
              src="/logo/aedify.png"
              alt="AEDIFY logo"
              className="h-16 w-20 object-contain sm:h-20 sm:w-28 lg:h-24 lg:w-36"
            />
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            VECPRO connects community reporting, intelligent verification,
            risk analysis, forecasting, and intervention management through
            AEDEX and AEDIFY.
          </p>

        </div>


        {/* ========================================================= */}
        {/* AEDEX */}
        {/* ========================================================= */}

        <article className="relative mt-16 overflow-hidden rounded-[32px] border border-[#BFE5EA] bg-gradient-to-r from-[#006B78] via-[#008C95] to-[#159BD3] shadow-sm">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#159BD3]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#006B78]/10 blur-3xl" />

          {/* Large floating ring */}
          <div className="pointer-events-none absolute right-10 top-8 h-28 w-28 rounded-full border border-[#008C95]/10" />

          <div className="pointer-events-none absolute right-20 top-16 h-12 w-12 rounded-full border border-[#159BD3]/10" />

          {/* Floating dots */}
          <div className="pointer-events-none absolute bottom-10 right-12 grid grid-cols-5 gap-2 opacity-30">
            {Array.from({ length: 25 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-[#008C95]"
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 grid items-center gap-12 p-8 md:p-12 lg:grid-cols-2 lg:p-14">

            {/* ===================================================== */}
            {/* AEDEX VISUAL */}
            {/* ===================================================== */}

            <div className="flex justify-center">

              <div className="relative flex h-[430px] w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white/70 via-[#EAF8FA]/70 to-[#DDF4F7]/70 shadow-inner">

                {/* Decorative circles */}
                <div className="pointer-events-none absolute -left-10 top-12 h-32 w-32 rounded-full border border-[#159BD3]/10" />

                <div className="pointer-events-none absolute -left-5 top-17 h-12 w-12 rounded-full bg-[#008C95]/10" />

                <div className="pointer-events-none absolute bottom-5 right-5 h-28 w-28 rounded-full border border-[#008C95]/10" />

                {/* Dots */}
                <div className="pointer-events-none absolute left-8 bottom-8 grid grid-cols-4 gap-2 opacity-30">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#159BD3]"
                    />
                  ))}
                </div>

                {/* Glow behind phone */}
                <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#159BD3]/10 blur-3xl" />

                {/* Phone */}
                <div className="relative z-10 flex h-[360px] w-[185px] items-center justify-center rounded-[38px] border-[7px] border-[#102A35] bg-white shadow-2xl">

                  {/* Phone top speaker */}
                  <div className="absolute left-1/2 top-0 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-[#102A35]" />

                  <div className="text-center">

                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF8FA]">
                      <span className="text-2xl text-[#008C95]">
                        ◇
                      </span>
                    </div>

                    <p className="text-xl font-bold text-[#006B78]">
                      AEDEX
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Mobile App Preview
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* ===================================================== */}
            {/* AEDEX INFORMATION */}
            {/* ===================================================== */}

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EAF8FA]">
                Community Application
              </p>

              <h3 className="mt-2 text-4xl font-bold text-white">
                AEDEX
              </h3>

              <p className="mt-1 text-sm font-medium text-[#D9F7FB]">
                Mobile Application
              </p>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/80">
                Empowering communities to report suspected mosquito
                breeding sites and contribute to dengue surveillance.
              </p>


              {/* Features */}
              <div className="mt-8 space-y-5">

                {appFeatures.map((feature) => (

                  <div
                    key={feature.title}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-lg text-white shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:bg-white/15">
                      {feature.icon}
                    </div>

                    <div>

                      <h4 className="font-semibold text-white">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-sky-50/80">
                        {feature.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </article>


        {/* ========================================================= */}
        {/* AEDIFY */}
        {/* ========================================================= */}

        <article className="relative mt-8 overflow-hidden rounded-[32px] border border-[#BFE5EA] bg-gradient-to-bl from-[#EAF8FA] via-[#F6FBFC] to-white shadow-sm">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#159BD3]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#006B78]/10 blur-3xl" />

          {/* Floating rings */}
          <div className="pointer-events-none absolute left-10 top-8 h-28 w-28 rounded-full border border-[#008C95]/10" />

          <div className="pointer-events-none absolute left-20 top-16 h-12 w-12 rounded-full border border-[#159BD3]/10" />

          {/* Floating dots */}
          <div className="pointer-events-none absolute bottom-10 left-12 grid grid-cols-5 gap-2 opacity-30">
            {Array.from({ length: 25 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-[#008C95]"
              />
            ))}
          </div>


          {/* Content */}
          <div className="relative z-10 grid items-center gap-12 p-8 md:p-12 lg:grid-cols-2 lg:p-14">

            {/* ===================================================== */}
            {/* AEDIFY INFORMATION */}
            {/* ===================================================== */}

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#008C95]">
                Management Dashboard
              </p>

              <h3 className="mt-2 text-4xl font-bold text-[#102A35]">
                AEDIFY
              </h3>

              <p className="mt-1 text-sm font-medium text-[#008C95]">
                Web Dashboard
              </p>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
                Providing LGUs and authorized personnel with the data and
                insights needed to monitor risks and support intervention.
              </p>


              {/* Features */}
              <div className="mt-8 space-y-5">

                {dashboardFeatures.map((feature) => (

                  <div
                    key={feature.title}
                    className="group flex gap-4"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#BFE5EA] bg-white text-lg text-[#006B78] shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-[#8DD5DD] group-hover:shadow-md">
                      {feature.icon}
                    </div>

                    <div>

                      <h4 className="font-semibold text-[#102A35]">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {feature.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* ===================================================== */}
            {/* AEDIFY VISUAL */}
            {/* ===================================================== */}

            <div className="flex justify-center lg:justify-end">

              <div className="relative flex h-[430px] w-full max-w-[560px] items-center justify-center overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white/70 via-[#EAF8FA]/70 to-[#DDF4F7]/70 shadow-inner">

                {/* Decorative circles */}
                <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full border border-[#008C95]/10" />

                <div className="pointer-events-none absolute right-16 top-16 h-12 w-12 rounded-full bg-[#159BD3]/10" />

                <div className="pointer-events-none absolute bottom-8 left-8 h-24 w-24 rounded-full border border-[#159BD3]/10" />

                {/* Glow */}
                <div className="pointer-events-none absolute -bottom-10 right-0 h-64 w-64 rounded-full bg-[#006B78]/10 blur-3xl" />


                {/* Dashboard */}
                <div className="relative z-10 w-[90%] max-w-[500px] overflow-hidden rounded-2xl border-[5px] border-[#102A35] bg-[#102A35] shadow-2xl">

                  {/* Browser Bar */}
                  <div className="flex h-9 items-center gap-1.5 bg-[#102A35] px-4">

                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />

                  </div>


                  {/* Dashboard Preview */}
                  <div className="aspect-[16/10] bg-white">

                    <div className="flex h-full">

                      {/* Sidebar */}
                      <div className="hidden w-[22%] flex-col gap-4 bg-[#102A35] p-4 sm:flex">

                        <div className="h-3 w-14 rounded bg-white/20" />

                        <div className="h-2 w-full rounded bg-[#008C95]" />
                        <div className="h-2 w-4/5 rounded bg-white/10" />
                        <div className="h-2 w-3/4 rounded bg-white/10" />
                        <div className="h-2 w-5/6 rounded bg-white/10" />

                      </div>


                      {/* Dashboard Main */}
                      <div className="flex-1 bg-[#F6FBFC] p-4">

                        {/* Header */}
                        <div className="flex items-center justify-between">

                          <div>
                            <div className="h-3 w-20 rounded bg-[#102A35]/20" />
                            <div className="mt-2 h-2 w-28 rounded bg-[#102A35]/10" />
                          </div>

                          <div className="h-7 w-7 rounded-full bg-[#EAF8FA]" />

                        </div>


                        {/* Stat Cards */}
                        <div className="mt-5 grid grid-cols-3 gap-2">

                          <div className="rounded-lg bg-white p-3 shadow-sm">
                            <div className="h-2 w-10 rounded bg-[#008C95]/30" />
                            <div className="mt-2 h-4 w-12 rounded bg-[#102A35]/20" />
                          </div>

                          <div className="rounded-lg bg-white p-3 shadow-sm">
                            <div className="h-2 w-10 rounded bg-[#159BD3]/30" />
                            <div className="mt-2 h-4 w-12 rounded bg-[#102A35]/20" />
                          </div>

                          <div className="rounded-lg bg-white p-3 shadow-sm">
                            <div className="h-2 w-10 rounded bg-[#006B78]/30" />
                            <div className="mt-2 h-4 w-12 rounded bg-[#102A35]/20" />
                          </div>

                        </div>


                        {/* Map / Chart */}
                        <div className="mt-3 grid grid-cols-[1.3fr_0.7fr] gap-3">

                          <div className="relative h-32 overflow-hidden rounded-lg bg-white shadow-sm">

                            <div className="absolute inset-5 rounded-full bg-[#EAF8FA]" />

                            <div className="absolute left-[35%] top-[30%] h-12 w-12 rounded-full bg-[#159BD3]/30 blur-md" />

                            <div className="absolute left-[48%] top-[45%] h-8 w-8 rounded-full bg-[#008C95]/40 blur-sm" />

                            <div className="absolute left-[55%] top-[40%] h-5 w-5 rounded-full bg-[#006B78]/60" />

                          </div>

                          <div className="h-32 rounded-lg bg-white p-3 shadow-sm">

                            <div className="h-2 w-12 rounded bg-[#102A35]/20" />

                            <div className="mt-5 flex h-16 items-end gap-1.5">

                              <span className="h-6 flex-1 rounded-t bg-[#159BD3]/30" />
                              <span className="h-10 flex-1 rounded-t bg-[#159BD3]/40" />
                              <span className="h-8 flex-1 rounded-t bg-[#008C95]/40" />
                              <span className="h-14 flex-1 rounded-t bg-[#008C95]/60" />
                              <span className="h-11 flex-1 rounded-t bg-[#006B78]/50" />

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </article>

      </div>


      {/* ========================================================= */}
      {/* TECHNOLOGY */}
      {/* ========================================================= */}

      <div className="border-y border-[#D8EEF1] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#008C95]">
              VECPRO Technology
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102A35] sm:text-4xl">
              From reports to actionable intelligence.
            </h2>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {technologies.map((technology) => (

              <article
                key={technology.title}
                className="group rounded-2xl border border-[#D8EEF1] bg-[#F6FBFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8DD5DD] hover:bg-[#EAF8FA] hover:shadow-lg"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#006B78] to-[#159BD3] text-lg text-white shadow-sm">
                  {technology.icon}
                </div>

                <h3 className="mt-5 font-bold text-[#102A35]">
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