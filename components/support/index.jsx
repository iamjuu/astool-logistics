"use client";
import React from "react";
import { Logistics1, Logistics6, Logistics8, NewImage1, NewImage2, NewImage3 } from "../../public/assets";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const index = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen  py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title - Centered */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-down"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div
            className="flex flex-col justify-center space-y-6 lg:space-y-8"
            data-aos="fade-down"
          >
            <>
              <h1 className="text-[24px]">
                {t("support.title")}
              </h1>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                {t("support.paragraph")}
              </p>
            </>
          </div>

          {/* Right Content - Images Grid */}
          <div className="relative" data-aos="fade-up">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]">
              {/* Large Exterior Design Image - Bottom Left (spans 2 rows) */}
              <div className="row-span-2 col-span-1">
                <div className="relative h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                  <Image
                    src={NewImage1}
                    alt="Modern exterior design with contemporary architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Bedroom Image - Top Right */}
              <div className="col-span-1">
                <div className="relative h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                  <Image
                    src={NewImage2}
                    alt="Elegant bedroom interior design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Living Room Interior Design Image - Bottom Right */}
              <div className="col-span-1">
                <div className="relative h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                  <Image
                    src={NewImage3}
                    alt="Modern living room interior design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
