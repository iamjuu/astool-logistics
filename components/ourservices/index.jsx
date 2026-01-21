'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Truck, Clock, AlertCircle, Network, Warehouse } from 'lucide-react';

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  const services = [
    {
      icon: Truck,
      title: 'GROUND TRANSPORTATION',
      description: 'Our transportation services offer reliable and cost-effective delivery of your goods ensuring timely and efficient transport to any point.',
    },
    {
      icon: Clock,
      title: 'DEDICATED VEHICLE SERVICE',
      description: 'We provide a vehicle or fleet of vehicles that are exclusively allocated for a specific client\'s transportation needs, ensuring efficient and reliable delivery of goods all days of week 24/7',
      secondaryIcon: AlertCircle,
    },
    {
      icon: Network,
      title: 'SUPPLY CHAIN',
      description: 'Our supply chain management solutions offer end-to-end visibility and control over your logistics operations, optimizing your supply chain with advanced technology and experienced professionals.',
    },
    {
      icon: Warehouse,
      title: 'WAREHOUSING',
      description: 'Our warehousing solutions provide secure and flexible storage options for your goods, with inventory management for easy access and tracking',
    },
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
            OUR SERVICE
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
                {/* Icon in white circular background with green border */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white border-2 border-[#327D59] flex items-center justify-center shadow-md relative">
                  <IconComponent className="w-10 h-10 text-[#327D59]" />
                  {SecondaryIcon && (
                    <SecondaryIcon className="absolute -top-1 -right-1 w-5 h-5 text-red-500 bg-white rounded-full p-0.5" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-3">
                  <h3 className="text-lg lg:text-xl font-bold text-[#327D59] uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    {service.description}
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

