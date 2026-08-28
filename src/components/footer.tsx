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
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[45px] border-[#008C95]/10" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border-[55px] border-[#159BD3]/10" />

      <div className="pointer-events-none absolute right-[30%] top-16 h-24 w-24 rounded-full bg-[#008C95]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Branding */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-[0.12em] text-white transition-colors hover:text-[#EAF8FA]"
            >
              VECPRO
            </a>

            <p className="mt-2 text-xs font-medium tracking-wide text-[#159BD3]">
              SMARTER SURVEILLANCE. SAFER COMMUNITIES.
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
              An integrated mosquito surveillance and dengue risk forecasting
              system supporting data-driven prevention in Iloilo City.
            </p>

            {/* Accent */}
            <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#008C95] to-[#159BD3]" />
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/55 transition-colors hover:text-[#EAF8FA]"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/55">
              <li className="cursor-pointer transition-colors hover:text-[#EAF8FA]">
                AEDEX User Guide
              </li>

              <li className="cursor-pointer transition-colors hover:text-[#EAF8FA]">
                Research & Documentation
              </li>

              <li className="cursor-pointer transition-colors hover:text-[#EAF8FA]">
                Privacy Policy
              </li>

              <li className="cursor-pointer transition-colors hover:text-[#EAF8FA]">
                Terms of Service
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              {/* Location */}
              <div className="flex gap-3 text-sm text-white/55">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#008C95]/15">
                  <MapPin
                    size={16}
                    className="text-[#159BD3]"
                  />
                </div>

                <span className="leading-6">
                  West Visayas State University
                  <br />
                  Luna St., La Paz, Iloilo City
                </span>
              </div>


              {/* Email */}
              <div className="flex items-center gap-3 text-sm text-white/55">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#008C95]/15">
                  <Mail
                    size={16}
                    className="text-[#159BD3]"
                  />
                </div>

                <span>contact@vecpro.ph</span>
              </div>


              {/* Phone */}
              <div className="flex items-center gap-3 text-sm text-white/55">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#008C95]/15">
                  <Phone
                    size={16}
                    className="text-[#159BD3]"
                  />
                </div>

                <span>(033) 320-0870</span>
              </div>

            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6">

          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

            <p className="text-xs text-white/35">
              © 2026 VECPRO Project. West Visayas State University –
              College of Information and Communications Technology.
            </p>

            <a
              href="#home"
              className="text-xs font-medium text-white/45 transition-colors hover:text-[#EAF8FA]"
            >
              Back to top ↑
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}