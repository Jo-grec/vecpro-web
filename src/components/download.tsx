import { Download, Smartphone } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="bg-white px-6 py-10 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950">
        
        {/* Decorative leaves */}
        <div className="pointer-events-none absolute -left-8 bottom-0 text-8xl opacity-20">
          🌿
        </div>

        <div className="pointer-events-none absolute right-6 top-4 text-6xl opacity-10">
          🌿
        </div>

        <div className="relative grid min-h-[220px] items-center lg:grid-cols-[0.8fr_1.2fr_1fr]">

          {/* Phone */}
          <div className="hidden self-end pl-10 lg:block">
            <div className="relative mx-auto h-[270px] w-[135px] rotate-[-7deg] translate-y-10 rounded-[24px] border-[6px] border-slate-900 bg-white shadow-2xl">
              
              {/* Notch */}
              <div className="absolute left-1/2 top-0 h-4 w-14 -translate-x-1/2 rounded-b-xl bg-slate-900" />

              {/* Placeholder screen */}
              <div className="flex h-full items-center justify-center rounded-[18px] bg-white">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                    <Smartphone
                      size={22}
                      className="text-emerald-800"
                    />
                  </div>

                  <p className="mt-3 text-sm font-bold text-emerald-900">
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Be Part of the Solution
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-emerald-100/80 sm:text-base">
              Download the AEDEX mobile app and help us build a
              dengue-free Iloilo City.
            </p>
          </div>

          {/* Download */}
          <div className="flex flex-col items-center px-8 pb-12 lg:px-10 lg:pb-0">
            <a
              href="#"
              className="flex w-full max-w-[260px] items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-emerald-900 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-xl"
            >
              <Download size={19} />
              Download the App
            </a>

            <p className="mt-3 text-xs font-medium text-emerald-100/70">
              Available for Android
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}