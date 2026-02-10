"use client";
import React, { useEffect } from "react";
import { Clock, Compass } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 500));
    // Dispatch a global toast event the footer listens to
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("app:toast", {
          detail: {
            type: "success",
            title: "Success!",
            message: "We will connect you.",
          },
        })
      );
    }
    // Optionally reset form
    e.currentTarget.reset();
  };

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left content */}
        <div data-aos="fade-up" data-aos-delay={0}>
          <div className="mb-6">
            <h2 className="text-xl font-[400] text-[#327D59]">{t("contact.shareDetails")}</h2>
          </div>
          <p className="text-gray-700 text-[14px]  leading-7 mb-8">
            {t("contact.intro1")}
          </p>
          <p className="text-gray-700 leading-7 mb-8">
            {t("contact.intro2")}
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="h-12 w-12 rounded-xl bg-[#E53935] flex items-center justify-center shrink-0">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <p className="font-semibold mb-1">{t("contact.timeResponse")}</p>
                <p className="text-gray-700 text-sm leading-6">
                  {t("contact.timeResponseDesc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="h-12 w-12 rounded-xl bg-[#E53935] flex items-center justify-center shrink-0">
                <Compass className="text-white" size={24} />
              </div>
              <div>
                <p className="font-semibold mb-1">{t("contact.guidedSteps")}</p>
                <p className="text-gray-700 text-sm leading-6">
                  {t("contact.guidedStepsDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Form */}
        <div className="w-full" data-aos="fade-up" data-aos-delay={150}>
          <div className="flex justify-end mb-6" data-aos="fade-up" data-aos-delay={250}>
            <button className="inline-flex items-center gap-2 bg-[#327D59] text-white px-5 py-3 rounded-full shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              {t("contact.getInTouch")}
            </button>
          </div>

          <div className="mb-6" data-aos="fade-up" data-aos-delay={300}>
            <p className="text-gray-700 leading-7">
              {t("contact.conversationTitle")}
            </p>
            <p className="text-gray-700 leading-7">
              {t("contact.conversationDesc")}
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div data-aos="fade-up" data-aos-delay={350}>
              <label className="block text-sm mb-2">{t("contact.name")}</label>
              <input
                type="text"
                placeholder={t("contact.namePlaceholder")}
                className="w-full border border-gray-200 rounded-md h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#327D59]"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay={400}>
              <label className="block text-sm mb-2">{t("contact.email")}</label>
              <input
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                className="w-full border border-gray-200 rounded-md h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#327D59]"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay={450}>
              <label className="block text-sm mb-2">{t("contact.message")}</label>
              <textarea
                placeholder={t("contact.messagePlaceholder")}
                rows={6}
                className="w-full border border-gray-200 rounded-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#327D59]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#327D59] text-white h-12 rounded-md"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Index;


