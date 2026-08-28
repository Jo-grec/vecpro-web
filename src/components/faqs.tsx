"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section id="faqs" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            FAQs
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Learn more about VECPRO and how its connected applications support
            mosquito surveillance and dengue prevention.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-emerald-700 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-200 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}