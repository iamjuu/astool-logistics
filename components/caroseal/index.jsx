'use client'

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const   Carousel = ({ items,Brands }) => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
    const scrollSpeed = 1; // pixels per frame
    let animationFrame;

    const scroll = () => {
      if (containerRef.current && !isHovering) {
        const container = containerRef.current;

        // If at the end, reset back to start
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovering]);

  return (
    // <div
    //   className="overflow-x-auto flex gap-5 py-5 scrollbar-hide"
    //   ref={containerRef}
    //   onMouseEnter={() => setIsHovering(true)}
    //   onMouseLeave={() => setIsHovering(false)}
    // >
    //   {items.map((item, index) => (
    //     <div
    //       key={index}
    //       className="flex flex-col items-start gap-5 rounded-xl border border-[#327D59] bg-white/10 backdrop-blur-md p-5 shadow-sm transition-shadow hover:shadow-md min-w-[350px]"
    //       data-aos="fade-up"
    //       data-aos-delay={index * 150}
    //     >
    //       {item.icon && <span className="text-2xl">{item.icon}</span>}
    //       <div className="flex flex-col gap-2">
    //         <h3 className="text-[20px] font-[400]">{item.title}</h3>
    //         <p className="text-gray-700">{item.description}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
      <div className='flex gap-3 justify-center  flex-wrap'>
  {Brands.map((item, index) => (
    <div className='flex '>
        <div
          key={index}
          className="flex   items-center  justify-center gap-5 rounded-xl border border-[#327D59] bg-white/10 backdrop-blur-md p-5 shadow-sm transition-shadow hover:shadow-md min-w-[350px]"
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <div className='w-20  shadow-2xl group hover:shadow-3xl transition-all duration-500'>

          <Image src={item.logo} />
          </div>
          <div className="flex flex-col gap-2">
           
          </div>
        </div>
        </div>
      ))}
      </div>
    
    </div>
  );
};

export default Carousel;
