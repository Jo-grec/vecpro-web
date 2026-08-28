const benefits = [
  {
    number: "01",
    title: "AI-Powered Verification",
    description:
      "Automatically screens and analyzes submitted mosquito-breeding site images to help improve the reliability of community reports.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Risk Forecasting",
    description:
      "Uses verified detections and environmental trends to provide short-term dengue risk forecasts for earlier intervention.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Community-Driven",
    description:
      "Empowers communities to contribute geotagged reports that support continuous mosquito surveillance and public health action.",
    icon: "◎",
  },
];

const audiences = [
  "Communities",
  "Health Officials",
  "Local Government",
  "Researchers",
];

export default function About() {
  return (
    <section id="about" className="bg-white">
      {/* What is AEDISYS? */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              About AEDISYS
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Smarter Surveillance.
              <span className="block text-emerald-800">
                Safer Communities.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              AEDISYS is an AI-powered mosquito surveillance and dengue risk
              forecasting system designed to support community reporting,
              automated image verification, and data-driven public health
              intervention in Iloilo City.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-500">
              By combining community-submitted reports with artificial
              intelligence, geospatial analysis, and environmental data,
              AEDISYS helps transform local observations into actionable
              information for dengue prevention.
            </p>
          </div>
        </div>

        {/* Core Benefits */}
        <div className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">
              Why AEDISYS?
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Intelligent tools for earlier action
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="group rounded-2xl border border-slate-200 bg-[#f7faf8] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-800">
                    {benefit.icon}
                  </div>

                  <span className="text-sm font-bold text-emerald-700/50">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-[#edf7f0]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Our Mission
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Turning community participation into smarter dengue prevention.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            AEDISYS aims to support earlier detection, risk awareness, and
            data-driven intervention by connecting community observations
            with intelligent surveillance and forecasting tools.
          </p>
        </div>
      </div>

      {/* Who It's For */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Who It's For
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Built for everyone involved in dengue prevention.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {audiences.map((audience, index) => (
              <div
                key={audience}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="text-xs font-bold text-emerald-700">
                  0{index + 1}
                </span>

                <h3 className="mt-3 font-semibold text-slate-900">
                  {audience}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}