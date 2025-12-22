import React from 'react'
import Image from 'next/image'
import { AboutImage, TestHero } from '../../public/assets'
import { Zap, ShieldCheck, Clock3, MapPin, Server } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Affordable Innovation',
    description: 'Advanced solutions designed to fit your budget.'
  },
  {
    icon: ShieldCheck,
    title: 'Certified Engineers',
    description: 'Qualified experts who get it right the first time.'
  },
  {
    icon: Clock3,
    title: 'Faster Service',
    description: 'Quick response times and efficient project delivery.'
  },
  {
    icon: MapPin,
    title: 'UAE‑Wide Presence',
    description: 'Local expertise wherever your project is located.'
  },
  {
    icon: Server,
    title: 'Trusted Reliability',
    description: 'Secure, future‑ready solutions delivered consistently.'
  }
]

const index = () => {
  return (
<div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
    {/* Left: Image + Right: Features */}
        <div className="w-full flex flex-col md:flex-row gap-6" data-aos="fade-up">
      {/* Image */}
          <div className="w-full  md:w-[40%] flex justify-center md:justify-start" data-aos="zoom-in" data-aos-delay="100">
        <Image
          src={AboutImage}
          alt="About Tabdeel"
          className="w-full max-w-xs md:w-96 rounded-xl object-cover"
          priority
        />
      </div>

      {/* Feature list */}
          <div className="w-full md:w-[60%]" data-aos="fade-down" data-aos-delay="150">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
                  className="flex items-start gap-5 rounded-xl border border-[#327D59] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={(idx % 2 === 0 ? 0 : 100) + Math.floor(idx / 2) * 100}
            >
              <div className="shrink-0 rounded-full bg-green-100 text-green-700 p-3">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom paragraph */}
        <div className="w-full mt-4 md:mt-8" data-aos="fade-up" data-aos-delay="150">
            <div className=' px-2 md:px-20 '>
          <p className="w-full py-10 rounded-xl border border-[#327D59] bg-white/30 p-6 text-base leading-relaxed text-gray-700 shadow-sm">
        Tabdeel delivers The Change You Need in electrical, security, and automation systems. From powering your
        operations to protecting your people and connecting your spaces, we provide future-ready solutions trusted
        across the UAE.
      </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default index
