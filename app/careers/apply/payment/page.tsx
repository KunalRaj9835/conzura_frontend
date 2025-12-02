"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  const [timer, setTimer] = useState(10);
  const [paymentStarted, setPaymentStarted] = useState(false);
  const [data, setData] = useState<any>(null);

  // Load saved application data
  useEffect(() => {
    const stored = localStorage.getItem("application-data");
    if (!stored) {
      router.push("/apply");
      return;
    }
    setData(JSON.parse(stored));
  }, []);

  // Countdown
  useEffect(() => {
    if (paymentStarted && timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }

    if (paymentStarted && timer === 0) {
      submitToBackend();
    }
  }, [paymentStarted, timer]);

  const startMockPayment = () => {
    setPaymentStarted(true);
  };

  const submitToBackend = async () => {
    const formPayload = new FormData();

    formPayload.append("job_id", data.jobId);
    formPayload.append("name", data.form.name);
    formPayload.append("email", data.form.email);
    formPayload.append("qualification", data.form.qualification);
    formPayload.append("stream", data.form.stream);
    formPayload.append("passing_year", data.form.passing_year);

    const resumeBlob = await fetch(localStorage.getItem("resume")!).then((r) =>
      r.blob()
    );
    formPayload.append("resume", resumeBlob, "resume.pdf");

    if (localStorage.getItem("coverLetter")) {
      const c = await fetch(localStorage.getItem("coverLetter")!).then((r) =>
        r.blob()
      );
      formPayload.append("cover_letter", c, "cover_letter.pdf");
    }

    if (localStorage.getItem("otherDocument")) {
      const o = await fetch(localStorage.getItem("otherDocument")!).then((r) =>
        r.blob()
      );
      formPayload.append("other_document", o, "other_document.pdf");
    }

    formPayload.append("payment_id", "mock-payment-" + Date.now());
    formPayload.append("order_id", "mock-order-" + Date.now());
    formPayload.append("signature", "mock-signature");

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/candidates/apply`, {
      method: "POST",
      body: formPayload,
    });

    localStorage.removeItem("application-data");
    localStorage.removeItem("resume");
    localStorage.removeItem("coverLetter");
    localStorage.removeItem("otherDocument");

    router.push("/careers");
  };

  if (!data) return null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center font-[Poppins]">

      <h1 className="text-3xl font-semibold text-[#0e355d] mb-8 tracking-wide">
        Payment Page
      </h1>

      {!paymentStarted && (
        <>
          <p className="text-gray-600 mb-6">Application Fee: ₹99</p>
          <button
            onClick={startMockPayment}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Pay Now (Mock)
          </button>
        </>
      )}

      {paymentStarted && (
        <>
          <h2 className="text-xl font-semibold mb-3">Processing Payment…</h2>
          <p className="text-gray-600 mb-4">Redirecting in {timer} seconds</p>

          <div className="animate-spin h-10 w-10 border-4 border-gray-300 border-t-red-500 rounded-full mx-auto" />
        </>
      )}
    </div>
  );
}
