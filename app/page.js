"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Support from "@/components/support";
import Carousel from "@/components/caroseal";
import { Backgound, Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, WahtsuppIocn } from "@/public/assets";
import Service from "@/components/service";
import Footer from "@/components/footer";
import QuickAnswer from "@/components/quickanswer";
import Contact from "@/components/contect";
import OurServices from "@/components/ourservices";
import { Truck, Package, Route, Clock, Wallet, BarChart3 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const items = [
    { icon: <Truck />, title: t("homeItems.item1Title"), description: t("homeItems.item1Desc") },
    { icon: <Package />, title: t("homeItems.item2Title"), description: t("homeItems.item2Desc") },
    { icon: <Route />, title: t("homeItems.item3Title"), description: t("homeItems.item3Desc") },
    { icon: <Clock />, title: t("homeItems.item4Title"), description: t("homeItems.item4Desc") },
    { icon: <Wallet />, title: t("homeItems.item5Title"), description: t("homeItems.item5Desc") },
    { icon: <BarChart3 />, title: t("homeItems.item6Title"), description: t("homeItems.item6Desc") },
  ];

  const Brands =[
    {id:1,
      brandTitle:'Brand',
      logo:Brand1
    },
    {id:2,
      brandTitle:'Brand',
      logo:Brand2
    },
    {id:3,
      brandTitle:'Brand',
      logo:Brand3
    },
    {id:4,
      brandTitle:'Brand',
      logo:Brand4
    },
    {id:5,
      brandTitle:'Brand',
      logo:Brand5
    },
    {id:6,
      brandTitle:'Brand',
      logo:Brand6
    },
    {id:7,
      brandTitle:'Brand',
      logo:Brand7
    },
    {id:8,
      brandTitle:'Brand',
      logo:Brand8
    },

  ]
  return (
    <div
      style={{
        backgroundImage: `url(${Backgound.src})`,
        backgroundPosition: "bottom",
        backgroundSize: "full",
        backgroundRepeat: "repeat",
      }}
      className="min-h-screen  py-2 px-2 "
    >
      <div className="flex flex-col ">
        <div>
          <Navbar />
        </div>
        <div   id="hero">
          <Hero />
        </div>

        <div id="solution">
          <About />
        </div>
        <div id="project">
          <Support />
        </div>
        <div id="services">
          <OurServices />
        </div>
        <div id="blog">
        <Carousel   Brands={Brands} items={items} />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="about">
          <Service />
        </div>
        <div>
          <QuickAnswer />
        </div>
        <Footer />
      </div>
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/7025715250"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[70px] right-[20px] z-50   transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
     <Image src={WahtsuppIocn} alt="WhatsApp" width={70}  />
      </a>
    </div>
  );
}
