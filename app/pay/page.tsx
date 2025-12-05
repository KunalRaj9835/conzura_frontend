"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import seedData from "@/data/seed.json";
import Footer from "@/components/Footer";

export default function PayPage() {
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("course") || "";

  const courses = seedData.courses || [];
  const preselectedCourse =
    courses.find((c: any) => c.slug === courseSlug) || null;

  const [selectedCourse, setSelectedCourse] = useState(
    preselectedCourse ? preselectedCourse.id : "0"
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [qr, setQr] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const createPayment = async () => {
    const selectedCourseObj = courses.find((c: any) => c.id === selectedCourse);
    const courseSlugToSend = selectedCourseObj?.slug || "";

    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/pay/create`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          courseSlug: courseSlugToSend,
          amount: 499,
        }),
      }
    );

    const data = await res.json();
    setLoading(false);

    if (!data.success) return alert("Something went wrong!");

    setPaymentId(data.session.id);
    setQr(data.session.qrCode);
    setStatus(data.session.status);
  };

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
        {/* LEFT SIDE – COMPANY INFO */}
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white p-8 rounded-xl shadow-md border">
            <h2 className="text-3xl font-semibold text-[#0e355d] mb-4">
              About Conzura Group
            </h2>

            <p className="text-gray-700 leading-relaxed text-[17px] mb-4 text-justify">
              Conzura Group is a global education & technology company focused on
              skill development, industry-led training, and real-world project
              mentorship. Our programs are designed in collaboration with top
              engineers, CTOs, and industry leaders.
            </p>

            <p className="text-gray-700 leading-relaxed text-[17px] mb-4 text-justify">
              We help students and professionals transition into high-growth
              careers through structured learning paths, live mentorship, and
              hands-on project experience. Every learner receives personalized
              support, career guidance, and lifetime access to course content.
            </p>

            <p className="text-gray-700 leading-relaxed text-[17px] mb-4 text-justify">
              Trusted by thousands of learners, Conzura Group continues to build
              premium upskilling programs across technology, AI/ML, cloud, data
              science, cybersecurity, and more.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md border">
            <h2 className="text-3xl font-semibold text-[#0e355d] mb-4">
              Why Choose Us?
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-red-500">✔</span>
                Industry-certified instructors with 10+ years experience
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">✔</span>
                Structured, project-driven learning approach
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">✔</span>
                Lifetime access + recorded materials + certification
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">✔</span>
                Real-time doubt solving & dedicated mentors
              </li>
            </ul>
          </section>
        </div>

        {/* SIDEBAR – PAYMENT FORM */}
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
                  {courses.map((c: any) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
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
                  onClick={createPayment}
                  disabled={loading}
                >
                  {loading ? "Generating QR..." : "Generate Payment QR"}
                </button>
              </>
            )}

            {/* MOCK MARK PAID */}
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

            {/* SUCCESS */}
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

            {/* QR DISPLAY */}
            {qr && status !== "PAID" && (
              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold mb-3">Scan to Pay</h3>
                <img src={qr} className="w-56 mx-auto" />
                <p className="text-gray-600 mt-4">
                  Waiting for payment confirmation…
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
