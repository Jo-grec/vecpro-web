import { Download, Smartphone } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="bg-white px-6 py-10 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#006B78] via-[#008C95] to-[#159BD3]">

        {/* Decorative abstract shapes */}
        <div className="pointer-events-none absolute -left-16 bottom-[-70px] h-48 w-48 rounded-full border-[30px] border-white/10" />

        <div className="pointer-events-none absolute right-10 top-[-45px] h-32 w-32 rounded-full border-[20px] border-white/10" />

        <div className="pointer-events-none absolute right-[35%] top-8 h-20 w-20 rounded-full bg-white/5 blur-2xl" />

        <div className="relative grid min-h-[220px] items-center lg:grid-cols-[0.8fr_1.2fr_1fr]">

          {/* Phone */}
          <div className="hidden self-end pl-10 lg:block">
            <div className="relative mx-auto h-[270px] w-[135px] translate-y-10 rotate-[-7deg] rounded-[24px] border-[6px] border-[#102A35] bg-white shadow-2xl">

              {/* Notch */}
              <div className="absolute left-1/2 top-0 h-4 w-14 -translate-x-1/2 rounded-b-xl bg-[#102A35]" />

              {/* Placeholder screen */}
              <div className="flex h-full items-center justify-center rounded-[18px] bg-white">
                <div className="text-center">

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF8FA]">
                    <Smartphone
                      size={22}
                      className="text-[#008C95]"
                    />
                  </div>

                  <p className="mt-3 text-sm font-bold text-[#006B78]">
                    AEDEX
                  </p>

                  <p className="mt-1 text-[8px] text-slate-400">
                    App Preview
                  </p>

                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="px-8 py-12 text-center lg:px-4 lg:text-left">

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#EAF8FA]">
              Get Started
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Be Part of the Solution
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/75 sm:text-base">
              Download the AEDEX mobile app and help us build a
              dengue-free Iloilo City.
            </p>

          </div>

          {/* Download */}
          <div className="flex flex-col items-center px-8 pb-12 lg:px-10 lg:pb-0">

            <a
              href="#"
              className="flex w-full max-w-[260px] items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-[#006B78] shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-[#EAF8FA] hover:shadow-xl"
            >
              <Download size={19} />
              Download the App
            </a>

            <p className="mt-3 text-xs font-medium text-white/65">
              Available for Android
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}