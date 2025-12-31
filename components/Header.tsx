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
  | "product"
  | "services"
  | "courses"
  | "company"
  | "tech-mobile"
  | "product-mobile"
  | "courses-mobile"
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

            {/* PRODUCT */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("product")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Product
                <Arrow isOpen={openMenu === "product"} />
              </button>

              <div
                className={`absolute right-0 mt-2 bg-white shadow-lg rounded p-4 w-72
                  transition-all duration-300 origin-top
                  ${openMenu === "product"
                    ? "opacity-100 translate-y-0 max-h-96"
                    : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
              `}
              >
                <a href="/Product/Ticketing" className="block py-2 hover:text-red-500">Ticketing Tool</a>
                <a href="/Product/Sales" className="block py-2 hover:text-red-500">Sales CRM</a>
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
                className={`absolute right-0 mt-2 bg-white shadow-lg rounded p-4 w-80
                  transition-all duration-300 origin-top
                  ${openMenu === "services"
                    ? "opacity-100 translate-y-0 max-h-96"
                    : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
              `}
              >
                <a href="/Web-Development" className="block py-2 hover:text-red-500">Web Development</a>
                <a href="/App-Development" className="block py-2 hover:text-red-500">APP Development</a>
                <a href="/Web-Hosting" className="block py-2 hover:text-red-500">Web Hosting</a>
                <a href="/Digital-Marketing" className="block py-2 hover:text-red-500">Digital Marketing</a>
              </div>
            </div>

            {/* COURSES */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("courses")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Courses
                <Arrow isOpen={openMenu === "courses"} />
              </button>

              <div
                className={`absolute right-0 mt-2 bg-white shadow-lg rounded p-4 w-96
                  transition-all duration-300 origin-top
                  ${
                    openMenu === "courses"
                      ? "opacity-100 translate-y-0 max-h-96"
                      : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                  }
                `}
              >
                <a href="/courses/full-stack-web-development-bootcamp" className="block py-1 hover:text-red-500">Full Stack Web Development Bootcamp</a>
                <a href="/courses/data-science-machine-learning-masterclass" className="block py-1 hover:text-red-500">Data Science & Machine Learning Masterclass</a>
                <a href="/courses/ui-ux-design-professional-certificate" className="block py-1 hover:text-red-500">UI/UX Design Professional Certificate</a>
                <a href="/courses/cloud-computing-aws" className="block py-1 hover:text-red-500">Cloud Computing (AWS)</a>
                <a href="/courses/mobile-app-development-react-native" className="block py-1 hover:text-red-500">Mobile App Development – React Native</a>
                <a href="/courses/digital-marketing-seo-mastery" className="block py-1 hover:text-red-500">Digital Marketing & SEO Mastery</a>
                <a href="/courses/full-stack-python" className="block py-1 hover:text-red-500">Full Stack Python</a>
                <a href="/courses/full-stack-java" className="block py-1 hover:text-red-500">Full Stack Java</a>
                <a href="/courses/data-analytics" className="block py-1 hover:text-red-500">Data Analytics</a>
                <a href="/courses/ai-ml-foundations" className="block py-1 hover:text-red-500">AI & ML Foundations</a>
                <a href="/courses/power-bi-specialization" className="block py-1 hover:text-red-500">Power BI Specialization</a>
                <a href="/courses/devops-cloud" className="block py-1 hover:text-red-500">DevOps & Cloud</a>
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
                className={`absolute right-0 mt-2 bg-white shadow-lg rounded p-4 w-44
                  transition-all duration-300 origin-top
                  ${openMenu === "company"
                    ? "opacity-100 translate-y-0 max-h-40"
                    : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
              `}
              >
                <a href="/about" className="block py-2 hover:text-red-500">About Us</a>
                <a href="/blog" className="block py-2 hover:text-red-500">Blog</a>

              </div>
            </div>
                        {/* CAREERS - Now standalone */}
            <a href="/careers" className="hover:text-red-500">Careers</a>
             <span className="h-5 w-px bg-gray-300"></span>

            {/* CONTACT US BUTTON */}
            <a 
              href="/contact-us" 
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Contact Us
            </a>

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

            {/* PRODUCT */}
            <div>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "product-mobile" ? null : "product-mobile")
                }
                className="hover:text-red-500 flex items-center gap-1 w-full text-left"
              >
                Product
                <Arrow isOpen={openMenu === "product-mobile"} />
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 pl-4
                  ${openMenu === "product-mobile" ? "max-h-96 mt-2" : "max-h-0"}
                `}
              >
                <a href="/Product/Ticketing" className="block py-2 hover:text-red-500">Ticketing Tool</a>
                <a href="/Product/Sales" className="block py-2 hover:text-red-500">Sales CRM</a>
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
                <a href="/Web-Development" className="block py-2 hover:text-red-500">Web Development</a>
                <a href="/App-Development" className="block py-2 hover:text-red-500">APP Development</a>
                <a href="/Web-Hosting" className="block py-2 hover:text-red-500">Web Hosting</a>
                <a href="/Digital-Marketing" className="block py-2 hover:text-red-500">Digital Marketing</a>
              </div>
            </div>

            {/* COURSES */}
            <div>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "courses-mobile" ? null : "courses-mobile")
                }
                className="hover:text-red-500 flex items-center gap-1 w-full text-left"
              >
                Courses
                <Arrow isOpen={openMenu === "courses-mobile"} />
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 pl-4
                  ${openMenu === "courses-mobile" ? "max-h-[600px] mt-2" : "max-h-0"}
                `}
              >
                <a href="/courses/full-stack-web-development-bootcamp" className="block py-1 hover:text-red-500">Full Stack Web Development Bootcamp</a>
                <a href="/courses/data-science-machine-learning-masterclass" className="block py-1 hover:text-red-500">Data Science & Machine Learning Masterclass</a>
                <a href="/courses/ui-ux-design-professional-certificate" className="block py-1 hover:text-red-500">UI/UX Design Professional Certificate</a>
                <a href="/courses/cloud-computing-aws" className="block py-1 hover:text-red-500">Cloud Computing (AWS)</a>
                <a href="/courses/mobile-app-development-react-native" className="block py-1 hover:text-red-500">Mobile App Development – React Native</a>
                <a href="/courses/digital-marketing-seo-mastery" className="block py-1 hover:text-red-500">Digital Marketing & SEO Mastery</a>
                <a href="/courses/full-stack-python" className="block py-1 hover:text-red-500">Full Stack Python</a>
                <a href="/courses/full-stack-java" className="block py-1 hover:text-red-500">Full Stack Java</a>
                <a href="/courses/data-analytics" className="block py-1 hover:text-red-500">Data Analytics</a>
                <a href="/courses/ai-ml-foundations" className="block py-1 hover:text-red-500">AI & ML Foundations</a>
                <a href="/courses/power-bi-specialization" className="block py-1 hover:text-red-500">Power BI Specialization</a>
                <a href="/courses/devops-cloud" className="block py-1 hover:text-red-500">DevOps & Cloud</a>
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
                  ${openMenu === "company-mobile" ? "max-h-40 mt-2" : "max-h-0"}
                `}
              >
                <a href="/about" className="block py-2 hover:text-red-500">About Us</a>
                <a href="/blog" className="block py-2 hover:text-red-500">Blog</a>

              </div>
            </div>
             {/* CAREERS - Now standalone */}
            <a href="/careers" className="hover:text-red-500">Careers</a>

            {/* CONTACT US BUTTON */}
            <a 
              href="/contact-us" 
              className="bg-red-500 text-white px-6 py-3 rounded text-center hover:bg-red-600 transition-colors mt-2"
            >
              Contact Us
            </a>

          </div>
        </div>
      </nav>
    </header>
  );
}