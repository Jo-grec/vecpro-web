import Link from "next/link";
import { appDownload } from "@/lib/download";
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
  appDownload.android,
  "Internet connection",
  "Camera access",
  "Location services",
];


/* ========================================================= */
/* PHONE PREVIEW COMPONENT */
/* ========================================================= */

function PhonePreview() {
  return (
    <div className="relative flex justify-center">

      {/* Glow */}
      <div className="pointer-events-none absolute h-[240px] w-[180px] rounded-full bg-[#159BD3]/15 blur-3xl sm:h-[320px] sm:w-[230px]" />


      {/* PHONE */}
      <div
        className="
          relative
          h-[340px] w-[170px]
          rotate-[-4deg]
          rounded-[30px]
          border-[6px]
          border-[#102A35]
          bg-white
          shadow-2xl
          sm:h-[430px] sm:w-[215px]
          sm:rounded-[34px]
          sm:border-[7px]
        "
      >

        {/* Notch */}
        <div
          className="
            absolute left-1/2 top-0 z-10
            h-4 w-16
            -translate-x-1/2
            rounded-b-2xl
            bg-[#102A35]
            sm:h-5 sm:w-20
          "
        />


        {/* Screen */}
        <div
          className="
            flex h-full flex-col
            overflow-hidden
            rounded-[24px]
            bg-[#F6FBFC]
            sm:rounded-[27px]
          "
        >

          <img
            src="/images/download.png"
            alt="Download app preview"
            className="h-full w-full object-cover"
          />

          {/* ================================================= */}
          {/* APP HEADER */}
          {/* ================================================= */}

          <div
            className="
              bg-gradient-to-br from-[#006B78] to-[#159BD3]
              px-4 pb-5 pt-8
              text-white
              sm:px-5 sm:pb-6 sm:pt-10
            "
          >

            <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-[8px]">
              VECPRO
            </p>

            <h3 className="mt-1 text-lg font-bold sm:text-xl">
              AEDEX
            </h3>

            <p className="mt-1 text-[8px] text-white/70 sm:text-[9px]">
              Community Surveillance
            </p>

          </div>


          {/* ================================================= */}
          {/* APP CONTENT */}
          {/* ================================================= */}

          <div className="flex-1 p-2.5 sm:p-3.5">

            {/* Report Card */}

            <div
              className="
                rounded-xl
                border border-[#D8EEF1]
                bg-white
                p-2.5
                shadow-sm
                sm:rounded-2xl sm:p-3
              "
            >

              <div className="flex items-center gap-2 sm:gap-2.5">

                <div
                  className="
                    flex h-7 w-7
                    items-center justify-center
                    rounded-lg
                    bg-[#EAF8FA]
                    text-[#008C95]
                    sm:h-8 sm:w-8
                  "
                >
                  <Camera
                    size={13}
                    className="sm:h-[15px] sm:w-[15px]"
                  />
                </div>

                <div>

                  <p className="text-[8px] font-bold text-[#102A35] sm:text-[9px]">
                    Report a Site
                  </p>

                  <p className="mt-0.5 text-[6px] text-slate-400 sm:text-[7px]">
                    Capture a potential breeding site
                  </p>

                </div>

              </div>

            </div>


            {/* Surveillance Card */}

            <div
              className="
                mt-2
                rounded-xl
                bg-gradient-to-br from-[#006B78] to-[#159BD3]
                p-2.5
                text-white
                sm:mt-2.5 sm:rounded-2xl sm:p-3
              "
            >

              <p className="text-[6px] font-medium uppercase tracking-wider text-white/60 sm:text-[7px]">
                SURVEILLANCE
              </p>

              <p className="mt-1 text-xs font-bold sm:text-sm">
                Help protect your community
              </p>

              <div className="mt-2.5 h-1 rounded-full bg-white/20 sm:mt-3">
                <div className="h-1 w-2/3 rounded-full bg-white/80" />
              </div>

            </div>


            {/* Bottom Cards */}

            <div
              className="
                mt-2
                grid grid-cols-2 gap-1.5
                sm:mt-2.5 sm:gap-2
              "
            >

              <div className="rounded-lg bg-white p-2 shadow-sm sm:rounded-xl sm:p-2.5">

                <MapPin
                  size={11}
                  className="text-[#008C95]"
                />

                <p className="mt-1 text-[6px] font-semibold text-[#102A35] sm:text-[7px]">
                  Location
                </p>

              </div>


              <div className="rounded-lg bg-white p-2 shadow-sm sm:rounded-xl sm:p-2.5">

                <ClipboardCheck
                  size={11}
                  className="text-[#159BD3]"
                />

                <p className="mt-1 text-[6px] font-semibold text-[#102A35] sm:text-[7px]">
                  Reports
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* FLOATING BADGE */}
      {/* ================================================= */}

      <div
        className="
          absolute
          bottom-[-8px]
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-1.5
          whitespace-nowrap
          rounded-full
          border border-[#D8EEF1]
          bg-white
          px-2.5
          py-1.5
          text-[8px]
          font-semibold
          text-[#006B78]
          shadow-lg
          sm:bottom-0
          sm:gap-2
          sm:px-3
          sm:py-2
          sm:text-[10px]
        "
      >

        <ShieldCheck
          size={11}
          className="sm:h-[13px] sm:w-[13px]"
        />

        VECPRO Connected

      </div>

    </div>
  );
}


export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#F6FBFC] text-[#102A35]">

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <header className="border-b border-[#D8EEF1] bg-white/95 backdrop-blur-md">

        <div
          className="
            mx-auto
            flex
            h-[76px]
            max-w-7xl
            items-center
            justify-between
            gap-6
            px-5
            sm:px-6
            lg:px-8
          "
        >

          {/* VECPRO BRAND */}

          <Link
            href="/"
            className="group flex min-w-0 shrink-0 items-center gap-2"
          >

            <img
              src="/logo/vecpro.png"
              alt="VECPRO logo"
              className="h-9 w-9 shrink-0 object-contain sm:h-12 sm:w-12"
            />

            <div className="flex min-w-0 flex-col leading-none">

              <span
                className="
                  text-[15px]
                  font-bold
                  tracking-[0.16em]
                  text-[#102A35]
                  transition-colors
                  group-hover:text-[#006B78]
                  sm:text-[22px]
                "
              >
                VECPRO
              </span>

            </div>

          </Link>


          {/* BACK BUTTON */}

          <Link
            href="/"
            className="
              flex
              shrink-0
              items-center
              gap-1.5
              whitespace-nowrap
              text-xs
              font-semibold
              text-[#006B78]
              transition-colors
              hover:text-[#159BD3]
              sm:gap-2
              sm:text-sm
            "
          >

            <ArrowLeft size={15} />

            <span>
              Back to VECPRO
            </span>

          </Link>

        </div>

      </header>


      {/* ========================================================= */}
      {/* MAIN DOWNLOAD SECTION */}
      {/* ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          px-4
          py-6
          sm:px-6 sm:py-10
          lg:px-8 lg:py-14
        "
      >

        {/* Decorative background */}

        <div
          className="
            pointer-events-none
            absolute
            -left-32
            -top-32
            h-96
            w-96
            rounded-full
            bg-[#EAF8FA]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#DDF4FA]
          "
        />


        {/* ======================================================= */}
        {/* MAIN CARD */}
        {/* ======================================================= */}

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[2rem]
            border
            border-[#CBE8ED]
            bg-gradient-to-br
            from-[#EAF8FA]
            via-white
            to-[#DDF4FA]
            shadow-xl
          "
        >

          {/* Decorative shapes */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-[#159BD3]/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              left-20
              h-72
              w-72
              rounded-full
              bg-[#008C95]/10
              blur-3xl
            "
          />


          {/* ===================================================== */}
          {/* CONTENT */}
          {/* ===================================================== */}

          <div
            className="
              relative
              grid
              gap-8
              p-6
              sm:p-10
              lg:grid-cols-[0.75fr_1.25fr]
              lg:items-center
              lg:gap-12
              lg:p-14
            "
          >


            {/* =================================================== */}
            {/* DESKTOP PHONE */}
            {/* =================================================== */}

            <div
              className="
                hidden
                lg:flex
                lg:translate-x-20
                lg:justify-start
              "
            >
              <PhonePreview />
            </div>


            {/* =================================================== */}
            {/* INFORMATION */}
            {/* =================================================== */}

            <div className="order-first lg:order-last">


              {/* ================================================= */}
              {/* LABEL */}
              {/* ================================================= */}

              <p
                className="
                  text-center
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#008C95]
                  sm:text-sm
                  lg:text-left
                "
              >
                AEDEX Mobile Application
              </p>


              {/* ================================================= */}
              {/* MAIN HEADING */}
              {/* ================================================= */}

              <h1
                className="
                  mt-3
                  text-center
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-[#102A35]
                  sm:text-4xl
                  lg:text-left
                  lg:text-5xl
                "
              >

                Download AEDEX.

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-[#006B78]
                    to-[#159BD3]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Be part of the solution.
                </span>

              </h1>


              {/* ================================================= */}
              {/* MOBILE PHONE */}
              {/* ================================================= */}

              <div className="mt-7 lg:hidden">

                <PhonePreview />

              </div>


              {/* ================================================= */}
              {/* DESCRIPTION */}
              {/* ================================================= */}

              <p
                className="
                  mx-auto
                  mt-7
                  max-w-xl
                  text-center
                  text-sm
                  leading-6
                  text-slate-600
                  sm:text-base
                  lg:mx-0
                  lg:mt-4
                  lg:text-left
                "
              >
                Report suspected mosquito breeding sites, contribute
                geotagged observations, and help strengthen community-based
                dengue surveillance through AEDEX. Download the Android test build
                below to try the app.
              </p>


              {/* ================================================= */}
              {/* VERSION INFORMATION */}
              {/* ================================================= */}

              <div
                className="
                  mx-auto
                  mt-5
                  grid
                  max-w-lg
                  grid-cols-3
                  gap-2
                  lg:mx-0
                "
              >

                <div className="rounded-xl border border-[#D8EEF1] bg-white/80 p-2.5 sm:p-3">

                  <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-400 sm:text-[9px]">
                    Version
                  </p>

                  <p className="mt-1 text-xs font-bold text-[#102A35] sm:text-sm">
                    {appDownload.version}
                  </p>

                </div>


                <div className="rounded-xl border border-[#D8EEF1] bg-white/80 p-2.5 sm:p-3">

                  <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-400 sm:text-[9px]">
                    Platform
                  </p>

                  <p className="mt-1 text-xs font-bold text-[#102A35] sm:text-sm">
                    Android
                  </p>

                </div>


                <div className="rounded-xl border border-[#D8EEF1] bg-white/80 p-2.5 sm:p-3">

                  <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-400 sm:text-[9px]">
                    File Size
                  </p>

                  <p className="mt-1 text-xs font-bold text-[#102A35] sm:text-sm">
                    {appDownload.size}
                  </p>

                </div>

              </div>


              {/* ================================================= */}
              {/* DOWNLOAD BUTTON */}
              {/* ================================================= */}

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  items-center
                  gap-3
                  sm:flex-row
                  lg:justify-start
                "
              >

                <a
                  href={appDownload.href}
                  download={appDownload.filename}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-[#008C95]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-200
                    hover:-translate-y-1
                    hover:bg-[#006B78]
                    hover:shadow-xl
                  "
                >

                  <Download size={18} />

                  Download Test APK

                </a>


                <div className="flex items-center gap-2 text-xs text-slate-500">

                  <Smartphone
                    size={15}
                    className="text-[#008C95]"
                  />

                  {appDownload.android}

                </div>

              </div>


              {/* ================================================= */}
              {/* FEATURES */}
              {/* ================================================= */}

              <div className="mt-6 rounded-xl border border-[#D8EEF1] bg-white/80 p-4 text-sm leading-6 text-slate-600">
                <h2 className="font-bold text-[#006B78]">Install the Android test build</h2>
                <p className="mt-2 break-all">File: {appDownload.filename}</p>
                <ol className="mt-3 list-decimal space-y-2 pl-5">
                  <li>Download the APK on your Android phone, or transfer it from your computer.</li>
                  <li>Open the downloaded file. If Android asks, allow your browser or file manager to install apps from this source.</li>
                  <li>Tap Install, then open the app. This test build appears as &quot;moskito&quot; on your device.</li>
                  <li>Allow camera and location access when using report features.</li>
                </ol>
                <p className="mt-3">This is a test release. Features may change and you may encounter bugs. This APK is for Android devices; it cannot be installed on iPhone or iPad.</p>
              </div>

              <div className="mt-7">

                <p
                  className="
                    text-center
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#006B78]
                    lg:text-left
                  "
                >
                  Included Features
                </p>


                <div className="mt-3 grid grid-cols-2 gap-2">

                  {features.map((feature) => {

                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          border
                          border-[#D8EEF1]
                          bg-white/75
                          px-3
                          py-3
                        "
                      >

                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#EAF8FA]
                            text-[#008C95]
                          "
                        >

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


              {/* ================================================= */}
              {/* REQUIREMENTS */}
              {/* ================================================= */}

              <div className="mt-6">

                <p
                  className="
                    text-center
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#006B78]
                    lg:text-left
                  "
                >
                  System Requirements
                </p>


                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    justify-center
                    gap-x-5
                    gap-y-2
                    lg:justify-start
                  "
                >

                  {requirements.map((requirement) => (

                    <div
                      key={requirement}
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-slate-600
                      "
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


          {/* ===================================================== */}
          {/* BOTTOM STRIP */}
          {/* ===================================================== */}

          <div
            className="
              relative
              border-t
              border-[#CBE8ED]
              bg-white/60
              px-6
              py-4
              sm:px-10
              lg:px-14
            "
          >

            <div
              className="
                flex
                flex-col
                items-center
                justify-between
                gap-3
                text-center
                sm:flex-row
                sm:text-left
              "
            >

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


      {/* ========================================================= */}
      {/* MINIMAL FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-[#D8EEF1] bg-white">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-3
            px-6
            py-6
            text-center
            sm:flex-row
            sm:text-left
            lg:px-8
          "
        >

          <div className="flex items-center gap-2">

            <img
              src="/logo/vecpro.png"
              alt="VECPRO logo"
              className="h-12 w-12 object-contain"
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