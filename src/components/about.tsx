const benefits = [
  {
    number: "01",
    title: "AI-Powered Verification",
    description:
      "AI analyzes submitted images to verify mosquito breeding sites.",
    icon: "✦",
    image: "/images/dashboard.png",
  },
  {
    number: "02",
    title: "Risk Forecasting",
    description:
      "Forecasts dengue risk to support earlier intervention.",
    icon: "↗",
    image: "/images/forecasting.png",
  },
  {
    number: "03",
    title: "Community-Driven",
    description:
      "Turns community reports into actionable surveillance data.",
    icon: "◎",
    image: "/images/community.png",
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

      {/* What is VECPRO? */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Heading */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#008C95]">
              About VECPRO
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#102A35] sm:text-5xl">
              Smarter Surveillance.
              <span className="block bg-gradient-to-r from-[#006B78] to-[#159BD3] bg-clip-text text-transparent">
                Safer Communities.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div>
            <p className="text-lg leading-8 text-slate-600">
              VECPRO is an AI-powered mosquito surveillance and dengue risk
              forecasting system designed to support community reporting,
              automated image verification, and data-driven public health
              intervention in Iloilo City.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-500">
              It combines community reports with artificial intelligence,
              geospatial analysis, and environmental data to turn local
              observations into actionable information for dengue prevention.
            </p>
          </div>

        </div>


        {/* Why VECPRO */}
        <div className="mt-20">

          {/* Section Heading */}
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#008C95]">
              Why VECPRO?
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#102A35] sm:text-3xl">
              Intelligent tools for earlier action
            </h3>
          </div>


          {/* Connected Benefits */}
          <div className="relative grid gap-5 md:grid-cols-3">

            {/* Connecting Line */}
            <div className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-[#006B78]/20 via-[#159BD3]/50 to-[#006B78]/20 md:block" />

            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group relative min-h-[240px] overflow-hidden rounded-3xl border border-[#D8EEF1] bg-white text-[#102A35] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#8DD5DD] hover:shadow-xl"
              >
                <img
                  src={benefit.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#006B78]/95 via-[#006B78]/70 via-60% to-[#006B78]/5 to-85%" />

                <div className="relative z-10 flex min-h-[240px] w-[68%] flex-col justify-between p-5 text-white">
                  <div>
                    <div className="flex items-center justify-start">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-lg text-white shadow-md backdrop-blur-sm">
                        {benefit.icon}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-bold leading-tight text-white">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-sky-50/90">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 h-1 w-10 rounded-full bg-white/90 transition-all duration-300 group-hover:w-16" />
                </div>
              </article>
            ))}

          </div>
        </div>

      </div>


      {/* Mission */}
      <div className="bg-[#EAF8FA]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#008C95]">
            Our Mission
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-[#102A35] sm:text-4xl">
            Turning community participation into smarter dengue prevention.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            VECPRO aims to support earlier detection, risk awareness, and
            data-driven intervention by connecting community observations
            with intelligent surveillance and forecasting tools.
          </p>

        </div>
      </div>


      {/* Who It's For */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Heading */}
          <div className="text-center lg:text-left">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#008C95]">
              Who It's For
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102A35] sm:text-4xl">
              Built for everyone involved in dengue prevention.
            </h2>

          </div>


          {/* Audience Cards */}
          <div className="grid grid-cols-2 gap-4">

            {audiences.map((audience, index) => (
              <div
                key={audience}
                className="group relative overflow-hidden rounded-2xl border border-[#D8EEF1] bg-[#F6FBFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8DD5DD] hover:bg-[#EAF8FA] hover:shadow-lg"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#006B78] to-[#159BD3] text-xl text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                  {index === 0 && "♧"}
                  {index === 1 && "✚"}
                  {index === 2 && "⌂"}
                  {index === 3 && "⌕"}
                </div>


                {/* Number */}
                <span className="absolute right-5 top-5 text-sm font-bold text-[#008C95]/40">
                  0{index + 1}
                </span>


                {/* Audience */}
                <h3 className="mt-5 font-bold text-[#102A35]">
                  {audience}
                </h3>


                {/* Accent */}
                <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#006B78] to-[#159BD3] transition-all duration-300 group-hover:w-16" />

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}