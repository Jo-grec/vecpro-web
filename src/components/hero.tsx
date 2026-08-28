export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fcf9] to-[#edf7f0]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-12">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-2xl">

          {/* Eyebrow */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            AI-Powered Mosquito Surveillance
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">
            AI-Powered
            <br />
            Mosquito Surveillance
            <span className="block text-emerald-800">
              & Dengue Risk Forecasting
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Automating mosquito breeding-site detection through
            community-submitted reports and advanced spatiotemporal
            modeling in Iloilo City.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-lg"
            >
              <span>↓</span>
              Download Mobile App
            </a>

            <a
              href="#platform"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-700 bg-white px-6 py-3.5 text-sm font-semibold text-emerald-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50"
            >
              <span>▷</span>
              Explore Platform
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">

            {/* Highlight 1 */}
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                ◉
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Real-Time
                  <br />
                  Monitoring
                </h3>

                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  Continuous community reporting and risk monitoring.
                </p>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                ✦
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  AI Forecasting
                  <br />
                  Models
                </h3>

                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  Predictive insights for early intervention.
                </p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                ↗
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Data-Driven
                  <br />
                  Decisions
                </h3>

                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  Actionable information for intervention planning.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative z-10">

          {/* Decorative dots */}
          <div className="absolute -left-6 bottom-12 hidden h-32 w-32 opacity-40 lg:block">
            <div className="grid grid-cols-6 gap-3">
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
              ))}
            </div>
          </div>

          {/* Main image placeholder */}
          <div className="relative ml-auto w-full max-w-[620px]">

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
              {/* Replace this area with the AEDISYS dashboard image later */}
              <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-800">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-2xl text-white">
                    +
                  </div>

                  <p className="text-lg font-semibold text-white">
                    AEDISYS Dashboard
                  </p>

                  <p className="mt-2 text-sm text-white/60">
                    Replace with your platform image
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile app placeholder */}
            <div className="absolute -bottom-8 -right-3 w-28 overflow-hidden rounded-2xl border-4 border-slate-900 bg-white shadow-2xl sm:w-32 lg:-right-6 lg:w-36">
              <div className="flex aspect-[9/17] items-center justify-center bg-emerald-900 p-3">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-8 w-8 rounded-lg bg-white/20" />

                  <p className="text-[10px] font-semibold text-white">
                    AEDISYS
                  </p>

                  <p className="mt-1 text-[8px] text-white/60">
                    Mobile App
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}