"use client";

import ServiceHero from "@/components/ServiceHero";
import BlogCard from "@/components/BlogCard";

import Footer from "@/components/Footer";

export default function Page() {
  // Hero Section Data
  const title = "Blog";
  const bg = "/services-bg.jpg";

  return (
    <>
      {/* HERO */}
      <ServiceHero title={title} bg={bg} />

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* Grid of blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <BlogCard
                    image="/blog/blog1.jpg"
                    title="Real-Time Analytics in 2025: Predicting Events Before They Happen"
                    href="/blog/blog1"
                  />
          
                  <BlogCard
                    image="/blog/blog2.png"
                    title="The Rise of Semantic Analytics: Replacing Dashboards with AI-Driven Insights"
                    href="/blog/blog2"
                  />
          
                  <BlogCard
                    image="/blog/blog3.webp"
                    title="Data Quality Automation: The Hidden Engine Behind Accurate Analytics"
                    href="/blog/blog3"
                  />

          {/* Duplicate more BlogCard entries here */}
        </div>

        {/* Load More / Know More Button */}
      </section>

      <Footer />
    </>
  );
}
