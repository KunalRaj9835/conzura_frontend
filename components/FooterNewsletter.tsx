"use client";

import { useState } from "react";
import Link from "next/link";

export default function FooterNewsletter() {
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [msgType, setMsgType] = useState<"success" | "error" | "">("");

  const isValidEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubscribe = async (): Promise<void> => {
    setMsg("");
    setMsgType("");

    if (!email || !isValidEmail(email)) {
      setMsg("Enter a valid email address.");
      setMsgType("error");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/newsletter/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data: { message?: string } = await res.json();

      if (res.status === 200) {
        setMsg("Subscribed successfully");
        setMsgType("success");
      } else if (res.status === 400) {
        setMsg(data.message || "Email already exists");
        setMsgType("error");
      } else {
        setMsg("Server error. Try again later.");
        setMsgType("error");
      }
    } catch (err) {
      setMsg("Unable to connect to server.");
      setMsgType("error");
    }
  };

  return (
    <section className="bg-[#0e355d] py-16 px-6 relative overflow-hidden text-sm">

      <div className="absolute bottom-0 left-0 w-full h-10 bg-[#2399b0] transform rotate-[-2deg] origin-left"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">

        <div>
          <h2 className="text-2xl font-semibold text-[#2399b0] leading-snug">
            Don't Miss Out on Our New
            <br /> Product
          </h2>
        </div>

        <div className="flex flex-col gap-3">

          {/* Message Container */}
          <div className="h-10">
            {msg && (
              <div
                className={`p-3 rounded-lg text-xs h-full flex items-center transition-opacity duration-200 ${
                  msgType === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {msg}
              </div>
            )}
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email ID"
            className="w-full p-3 rounded-lg bg-white text-gray-700 outline-none text-sm"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />

          {/* Submit Button */}
          <button
            onClick={handleSubscribe}
            className="inline-flex items-center justify-center bg-red-500 text-white font-medium w-full h-11 rounded-md transition-all duration-300 hover:bg-red-600 text-sm"
          >
            Subscribe
          </button>

        </div>
      </div>
    </section>
  );
}
