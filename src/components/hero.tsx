export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#F6FBFC] to-[#EAF8FA]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#BDEFF3]/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-4 px-6 py-8 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-8 lg:py-12">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-2xl">

          {/* Eyebrow */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#008C95]">
            AI-Powered Mosquito Surveillance
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#102A35] sm:text-5xl lg:text-[50px]">
            AI-Powered
            <br />
            Mosquito Surveillance
            <span className="block bg-gradient-to-r from-[#006B78] to-[#159BD3] bg-clip-text text-transparent">
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
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="/download"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#006B78] to-[#159BD3] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>↓</span>
              Download Mobile App
            </a>

            <a
              href="#platform"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#008C95] bg-white px-6 py-3.5 text-sm font-semibold text-[#006B78] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EAF8FA]"
            >
              <span>▷</span>
              Explore Platform
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative z-10 -mt-2 lg:mt-0">

          {/* Decorative dots */}
          <div className="absolute -left-6 bottom-12 hidden h-32 w-32 opacity-40 lg:block">
            <div className="grid grid-cols-6 gap-3">
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[#159BD3]"
                />
              ))}
            </div>
          </div>

          {/* Hero mockup */}
          <div className="relative left-1/2 w-[115%] max-w-[820px] -translate-x-1/2 lg:left-auto lg:ml-auto lg:w-full lg:max-w-[720px] lg:translate-x-0">
            <img
              src="/images/heromockup.svg"
              alt="VECPRO platform mockup"
              className="block h-auto w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}