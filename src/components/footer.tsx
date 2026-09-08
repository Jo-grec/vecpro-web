import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "FAQs", href: "#faqs" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#102A35] text-white"
    >
      {/* ========================================================= */}
      {/* DECORATIVE BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[45px] border-[#008C95]/10" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border-[55px] border-[#159BD3]/10" />

      <div className="pointer-events-none absolute right-[30%] top-16 h-24 w-24 rounded-full bg-[#008C95]/10 blur-3xl" />


      {/* ========================================================= */}
      {/* MAIN FOOTER */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="grid grid-cols-2 gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">


          {/* ===================================================== */}
          {/* BRANDING */}
          {/* ===================================================== */}

          <div className="col-span-2 lg:col-span-1">

            <a
              href="#home"
              className="flex items-center gap-3 transition-colors hover:text-[#EAF8FA]"
            >
              <img
                src="/logo/vecpro.png"
                alt="VECPRO logo"
                className="h-12 w-12 object-contain"
              />

              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-[0.12em] text-white">
                  VECPRO
                </span>

                <span className="mt-2 text-[10px] font-medium tracking-wide text-[#159BD3]">
                  SMARTER SURVEILLANCE. SAFER COMMUNITIES.
                </span>
              </div>
            </a>

            <p className="mt-4 max-w-xs text-xs leading-5 text-white/55">
              An integrated mosquito surveillance and dengue risk forecasting
              system supporting data-driven prevention in Iloilo City.
            </p>

            {/* Accent */}
            <div className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-[#008C95] to-[#159BD3]" />

          </div>


          {/* ===================================================== */}
          {/* QUICK LINKS */}
          {/* ===================================================== */}

          <div>

            <h3 className="text-xs font-semibold text-white sm:text-sm">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2">

              {quickLinks.map((link) => (

                <li key={link.label}>

                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-xs text-white/55 transition-colors hover:text-[#EAF8FA] sm:text-sm"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={11}
                      className="hidden opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:block"
                    />

                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* ===================================================== */}
          {/* OUR MEMBERS */}
          {/* ===================================================== */}

          <div>

            <h3 className="text-xs font-semibold text-white sm:text-sm">
              Our Members
            </h3>

            <ul className="mt-4 space-y-2 text-xs text-white/55 sm:text-sm">

              <li>
                Joeross G. Palabrica
              </li>

              <li>
                Axel John E. Nuqui
              </li>

              <li>
                Joelmar D. Grecia
              </li>

              <li>
                Jethro A. Rendon
              </li>

            </ul>

            <p className="mt-4 text-[10px] leading-4 text-white/40 sm:text-xs">
              BSCS 4-B
              <br />
              Bachelor of Science in Computer Science
            </p>

          </div>


          {/* ===================================================== */}
          {/* CONTACT */}
          {/* ===================================================== */}

          <div className="col-span-2 lg:col-span-1">

            <h3 className="text-xs font-semibold text-white sm:text-sm">
              Contact Us
            </h3>


            <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">


              {/* Location */}
              <div className="col-span-2 flex gap-2.5 text-xs text-white/55 lg:col-span-1 sm:text-sm">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#008C95]/15">

                  <MapPin
                    size={15}
                    className="text-[#159BD3]"
                  />

                </div>

                <span className="leading-5">
                  West Visayas State University
                  <br />
                  Luna St., La Paz, Iloilo City
                </span>

              </div>


              {/* Email */}
              <div className="flex min-w-0 items-center gap-2.5 text-xs text-white/55 lg:text-sm">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#008C95]/15">

                  <Mail
                    size={15}
                    className="text-[#159BD3]"
                  />

                </div>

                <span className="truncate">
                  contact@vecpro.ph
                </span>

              </div>


              {/* Phone */}
              <div className="flex items-center gap-2.5 text-xs text-white/55 lg:text-sm">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#008C95]/15">

                  <Phone
                    size={15}
                    className="text-[#159BD3]"
                  />

                </div>

                <span>
                  (033) 320-0870
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ========================================================= */}
        {/* BOTTOM */}
        {/* ========================================================= */}

        <div className="mt-9 border-t border-white/10 pt-5">

          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

            <p className="max-w-2xl text-[10px] leading-4 text-white/35 sm:text-xs">
              © 2026 VECPRO Project. West Visayas State University –
              College of Information and Communications Technology.
            </p>

            <a
              href="#home"
              className="text-[10px] font-medium text-white/45 transition-colors hover:text-[#EAF8FA] sm:text-xs"
            >
              Back to top ↑
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}