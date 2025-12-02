"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
interface ArrowProps {
  isOpen: boolean;
}

const Arrow = ({ isOpen }: ArrowProps) => (
  <img
    src={isOpen ? "/move/up.svg" : "/move/down.svg"}
    alt="arrow"
    className="w-6 h-6 transition-transform duration-300"
  />
);

type MenuKey =
  | "tech"
  | "domain"
  | "services"
  | "company"
  | "tech-mobile"
  | "domain-mobile"
  | "services-mobile"
  | "company-mobile"
  | null;

export default function Header() {
  const [showTop, setShowTop] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnter = (menuName: MenuKey) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
    setOpenMenu(menuName);
  };

  const handleLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow bg-white font-medium text-sm">

      {/* Top Bar */}
      <div
        className={`transition-all duration-300 overflow-hidden bg-white 
          ${showTop ? "max-h-16 opacity-100" : "max-h-0 opacity-0"}
        `}
      >


<div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-end gap-6 text-sm text-gray-700">

  <div className="flex items-center gap-2">
    <Image
      src="/header/phone2.svg"
      alt="phone"
      width={20}
      height={20}
    />
    <span>+9191779 51075</span>
  </div>

  <div className="flex items-center gap-2">
    <Image
      src="/header/email.svg"
      alt="email"
      width={20}
      height={20}
    />
    <span>info@conzuragroups.com</span>
  </div>

