"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is VECPRO?",
    answer:
      "VECPRO is an integrated mosquito surveillance and dengue risk forecasting system that connects community reporting, AI-powered verification, geospatial analysis, and risk forecasting.",
  },
  {
    question: "How does VECPRO use AI?",
    answer:
      "VECPRO uses AI to analyze submitted images and help identify potential mosquito breeding sites. Verified information can then contribute to risk assessment and forecasting.",
  },
  {
    question: "What is the difference between AEDEX and AEDIFY?",
    answer:
      "AEDEX is the mobile application used by community members to submit and track reports. AEDIFY is the web dashboard that provides authorized personnel with tools for monitoring, analyzing, and managing surveillance information.",
  },
  {
    question: "Who can use VECPRO?",
    answer:
      "VECPRO is designed to support communities, health officials, local government units, and researchers involved in mosquito surveillance, dengue prevention, and data-driven public health planning.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-[#F6FBFC]">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF8FA] text-[#008C95]">
            <HelpCircle size={24} strokeWidth={2} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#008C95]">
            FAQs
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#102A35] sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#52717C]">
            Learn more about VECPRO and how its connected applications support
            mosquito surveillance and dengue prevention.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-[#008C95] bg-white shadow-md shadow-[#008C95]/10"
                    : "border-[#D5E8EC] bg-white hover:border-[#159BD3]/50"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">

                    {/* Number */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-colors ${
                        isOpen
                          ? "bg-[#008C95] text-white"
                          : "bg-[#EAF8FA] text-[#008C95]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`font-semibold transition-colors ${
                        isOpen
                          ? "text-[#006B78]"
                          : "text-[#102A35]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-[#EAF8FA] text-[#008C95]"
                        : "bg-[#F6FBFC] text-[#52717C]"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#EAF8FA] px-6 pb-6 pt-5">
                      <p className="ml-[52px] text-sm leading-7 text-[#52717C]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="mx-auto mt-12 h-1 w-16 rounded-full bg-gradient-to-r from-[#008C95] to-[#159BD3]" />

      </div>
    </section>
  );
}