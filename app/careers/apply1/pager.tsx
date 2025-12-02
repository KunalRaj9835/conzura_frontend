"use client";

import ServiceHero from "@/components/ServiceHero";
import YellowButton from "@/components/YellowButton";
import Footer from "@/components/Footer";

export default function CareersPage() {
  const title = "Careers";
  const bg = "/services-bg.jpg";

  return (
    <div>
      {/* HERO */}
      <ServiceHero title={title} bg={bg} />

      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extralight text-center text-[#0e355d] mb-6">
          Find Your Path
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6 text-center font-light">
          With the mission of providing the best talent solutions to our Clients,
          conzura has consistently performed the custom of engaging the potential
          talents, who are passionate to learn, grow, and deliver excellence.
        </p>

        <p className="text-gray-700 leading-relaxed text-center font-light">
          If you are interested in a challenging and rewarding career
          opportunity, we would invite you to explore interesting career at
          conzura. Join a team of experienced and qualified professionals to plan
          an outstanding career.
        </p>
      </section>

      {/* WHY JOIN US SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <h2 className="text-4xl font-extralight text-center text-[#0e355d]">
          Why Join Us
        </h2>

        <div className="h-1 w-20 bg-[#0e355d] mx-auto mt-3 rounded-full" />

        <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto font-light">
          We believe in building an environment where people grow, collaborate,
          and innovate. Explore what makes conzura a rewarding workplace.
        </p>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">

          {/* FEATURE 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all">
            <img src="/icon/team.svg" className="w-14 mx-auto mb-5" />
            <h3 className="text-xl font-medium text-[#0e355d] mb-2">
              Collaborative Culture
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Work with talented, driven professionals who value teamwork and excellence.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all">
            <img src="/icon/growth.svg" className="w-14 mx-auto mb-5" />
            <h3 className="text-xl font-medium text-[#0e355d] mb-2">
              Career Growth
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed  font-light">
              Take on challenging roles and build a long-term, fulfilling career path.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all">
            <img src="/icon/learning.svg" className="w-14 mx-auto mb-5" />
            <h3 className="text-xl font-medium text-[#0e355d] mb-2">
              Continuous Learning
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed  font-light">
              Gain mentorship, training, and exposure to new challenges.
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-16">
          <YellowButton text="Know More" href="contact-us" />
        </div>

        {/* EMAIL BOX */}
        <div className="max-w-xl mx-auto bg-white mt-20 shadow-xl rounded-2xl p-10 text-center">
          <p className="text-xl font-medium text-[#0e355d] mb-3  font-light">
            Share your resume with our Talent Team to explore relevant openings
          </p>
          <a
            href="mailto:info@conzuragroups.com"
            className="text-[#0e355d] underline text-lg font-medium"
          >
            info@conzuragroups.com
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
