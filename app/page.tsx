import dynamic from 'next/dynamic';
import Carousel from "@/components/Carousel";
import AboutUs from "@/components/AboutUs";

// Lazy load components below the fold
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const IndustrySpecialties = dynamic(() => import("@/components/IndustrySpecialties"));
const CallToAction = dynamic(() => import("@/components/CallToAction"));
const RecentBlogs = dynamic(() => import("@/components/RecentBlogs"));
const FooterNewsletter = dynamic(() => import("@/components/FooterNewsletter"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main>
      <Carousel />
      <AboutUs />
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