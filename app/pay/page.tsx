"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

// HARD-CODED COURSES (NO seed.json)
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

export default function PayPage() {
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("course") || "";

  // Auto-select course if slug matches
  const foundCourse = COURSES.find((c) => c.slug === courseSlug);
  const [selectedCourse, setSelectedCourse] = useState(foundCourse ? foundCourse.id : "0");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [qr, setQr] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const createPayment = async () => {
    const courseObj = COURSES.find((c) => c.id === selectedCourse);
    const selectedSlug = courseObj?.slug || "";

    setLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pay/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        courseSlug: selectedSlug,
        amount: 499,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!data.success) return alert("Something went wrong!");

    setPaymentId(data.session.id);
    setQr(data.session.qrCode);
    setStatus(data.session.status);
  };

  // Poll for payment status
  useEffect(() => {
    if (!paymentId) return;

    const interval = setInterval(async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/pay/status/${paymentId}`
      );
      const data = await res.json();

      if (data.success) {
        setStatus(data.status);
        if (data.status === "PAID") clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [paymentId]);

  return (
    <div>
      <div className="font-[Poppins] pt-10">

        {/* HERO */}
        <div className="bg-gradient-to-r from-[#0e355d] to-[#1a5490] text-white py-14 shadow-lg">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl font-bold">Complete Payment</h1>
            <p className="text-gray-200 mt-2 text-lg max-w-xl">
              Secure your course seat by completing the payment below.
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT INFO */}
          <div className="lg:col-span-2 space-y-10">

            <section className="bg-white p-8 rounded-xl shadow-md border">
              <h2 className="text-3xl font-semibold text-[#0e355d] mb-4">
                About Conzura Group
              </h2>

              <p className="text-gray-700 leading-relaxed text-[17px] mb-4 text-justify">
                Conzura Group is a global education & technology company focused on
                skill development, industry-led training, and real-world project mentorship.
              </p>

              <p className="text-gray-700 leading-relaxed text-[17px] mb-4 text-justify">
                Our programs help learners transition into high-growth careers through structured
                paths, live mentorship, and hands-on experience.
              </p>

              <p className="text-gray-700 leading-relaxed text-[17px] text-justify">
                Trusted by thousands of learners, we continue to build premium upskilling programs
                across technology, AI, cloud, data, and cybersecurity.
              </p>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-md border">
              <h2 className="text-3xl font-semibold text-[#0e355d] mb-4">
                Why Choose Us?
              </h2>

              <ul className="space-y-3 text-gray-700 text-[17px]">
                <li className="flex gap-2"><span className="text-red-500">✔</span> Industry-certified instructors</li>
                <li className="flex gap-2"><span className="text-red-500">✔</span> Project-driven learning approach</li>
                <li className="flex gap-2"><span className="text-red-500">✔</span> Lifetime access & certification</li>
                <li className="flex gap-2"><span className="text-red-500">✔</span> Real-time doubt solving</li>
              </ul>
            </section>

          </div>

          {/* RIGHT — PAYMENT FORM */}
          <div>
            <div className="sticky top-6 bg-white border rounded-xl shadow-lg overflow-hidden p-6">

              {/* BEFORE PAYMENT */}
              {!paymentId && (
                <>
                  <label className="block font-semibold mb-1">Select Course</label>
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

                  <input
                    className="w-full border p-3 rounded mb-4"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    className="w-full border p-3 rounded mb-4"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    disabled={loading}
                    onClick={createPayment}
                  >
                    {loading ? "Generating QR..." : "Generate Payment QR"}
                  </button>
                </>
              )}

              {/* QR CODE AFTER GENERATE */}
              {qr && status !== "PAID" && (
                <div className="text-center mt-8">
                  <h3 className="text-xl font-semibold mb-3">Scan to Pay</h3>
                  <img src={qr} className="w-56 mx-auto" />
                  <p className="text-gray-600 mt-4">
                    Waiting for payment confirmation…
                  </p>
                </div>
              )}

              {/* MOCK BUTTON */}
              {qr && status !== "PAID" && (
                <button
                  className="w-full mt-6 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
                  onClick={async () => {
                    const res = await fetch(
                      `${process.env.NEXT_PUBLIC_API_URL}/api/pay/confirm`,
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ paymentId }),
                      }
                    );

                    const data = await res.json();
                    if (data.success) setStatus("PAID");
                  }}
                >
                  Mock: Mark as Paid
                </button>
              )}

              {/* PAID SUCCESS */}
              {status === "PAID" && (
                <div className="text-center mt-10">
                  <p className="text-green-600 text-2xl font-bold mb-6">
                    Payment Successful ✔
                  </p>

                  <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    onClick={() => (window.location.href = "/")}
                  >
                    Go to Home
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
