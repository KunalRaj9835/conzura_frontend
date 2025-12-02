import Carousel from "@/components/Carousel";
import AboutUs from "@/components/AboutUs";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhyUs from "@/components/WhyUs";
import IndustrySpecialties from "@/components/IndustrySpecialties";
import CallToAction from "@/components/CallToAction";
import RecentBlogs from "@/components/RecentBlogs";
import FooterNewsletter from "@/components/FooterNewsletter";
import Footer from "@/components/Footer";
import OurSolutions from "@/components/OurSolutions";
export default function Home() {
  return (
    <main>
  <Carousel />
  <AboutUs />
  {/*
  <div id = "oursolution">
  <OurSolutions />
  </div>
   */}
  <div id="whyus">
    <WhyUs />
  </div>


  <CallToAction />
  <RecentBlogs />
  <FooterNewsletter />
  <Footer />
</main>

  );
}
