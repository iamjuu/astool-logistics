"use client"

import { useState, useEffect } from "react";
import Button from "@/components/button";
import { Plus, Minus } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    q: "What types of logistics services do you provide?",
    a: "We offer comprehensive logistics solutions including freight forwarding, warehousing, distribution, supply chain management, and last-mile delivery services across the UAE and internationally.",
  },
  {
    q: "Do you handle both domestic and international shipments?",
    a: "Yes. We manage end-to-end logistics for domestic UAE deliveries as well as international imports, exports, and cross-border shipments with customs clearance support.",
  },
  {
    q: "What is your delivery time frame for standard shipments?",
    a: "Standard delivery times vary by destination: same-day for local UAE, 1-2 days for GCC, and 3-7 days for international shipments. Express options are available for urgent deliveries.",
  },
  {
    q: "Do you provide real-time tracking for shipments?",
    a: "Yes. All shipments include real-time GPS tracking with SMS and email notifications at key milestones, accessible through our online portal or mobile app.",
  },
  {
    q: "Can you handle temperature-controlled and fragile goods?",
    a: "Absolutely. We have specialized cold chain logistics for perishables, pharmaceuticals, and temperature-sensitive items, plus secure handling for fragile and high-value cargo.",
  },
  {
    q: "What areas do you cover for logistics services?",
    a: "We provide logistics coverage across all UAE emirates (Dubai, Abu Dhabi, Sharjah, etc.) and offer international shipping to major global destinations with partner networks.",
  },
  {
    q: "Do you offer warehousing and inventory management services?",
    a: "Yes. We provide secure warehousing facilities with inventory management, pick-and-pack services, and fulfillment solutions tailored to your business needs.",
  },
  {
    q: "How do you ensure cargo safety and security?",
    a: "All shipments are fully insured, handled by certified professionals, and tracked throughout transit. We comply with international safety standards and security protocols.",
  },
  {
    q: "Can your logistics services integrate with our existing systems?",
    a: "Yes. We offer API integration and EDI connectivity to seamlessly connect with your ERP, e-commerce platforms, and inventory management systems.",
  },
];

export default function QuickAnswer() {
  const [openIndex, setOpenIndex] = useState(null);
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
            <p className="text-sm text-gray-600 mb-2">Frequently Asked Questions</p>
            <h2 className="text-[28px] sm:text-[34px] leading-tight font-semibold text-[#327D59] mb-4">
              Quick Answers. Clear Solutions.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-[48ch]">
              Looking for electrical, security, or automation solutions? Tell us about your
              project, and our team will respond quickly with the next steps.
            </p>

            <div className="mt-10">
              <p className="text-red-600 text-[12px] mb-3">Didn’t find your question?</p>
              <Button as="a" href="#contact" className=" border border-[#327D59] text-black hover:bg-[#327D59]/90">
                Contact Us Now
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


