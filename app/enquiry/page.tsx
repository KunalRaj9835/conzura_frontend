"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

// HARD-CODED COURSE LIST
const COURSES = [
  { id: "1", title: "Full Stack Web Development Bootcamp", slug: "full-stack-web-development-bootcamp" },
  { id: "2", title: "Data Science & Machine Learning Masterclass", slug: "data-science-machine-learning-masterclass" },
  { id: "3", title: "UI/UX Design Professional Certificate", slug: "ui-ux-design-professional-certificate" },
  { id: "4", title: "Cloud Computing (AWS)", slug: "cloud-computing-aws" },
  { id: "5", title: "Mobile App Development – React Native", slug: "mobile-app-development-react-native" },
  { id: "6", title: "Digital Marketing & SEO Mastery", slug: "digital-marketing-seo-mastery" },
  { id: "7", title: "Full Stack Python", slug: "full-stack-python" },
  { id: "8", title: "Full Stack Java", slug: "full-stack-java" },
  { id: "9", title: "Data Analytics", slug: "data-analytics" },
  { id: "10", title: "AI & ML Foundations", slug: "ai-ml-foundations" },
  { id: "11", title: "Power BI Specialization", slug: "power-bi-specialization" },
  { id: "12", title: "DevOps & Cloud", slug: "devops-cloud" },
];

export default function EnquiryPage() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get("course") || "";

  const foundCourse = COURSES.find((c) => c.slug === initialSlug);
  const [selectedCourse, setSelectedCourse] = useState(foundCourse ? foundCourse.id : "0");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const update = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    const courseObj = COURSES.find((c) => c.id === selectedCourse);
    const courseSlugToSend = courseObj?.slug || "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/enquiry/submit`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          selectedCourse: courseSlugToSend,
        }),
      }
    );

    const data = await res.json();
    if (data.success) setSubmitted(true);
    else alert("Something went wrong!");
  };

  if (submitted)
    return (
      <div className="max-w-lg mx-auto p-20 text-center font-[Poppins] pt-32">
        <h1 className="text-3xl font-bold text-green-600">Enquiry Submitted ✔</h1>
        <p className="mt-4 text-gray-600 text-lg">We will contact you soon.</p>
      </div>
    );

  return (
    <div>
      <div className="font-[Poppins] pt-10">

        {/* HERO */}
        <div className="bg-gradient-to-r from-[#0e355d] to-[#1a5490] text-white py-14 shadow-lg">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl font-bold">Course Enquiry</h1>
            <p className="text-gray-200 mt-3 max-w-2xl text-lg leading-relaxed">
              Share your learning goals with us. Our team will help you with the
              right course recommendations, pricing, and batch options.
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="max-w-6xl mx-auto px-0 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-1 space-y-10">

            {/* TEAM CONTACT */}
            <section className="bg-white p-8 rounded-xl shadow-md border">
              <h2 className="text-3xl font-semibold text-[#0e355d] mb-3">
                Talk to our team
              </h2>

              <p className="text-gray-700 leading-relaxed text-[17px] mb-6">
                Whether you're exploring a single course or planning a learning
                roadmap, we’re here to help you choose the right path.
              </p>

              <div className="grid grid-cols-2 gap-4">

                <div className="p-4 border rounded-xl bg-gray-50">
                  <p className="text-sm text-gray-500">EMAIL</p>
                  <p className="font-semibold text-gray-800">info@conzuragroups.com</p>
                </div>

                <div className="p-4 border rounded-xl bg-gray-50">
                  <p className="text-sm text-gray-500">PHONE</p>
                  <p className="font-semibold text-gray-800">+91 98765 43210</p>
                </div>

                <div className="p-4 border rounded-xl bg-gray-50">
                  <p className="text-sm text-gray-500">LOCATION</p>
                  <p className="font-semibold text-gray-800">Chennai, India</p>
                </div>

                <div className="p-4 border rounded-xl bg-gray-50">
                  <p className="text-sm text-gray-500">WORKING HOURS</p>
                  <p className="font-semibold text-gray-800 leading-tight">
                    Mon – Sat, 10:00 AM – 7:00 PM
                  </p>
                </div>

              </div>

              <p className="text-gray-700 leading-relaxed text-[17px] mt-6">
                Prefer email? Send us your profile and course interest. We respond within 1 working day.
              </p>
            </section>

            {/* WHY SECTION */}
            <section className="bg-white p-8 rounded-xl shadow-md border">
              <h2 className="text-3xl font-semibold text-[#0e355d] mb-4">
                Why work with us?
              </h2>

              <ul className="space-y-3 text-gray-700 text-[17px] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-red-500 text-lg">✔</span>
                  Expert-led training built on real industry standards.
                </li>

                <li className="flex gap-2">
                  <span className="text-red-500 text-lg">✔</span>
                  Practical, project-based learning to get you job-ready.
                </li>

                <li className="flex gap-2">
                  <span className="text-red-500 text-lg">✔</span>
                  Lifetime access to learning material and support.
                </li>

                <li className="flex gap-2">
                  <span className="text-red-500 text-lg">✔</span>
                  Personalized guidance for growth and career success.
                </li>
              </ul>
            </section>

          </div>

          {/* RIGHT — FORM */}
          <div>
            <div className="sticky top-6 bg-white p-8 rounded-xl shadow-lg border">

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Submit an Enquiry
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form and our team will contact you shortly.
              </p>

              {/* COURSE SELECT */}
              <label className="block mb-2 font-semibold">Select Course</label>
              <select
                className="w-full border p-3 rounded mb-4"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="0">Choose a course</option>
                {COURSES.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>

              {/* NAME */}
              <label className="block mb-2 font-semibold">Your Name</label>
              <input
                name="name"
                className="w-full border p-3 rounded mb-4"
                placeholder="Enter your name"
                value={form.name}
                onChange={update}
              />

              {/* EMAIL */}
              <label className="block mb-2 font-semibold">Email Address</label>
              <input
                name="email"
                className="w-full border p-3 rounded mb-4"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={update}
              />

              {/* PHONE */}
              <label className="block mb-2 font-semibold">Phone Number</label>
              <input
                name="phone"
                className="w-full border p-3 rounded mb-4"
                placeholder="+91 XXXXXXXXXX"
                value={form.phone}
                onChange={update}
              />

              {/* MESSAGE */}
              <label className="block mb-2 font-semibold">Your Message</label>
              <textarea
                name="message"
                className="w-full border p-3 rounded mb-4"
                placeholder="Tell us what you're looking for..."
                rows={4}
                value={form.message}
                onChange={update}
              />

              {/* SUBMIT */}
              <button
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                onClick={submit}
              >
                Submit Enquiry
              </button>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
