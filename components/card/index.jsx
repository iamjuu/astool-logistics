"use client";
import { AnimatedTestimonials } from "@/ui/card/card";
import { Logistics1, Logistics2, Logistics3, Logistics4, Logistics5, Logistics8 } from "../../public/assets";
import { useLanguage } from "@/context/LanguageContext";

export function AnimatedTestimonialsDemo() {
  const { t } = useLanguage();
  const testimonials = [
    { quote: t("card.quote1"), name: t("card.name1"), designation: t("card.designation1"), src: Logistics1 },
    { quote: t("card.quote2"), name: "", designation: t("card.designation2"), src: Logistics2 },
    { quote: t("card.quote3"), name: "", designation: t("card.designation3"), src: Logistics3 },
    { quote: t("card.quote4"), name: "", designation: t("card.designation4"), src: Logistics4 },
    { quote: t("card.quote5"), name: "", designation: t("card.designation5"), src: Logistics5 },
    { quote: t("card.quote6"), name: "", designation: t("card.designation6"), src: Logistics8 },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
