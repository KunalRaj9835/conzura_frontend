"use client";

import BlogCard from "./BlogCard";
import YellowButton from "./YellowButton";
import SlideUp from "./SlideUp";

export default function RecentBlogs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <SlideUp>
        <div className="text-center mb-4">
          <h2 className="text-3xl font-light text-[#0e355d]">Our Recent Blogs</h2>
          <div className="h-1 w-20 bg-[#2399b1] mx-auto mt-3 rounded-full"></div>
        </div>
      </SlideUp>

      {/* Subtext */}
      <SlideUp>
        <p className="text-center  text-sm text-gray-600 mb-12 font-semibold max-w-3xl mx-auto">
          Explore our blog for insightful articles, personal reflections and
          ideas that inspire action on the topics you care about.
        </p>
      </SlideUp>

      {/* Blog Grid */}
      <SlideUp>
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

        </div>
      </SlideUp>

      {/* Know More Button */}
      <SlideUp>
        <div className="flex justify-center mt-14">
          <YellowButton text="Know More" href="/blog" />
        </div>
      </SlideUp>

    </section>
  );
}
