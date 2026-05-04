"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Backgound, TestHero } from "../../public/assets";
import AnimationText from "../../animation/text";
import Button from "../button";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();
  return (
    <div className="flex w-full">
      <div className="max-w-7xl flex flex-col md:flex-row mx-auto">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="text-left p-6 md:p-8">
            {/* ASTOOL ALSHAULA - Red Text */}
            <div className="mb-4 gap-4 flex">
              <AnimationText
                text={t("hero.astool")}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-[32px] font-bold text-red-600 mb-2"
              />
              <AnimationText
                text={t("hero.alshaula")}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-[32px] font-bold text-red-600"
              />
            </div>
            
            {/* TRANSPORTATION SERVICES - Green Text */}
            <div className="mb-4">
              <AnimationText
                text={t("hero.transportation")}
                delay={120}
                animateBy="words"
                direction="top"
                className="text-[22px] font-bold text-[#327D59] mb-2"
              />
              <AnimationText
                text={t("hero.services")}
                delay={120}
                animateBy="words"
                direction="top"
                className="text-[20px] font-bold text-[#327D59]"
              />
            </div>

            {/* Logistic services round the clock - Italic Green */}
            <AnimationText
              text={t("hero.tagline")}
              delay={80}
              animateBy="words"
              direction="top"
              className="text-base md:text-lg italic text-[#327D59] mb-4"
            />

            {/* EFFICIENT MOBILITY - Bold Green */}
            <AnimationText
              text={t("hero.headline")}
              delay={100}
              animateBy="words"
              direction="top"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#327D59] mb-4"
            />

            {/* Paragraph Text - Green */}
            <AnimationText
              text={t("hero.paragraph")}
              delay={60}
              animateBy="words"
              direction="top"
              className="text-base md:text-lg text-[#327D59]"
            />
          </div>

          <div className="w-full gap-5 flex">
            <Button className="bg-[#327D59] text-white">{t("hero.getQuote")}</Button>
            <Button
              as="a"
              href="https://astool-logistics.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" border border-[#327D59]"
            >
              {t("hero.contactUs")}
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full z-[-1] pt-5 md:w-1/2 flex items-center justify-center mt-6 md:mt-0 relative">
          {!imageLoaded && (
            <div className="absolute inset-0 m-0 rounded-lg bg-gray-200 animate-pulse" />
          )}
          <Image
            src={TestHero}
            alt="Background"
            onLoad={() => setImageLoaded(true)}
            className={`object-cover w-full h-auto max-h-[400px] md:max-h-full transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
