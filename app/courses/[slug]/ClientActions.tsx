"use client";

import { useRouter } from "next/navigation";

export default function ClientActions({ slug }: { slug: string }) {
  const router = useRouter();

  const handlePay = () => router.push(`/pay?course=${slug}`);
  const handleEnquire = () => router.push(`/enquiry?course=${slug}`);

  return (
    <>
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg mb-4 transition-colors"
        onClick={handlePay}
      >
        Pay Now
      </button>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg mb-4 transition-colors"
        onClick={handleEnquire}
      >
        Enquire Now
      </button>
    </>
  );
}
