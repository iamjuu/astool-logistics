"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Button from "../button";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Logo } from "../../public/assets";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const navLinkKeys = [
  { href: "#hero", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#solution", key: "nav.solution" },
  { href: "#project", key: "nav.project" },
  { href: "#blog", key: "nav.blog" },
];

const LANG_OPTIONS = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
  { value: "fr", label: "Français" },
  { value: "hi", label: "हिंदी" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <header className=" z-50 w-full bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Image
                data-aos="fade-up"
                data-aos-delay={100}
                src={Logo}
                alt="logo"
                className="w-36 "
                width={198}
                height={72}
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-[72px]">
            {navLinkKeys.map((link, index) => (
              <Link
                key={link.key}
                href={link.href}
                className="relative text-[14px] font-medium duration-700 delay-200 hover:text-[#327D59] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#327D59] after:content-[''] after:transition-transform after:duration-300 hover:after:scale-x-100"
                data-aos="flip-down"
                data-aos-delay={index * 400}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop: Language select + Contact Button */}
          <div
            className="hidden md:flex items-center gap-3"
            data-aos="flip-up"
            data-aos-delay={1000}
          >
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#327D59]" aria-hidden />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="text-[14px] font-medium text-gray-700 bg-transparent border border-[#327D59] rounded-[8px] px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#327D59]/50 cursor-pointer min-w-[100px]"
                aria-label="Change language"
              >
                {LANG_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <Button
              href="#contact"
              className="flex items-center px-4 py-1 border-[#327D59] border rounded-[8px] text-gray-700 hover:text-white font-medium transition-all duration-200"
            >
              {t("nav.contactUs")}
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-[8px] text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X color="black" className="h-6 w-6" />
              ) : (
                <Menu color="black" className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop overlay with blur */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="md:hidden bg-white border-t border-gray-100 fixed top-4 left-0 w-full shadow-lg z-50">
            {/* Close button at the top */}
            <div className="flex justify-end border-b border-gray-100">
              <Button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-[8px] text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                <X color="black" className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-2 px-4 pt-2 pb-4">
              {navLinkKeys.map((link, index) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center hover:text-[#327D59] space-x-3 px-3 py-2 rounded-md text-[12px] font-medium text-gray-700"
                  data-aos="flip-down"
                  data-aos-delay={index * 100}
                >
                  <span>{t(link.key)}</span>
                </Link>
              ))}
              <div className="flex items-center gap-2 px-3 py-2">
                <Globe className="w-5 h-5 text-[#327D59]" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#327D59]/50 cursor-pointer flex-1"
                  aria-label="Change language"
                >
                  {LANG_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#327D59] hover:bg-gray-50 transition-all duration-500 ease-in-out delay-100 hover:scale-105 hover:shadow-sm"
                data-aos="flip-down"
              >
                <Phone color="black" className="w-5 h-5" />
                <span>{t("nav.contactUs")}</span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