</div>



      </div>

      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center ">
            <img src="/clogo.png" alt="Logo" className="h-12 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-medium text-[#0e355d] text-sm">

            {/* WHY US */}
            <a href="/#whyus" className="hover:text-red-500">Why Us</a>

            {/* TECHNOLOGY EXPERTISE */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("tech")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Technology Expertise
                <Arrow isOpen={openMenu === "tech"} />
              </button>

              <div
                className={`absolute left-0 mt-2 bg-white shadow-lg rounded p-4 w-64
                  transition-all duration-300 origin-top
                  ${openMenu === "tech"
                    ? "opacity-100 translate-y-0 max-h-96"
                    : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
              `}
              >
                <a href="/data/data-modernization" className="block py-2 hover:text-red-500">Data Modernization</a>
                <a href="/data/aritifical-intelligence" className="block py-2 hover:text-red-500">Aritifical Intelligence</a>
                <a href="/data/ai-powered-operations" className="block py-2 hover:text-red-500">AI powerd opertaion</a>
              </div>
            </div>

            {/* DOMAIN */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("domain")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Domain
                <Arrow isOpen={openMenu === "domain"} />
              </button>

              <div
                className={`absolute left-0 mt-2 bg-white shadow-lg rounded p-4 w-72
                  transition-all duration-300 origin-top
                  ${openMenu === "domain"
                    ? "opacity-100 translate-y-0 max-h-96"
                    : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
              `}
              >
                <a href="/case-study/case1" className="block py-2 hover:text-red-500">IT Services & Digital Engineering</a>
                <a href="/case-study/case2" className="block py-2 hover:text-red-500">Automotive Engineering</a>
                <a href="/case-study/case3" className="block py-2 hover:text-red-500">Aerospace & Defence</a>
                <a href="/case-study/case4" className="block py-2 hover:text-red-500">Industrial Automation</a>
                <a href="/case-study/case5" className="block py-2 hover:text-red-500">Healthcare Technology</a>
                <a href="/case-study/case6" className="block py-2 hover:text-red-500">IoT & Embedded Systems</a>
              </div>
            </div>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("services")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Services
                <Arrow isOpen={openMenu === "services"} />
              </button>

              <div
                className={`absolute left-0 mt-2 bg-white shadow-lg rounded p-4 w-80
                  transition-all duration-300 origin-top
                  ${openMenu === "services"
                    ? "opacity-100 translate-y-0 max-h-96"
                    : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
              `}
              >
                <a href="/talent-intelligence" className="block py-2 hover:text-red-500">Talent Intelligence</a>
                <a href="/talent-acquisition" className="block py-2 hover:text-red-500">Talent Acquisition</a>
                <a href="/global-peo-service" className="block py-2 hover:text-red-500">Global PEO Service</a>
                <a href="/rpo" className="block py-2 hover:text-red-500">Recruitment Process Outsourcing</a>
                <a href="/executive-search" className="block py-2 hover:text-red-500">Executive Search</a>
              </div>
            </div>

            {/* COMPANY */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("company")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Company
                <Arrow isOpen={openMenu === "company"} />
              </button>

              <div
                className={`absolute left-0 mt-2 bg-white shadow-lg rounded p-4 w-44
                  transition-all duration-300 origin-top
                  ${openMenu === "company"
                    ? "opacity-100 translate-y-0 max-h-52"
                    : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
              `}
              >
                <a href="/about" className="block py-2 hover:text-red-500">About Us</a>
                <a href="/careers" className="block py-2 hover:text-red-500">Careers</a>
                <a href="/blog" className="block py-2 hover:text-red-500">Blog</a>
                <a href="/contact-us" className="block py-2 hover:text-red-500">Contact</a>
              </div>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0e355d]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden bg-white overflow-hidden 
            transition-all duration-500 ease-in-out
            ${menuOpen ? "max-h-[900px] py-6" : "max-h-0 py-0"}
          `}
        >
          <div className="flex flex-col px-6 gap-4 font-medium text-[#0e355d] text-sm">

            {/* WHY US */}
            <a href="/#whyus" className="hover:text-red-500">Why Us</a>

            {/* TECH */}
            <div>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "tech-mobile" ? null : "tech-mobile")
                }
                className="hover:text-red-500 flex items-center gap-1 w-full text-left"
              >
                Technology Expertise
                <Arrow isOpen={openMenu === "tech-mobile"} />
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 pl-4
                  ${openMenu === "tech-mobile" ? "max-h-80 mt-2" : "max-h-0"}
                `}
              >
                <a href="/data/data-modernization" className="block py-2 hover:text-red-500">Data Modernization</a>
                <a href="/data/aritifical-intelligence" className="block py-2 hover:text-red-500">Aritifical Intelligence</a>
                <a href="/data/ai-powered-operations" className="block py-2 hover:text-red-500">AI powerd opertaion</a>
              </div>
            </div>

            {/* DOMAIN */}
            <div>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "domain-mobile" ? null : "domain-mobile")
                }
                className="hover:text-red-500 flex items-center gap-1 w-full text-left"
              >
                Domain
                <Arrow isOpen={openMenu === "domain-mobile"} />
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 pl-4
                  ${openMenu === "domain-mobile" ? "max-h-96 mt-2" : "max-h-0"}
                `}
              >
                <a href="/case-study/case1" className="block py-2">IT Services & Digital Engineering</a>
                <a href="/case-study/case2" className="block py-2">Automotive Engineering</a>
                <a href="/case-study/case3" className="block py-2">Aerospace & Defence</a>
                <a href="/case-study/case4" className="block py-2">Industrial Automation</a>
                <a href="/case-study/case5" className="block py-2">Healthcare Technology</a>
                <a href="/case-study/case6" className="block py-2">IoT & Embedded Systems</a>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "services-mobile" ? null : "services-mobile")
                }
                className="hover:text-red-500 flex items-center gap-1 w-full text-left"
              >
                Services
                <Arrow isOpen={openMenu === "services-mobile"} />
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 pl-4
                  ${openMenu === "services-mobile" ? "max-h-96 mt-2" : "max-h-0"}
                `}
              >
                <a href="/talent-intelligence" className="block py-2">Talent Intelligence</a>
                <a href="/talent-acquisition" className="block py-2">Talent Acquisition</a>
                <a href="/global-peo-service" className="block py-2">Global PEO Service</a>
                <a href="/rpo" className="block py-2">Recruitment Process Outsourcing</a>
                <a href="/executive-search" className="block py-2">Executive Search</a>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "company-mobile" ? null : "company-mobile")
                }
                className="hover:text-red-500 flex items-center gap-1 w-full text-left"
              >
                Company
                <Arrow isOpen={openMenu === "company-mobile"} />
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 pl-4
                  ${openMenu === "company-mobile" ? "max-h-60 mt-2" : "max-h-0"}
                `}
              >
                <a href="/about" className="block py-2">About Us</a>
                <a href="/careers" className="block py-2">Careers</a>
                <a href="/blog" className="block py-2">Blog</a>
                <a href="/contact-us" className="block py-2">Contact</a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}
