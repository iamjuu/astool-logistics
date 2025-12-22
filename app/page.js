import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Support from "@/components/support";
import Carousel from "@/components/caroseal";
import { Backgound } from "@/public/assets";
import Service from "@/components/service";
import Footer from "@/components/footer";
import QuickAnswer from "@/components/quickanswer";
import Contact from "@/components/contect";
import { Truck, Package, Route, Clock, Wallet, BarChart3 } from "lucide-react";
export default function Home() {
  const items = [
    {
      icon: <Truck />,
      title: "Faster Delivery",
      description:
        "Streamline your supply chain with efficient logistics solutions that ensure timely delivery and reduced transit times.",
    },
    {
      icon: <Package />,
      title: "Better Customer Experience",
      description:
        "Deliver reliable, on-time shipments that enhance customer satisfaction and build long-term trust in your brand.",
    },
    {
      icon: <Route />,
      title: "Scalability & Growth",
      description:
        "Flexible logistics networks that grow with your business, supporting expansion across Dubai and the UAE.",
    },

    {
      icon: <Clock />,
      title: "24/7 Availability",
      description:
        "Round-the-clock logistics support and tracking ensure your shipments are always monitored and on schedule.",
    },
    {
      icon: <Wallet />,
      title: "Cost Reduction",
      description:
        "Optimize shipping costs with efficient route planning and warehouse management designed to maximize savings.",
    },
    {
      icon: <BarChart3 />,
      title: "Data-Driven Insights​",
      description:
        "Gain real-time visibility into your supply chain with advanced analytics for smarter logistics decision-making.",
    },
  ];
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
        <div id="hero">
          <Hero />
        </div>

        <div id="solution">
          <About />
        </div>
        <div id="project">
          <Support />
        </div>
        <div id="blog">
          <Carousel items={items} />
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
    </div>
  );
}
