import {
  Download,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Camera,
  MapPin,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    title: "Report Breeding Sites",
    icon: Camera,
  },
  {
    title: "Geotagged Reports",
    icon: MapPin,
  },
  {
    title: "Report Tracking",
    icon: ClipboardCheck,
  },
  {
    title: "AI-Assisted Verification",
    icon: ShieldCheck,
  },
];

const requirements = [
  "Android 8.0 or later",
  "Internet connection",
  "Camera access",
  "Location services",
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#F6FBFC] text-[#102A35]">

      {/* Header */}
      <header className="border-b border-[#D8EEF1] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">

          <a href="/" className="group flex items-center gap-2">
            <img
              src="/logo/vecpro.png"
              alt="VECPRO logo"
              className="h-13 w-13 object-contain"
            />

            <div className="flex flex-col leading-none">
              <span className="text-[22px] font-bold tracking-[0.18em] text-[#102A35] transition-colors group-hover:text-[#006B78]">
                VECPRO
              </span>

              <span className="mt-1 text-[8px] font-medium tracking-[0.08em] text-[#008C95]">
                SMARTER SURVEILLANCE. SAFER COMMUNITIES.
              </span>
            </div>
          </a>

          <a
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-[#006B78] transition-colors hover:text-[#159BD3]"
          >
            <ArrowLeft size={16} />
            Back to VECPRO
          </a>

        </div>
      </header>

      {/* Main Download Section */}
      <section className="relative overflow-hidden px-6 py-10 lg:px-8 lg:py-14">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#EAF8FA]" />
        <div className="pointer-events-none absolute -right-32 top-20 h-[450px] w-[450px] rounded-full bg-[#DDF4FA]" />

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#CBE8ED] bg-gradient-to-br from-[#EAF8FA] via-white to-[#DDF4FA] shadow-xl">

          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#159BD3]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-20 h-72 w-72 rounded-full bg-[#008C95]/10 blur-3xl" />

          <div className="relative grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 lg:p-14">

            {/* LEFT — PHONE */}
            <div className="relative flex justify-center lg:translate-x-20 lg:justify-start">

              {/* Glow */}
              <div className="absolute h-[360px] w-[260px] rounded-full bg-[#159BD3]/15 blur-3xl" />

              {/* Phone */}
              <div className="relative h-[470px] w-[235px] rotate-[-4deg] rounded-[36px] border-[8px] border-[#102A35] bg-white shadow-2xl">

                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-[#102A35]" />

                {/* Screen */}
                <div className="flex h-full flex-col overflow-hidden rounded-[28px] bg-[#F6FBFC]">

                  {/* App Header */}
                  <div className="bg-gradient-to-br from-[#006B78] to-[#159BD3] px-6 pb-7 pt-12 text-white">

                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/65">
                      VECPRO
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      AEDEX
                    </h3>

                    <p className="mt-1 text-[10px] text-white/70">
                      Community Surveillance
                    </p>

                  </div>

                  {/* App Content */}
                  <div className="flex-1 p-4">

                    <div className="rounded-2xl border border-[#D8EEF1] bg-white p-4 shadow-sm">

                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF8FA] text-[#008C95]">
                          <Camera size={18} />
                        </div>

                        <div>
                          <p className="text-[11px] font-bold text-[#102A35]">
                            Report a Site
                          </p>

                          <p className="mt-1 text-[8px] text-slate-400">
                            Capture a potential breeding site
                          </p>
                        </div>
                      </div>

                    </div>

                    <div className="mt-3 rounded-2xl bg-gradient-to-br from-[#006B78] to-[#159BD3] p-4 text-white">

                      <p className="text-[8px] font-medium uppercase tracking-wider text-white/60">
                        SURVEILLANCE
                      </p>

                      <p className="mt-2 text-base font-bold">
                        Help protect your community
                      </p>

                      <div className="mt-4 h-1.5 rounded-full bg-white/20">
                        <div className="h-1.5 w-2/3 rounded-full bg-white/80" />
                      </div>

                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">

                      <div className="rounded-xl bg-white p-3 shadow-sm">
                        <MapPin
                          size={15}
                          className="text-[#008C95]"
                        />

                        <p className="mt-2 text-[8px] font-semibold text-[#102A35]">
                          Location
                        </p>
                      </div>

                      <div className="rounded-xl bg-white p-3 shadow-sm">
                        <ClipboardCheck
                          size={15}
                          className="text-[#159BD3]"
                        />

                        <p className="mt-2 text-[8px] font-semibold text-[#102A35]">
                          Reports
                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-[#D8EEF1] bg-white px-4 py-2.5 text-xs font-semibold text-[#006B78] shadow-lg">
                <ShieldCheck size={15} />
                VECPRO Connected
              </div>

            </div>

            {/* RIGHT — INFORMATION */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#008C95]">
                AEDEX Mobile Application
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[#102A35] sm:text-5xl">
                Download AEDEX.
                <span className="block bg-gradient-to-r from-[#006B78] to-[#159BD3] bg-clip-text text-transparent">
                  Be part of the solution.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Report suspected mosquito breeding sites, contribute
                geotagged observations, and help strengthen community-based
                dengue surveillance through VECPRO.
              </p>

              {/* Version Information */}
              <div className="mt-6 grid max-w-lg grid-cols-3 gap-2.5">

                <div className="rounded-xl border border-[#D8EEF1] bg-white/80 p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                    Version
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#102A35]">
                    v1.0.0
                  </p>
                </div>

                <div className="rounded-xl border border-[#D8EEF1] bg-white/80 p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                    Platform
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#102A35]">
                    Android
                  </p>
                </div>

                <div className="rounded-xl border border-[#D8EEF1] bg-white/80 p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                    File Size
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#102A35]">
                    XX MB
                  </p>
                </div>

              </div>

              {/* Download Button */}
              <div className="mt-6 flex flex-wrap items-center gap-4">

                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#008C95] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-[#006B78] hover:shadow-xl"
                >
                  <Download size={18} />
                  Download APK
                </a>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Smartphone size={15} className="text-[#008C95]" />
                  Android 8.0+
                </div>

              </div>

              {/* Features */}
              <div className="mt-8">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#006B78]">
                  Included Features
                </p>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">

                  {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="flex items-center gap-3 rounded-xl border border-[#D8EEF1] bg-white/75 px-3 py-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF8FA] text-[#008C95]">
                          <Icon size={15} />
                        </div>

                        <span className="text-xs font-semibold text-[#102A35]">
                          {feature.title}
                        </span>
                      </div>
                    );
                  })}

                </div>
              </div>

              {/* Requirements */}
              <div className="mt-7">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#006B78]">
                  System Requirements
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">

                  {requirements.map((requirement) => (
                    <div
                      key={requirement}
                      className="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#008C95]"
                      />

                      {requirement}
                    </div>
                  ))}

                </div>

              </div>

            </div>
          </div>

          {/* Bottom strip */}
          <div className="relative border-t border-[#CBE8ED] bg-white/60 px-7 py-4 sm:px-10 lg:px-14">

            <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={16}
                  className="text-[#008C95]"
                />

                <p className="text-xs font-medium text-slate-500">
                  AEDEX is part of the connected VECPRO surveillance ecosystem.
                </p>
              </div>

              <p className="text-[10px] text-slate-400">
                Free to download
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-[#D8EEF1] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:flex-row sm:text-left lg:px-8">

          <div className="flex items-center gap-2">
            <img
              src="/logo/vecpro.png"
              alt="VECPRO logo"
              className="h-13 w-13 object-contain"
            />

            <div>
              <p className="text-sm font-bold tracking-[0.12em] text-[#102A35]">
                VECPRO
              </p>

              <p className="mt-1 text-[10px] text-slate-400">
                AEDEX Mobile Application
              </p>
            </div>
          </div>

          <p className="text-[10px] text-slate-400">
            © 2026 VECPRO Project. West Visayas State University.
          </p>

        </div>
      </footer>

    </main>
  );
}