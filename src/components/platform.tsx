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

          <div className="mt-4 mb-10 flex w-full items-center justify-center gap-1 sm:gap-3 lg:gap-6">

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

          <p className="text-lg leading-8 text-slate-600">
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


          {/* ===================================================== */}
          {/* AEDEX CONTENT */}
          {/* ===================================================== */}

          <div className="relative z-10 grid items-center gap-8 p-5 sm:p-8 md:p-12 lg:grid-cols-2 lg:gap-12 lg:p-14">

            {/* AEDEX VISUAL */}

            <div className="flex justify-center">

              <div className="relative flex h-[350px] w-full max-w-[360px] items-center justify-center overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white/70 via-[#EAF8FA]/70 to-[#DDF4F7]/70 shadow-inner sm:h-[390px] sm:max-w-[430px] lg:h-[430px] lg:max-w-[520px]">

                {/* Decorative circles */}
                <div className="pointer-events-none absolute -left-10 top-12 h-32 w-32 rounded-full border border-[#159BD3]/10" />

                <div className="pointer-events-none absolute -left-5 top-17 h-12 w-12 rounded-full bg-[#008C95]/10" />

                <div className="pointer-events-none absolute bottom-5 right-5 h-28 w-28 rounded-full border border-[#008C95]/10" />

                {/* Dots */}
                <div className="pointer-events-none absolute bottom-8 left-8 grid grid-cols-4 gap-2 opacity-30">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#159BD3]"
                    />
                  ))}
                </div>

                {/* Glow behind asset */}
                <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#159BD3]/10 blur-3xl" />

                <img
                  src="/images/aedex.svg"
                  alt="AEDEX mobile app preview"
                  className="relative z-10 h-[390px] w-auto max-w-[96%] object-contain drop-shadow-[0_25px_60px_rgba(16,42,53,0.18)] sm:h-[440px] sm:max-w-[98%] lg:h-[640px] lg:max-w-[100%]"
                />

              </div>

            </div>


            {/* AEDEX INFORMATION */}

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

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                Empowering communities to report suspected mosquito
                breeding sites and contribute to dengue surveillance.
              </p>


              {/* AEDEX FEATURES */}

              <div className="mt-6 space-y-4 lg:mt-8 lg:space-y-5">

                {appFeatures.map((feature) => (

                  <div
                    key={feature.title}
                    className="group flex items-start gap-4"
                  >

                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-base text-white shadow-sm backdrop-blur-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:bg-white/15 sm:h-12 sm:w-12 sm:text-lg">
                      {feature.icon}
                    </div>

                    {/* Feature text */}
                    <div className="min-w-0">

                      <h4 className="text-sm font-semibold text-white sm:text-base">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-sky-50/80 sm:text-sm sm:leading-6">
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

          <div className="pointer-events-none absolute left-20 top-16 h-12 w-12 rounded-full bg-[#159BD3]/10" />

          {/* Floating dots */}
          <div className="pointer-events-none absolute bottom-10 left-12 grid grid-cols-5 gap-2 opacity-30">
            {Array.from({ length: 25 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-[#008C95]"
              />
            ))}
          </div>


          {/* ===================================================== */}
          {/* AEDIFY CONTENT */}
          {/* ===================================================== */}

          <div className="relative z-10 grid items-center gap-12 p-8 md:p-12 lg:grid-cols-2 lg:p-14">

            {/* AEDIFY INFORMATION */}

            <div className="order-last lg:order-first">

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


            {/* AEDIFY VISUAL */}

            <div className="order-first flex justify-center lg:order-last lg:justify-end">

              <div className="relative flex h-[330px] w-full max-w-[360px] items-center justify-center overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white/70 via-[#EAF8FA]/70 to-[#DDF4F7]/70 shadow-inner sm:h-[380px] sm:max-w-[430px] lg:h-[430px] lg:max-w-[560px]">

                {/* Decorative circles */}
                <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full border border-[#008C95]/10" />

                <div className="pointer-events-none absolute right-16 top-16 h-12 w-12 rounded-full bg-[#159BD3]/10" />

                <div className="pointer-events-none absolute bottom-8 left-8 h-24 w-24 rounded-full border border-[#159BD3]/10" />

                {/* Glow */}
                <div className="pointer-events-none absolute -bottom-10 right-0 h-64 w-64 rounded-full bg-[#006B78]/10 blur-3xl" />

                <img
                  src="/images/aedify.svg"
                  alt="AEDIFY dashboard preview"
                  className="relative z-10 h-[330px] w-auto max-w-[94%] object-contain drop-shadow-[0_25px_60px_rgba(16,42,53,0.12)] sm:h-[400px] sm:max-w-[96%] lg:h-[500px] lg:max-w-[100%]"
                />

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


          {/* ===================================================== */}
          {/* TECHNOLOGY GRID */}
          {/* ===================================================== */}

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

            {technologies.map((technology) => (

              <article
                key={technology.title}
                className="group rounded-2xl border border-[#D8EEF1] bg-[#F6FBFC] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#8DD5DD] hover:bg-[#EAF8FA] hover:shadow-lg sm:p-6"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#006B78] to-[#159BD3] text-base text-white shadow-sm sm:h-11 sm:w-11 sm:text-lg">
                  {technology.icon}
                </div>

                <h3 className="mt-4 text-sm font-bold leading-tight text-[#102A35] sm:mt-5 sm:text-base">
                  {technology.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
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