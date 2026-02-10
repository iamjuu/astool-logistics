"use client"

import { useState, useEffect, useMemo } from "react";
import Button from "@/components/button";
import { Plus, Minus } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "@/context/LanguageContext";

const FAQ_KEYS = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
  { q: "faq.q6", a: "faq.a6" },
  { q: "faq.q7", a: "faq.a7" },
  { q: "faq.q8", a: "faq.a8" },
  { q: "faq.q9", a: "faq.a9" },
];

export default function QuickAnswer() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useLanguage();
  const faqs = useMemo(() => FAQ_KEYS.map(({ q, a }) => ({ q: t(q), a: t(a) })), [t]);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faqs" className="w-full text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column: Heading and CTA */}
          <div data-aos="fade-up" data-aos-delay={0}>
            <p className="text-sm text-gray-600 mb-2">{t("faq.heading")}</p>
            <h2 className="text-[28px] sm:text-[34px] leading-tight font-semibold text-[#327D59] mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-[48ch]">
              {t("faq.subtitle")}
            </p>

            <div className="mt-10">
              <p className="text-red-600 text-[12px] mb-3">{t("faq.didntFind")}</p>
              <Button as="a" href="#contact" className=" border border-[#327D59] text-black hover:bg-[#327D59]/90">
                {t("faq.contactUsNow")}
              </Button>
            </div>
          </div>

          {/* Right column: Accordions */}
          <div
            className="space-y-3 max-h-[400px] overflow-y-auto pr-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={150 + idx * 100}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left px-4 sm:px-5 py-4 hover:bg-gray-50"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-medium text-gray-900">
                      {item.q}
                    </span>
                    <span className="ml-4 flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-700">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 pt-0 text-sm text-gray-600 bg-white">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


