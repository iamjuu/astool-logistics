import { AnimatedTestimonials } from "@/ui/card/card";
import {Card1,Card2,Card3,Card4,Card5,Card6} from "../../public/assets"
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Fast, reliable freight forwarding services with real-time tracking and customs clearance support — connecting businesses across the UAE and globally.",
      name: "Freight Forwarding",
      designation: "Global Shipping",
      src: Card1,
    },
    {
      quote:
        "Secure warehousing and distribution solutions with 99.9% inventory accuracy, modern facilities, and efficient fulfillment services.",
      name: "Warehousing & Distribution",
      designation: "Storage Solutions",
      src: Card2,    },
    {
      quote:
        "This logistics solution has significantly improved our supply chain efficiency. The real-time tracking and seamless integration made operations effortless.",
      name: "Sarah Johnson",
      designation: "Supply Chain Manager at TradeLink",
      src: Card3,    },
    {
      quote:
        "Temperature-controlled logistics and cold chain management for perishables, pharmaceuticals, and sensitive goods — safe, compliant, and reliable across the UAE.",
      name: "Cold Chain Logistics",
      designation: "Temperature Control",
      src: Card4,    },
    {
      quote:
        "24/7 last-mile delivery services with GPS tracking and instant notifications to keep your customers informed every step of the way.",
      name: "Last-Mile Delivery",
      designation: "Express Delivery",
      src: Card5,    },
      {
        quote:
          "End-to-end supply chain management and logistics consulting that keeps your business operations running smoothly without interruptions.",
        name: "Supply Chain Management",
        designation: "Complete Solutions",
        src: Card6,    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
