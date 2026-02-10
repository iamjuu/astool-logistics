'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Truck, Clock, AlertCircle, Network, Warehouse } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const OurServices = () => {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  const services = [
    { icon: Truck, titleKey: 'ourservices.service1Title', descKey: 'ourservices.service1Desc' },
    { icon: Clock, titleKey: 'ourservices.service2Title', descKey: 'ourservices.service2Desc', secondaryIcon: AlertCircle },
    { icon: Network, titleKey: 'ourservices.service3Title', descKey: 'ourservices.service3Desc' },
    { icon: Warehouse, titleKey: 'ourservices.service4Title', descKey: 'ourservices.service4Desc' },
  ];

  return (
    <div className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Background with dark green and beige diagonal stripe */}
      <div className="absolute inset-0 bg-[#327D59]">
        {/* Light beige diagonal stripe at top left */}
        <div 
          className="absolute top-0 left-0 w-full h-32 lg:h-40"
          style={{
            background: 'linear-gradient(135deg, #F5E6D3 0%, #F5E6D3 30%, transparent 30%)',
          }}
        />
        {/* Blurred city/network grid background effect at top right */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-down">
          <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide">
            {t("ourservices.sectionTitle")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const SecondaryIcon = service.secondaryIcon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-5 bg-white/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-[#327D59]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white border-2 border-[#327D59] flex items-center justify-center shadow-md relative">
                  <IconComponent className="w-10 h-10 text-[#327D59]" />
                  {SecondaryIcon && (
                    <SecondaryIcon className="absolute -top-1 -right-1 w-5 h-5 text-red-500 bg-white rounded-full p-0.5" />
                  )}
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <h3 className="text-lg lg:text-xl font-bold text-[#327D59] uppercase tracking-wide">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

