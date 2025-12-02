

import Link from "next/link";
import Footer from "@/components/Footer";
import CareersList from "./CareersList";

async function getJobs() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    console.error("API Error:", res.status, await res.text());
    return [];
  }

  const contentType = res.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    const text = await res.text();
    console.error("Non-JSON response:", text);
    return [];
  }

  return res.json();
}


export default async function CareersPage() {
  const jobs = await getJobs();


  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow max-w-6xl mx-auto px-6 py-20">
        <CareersList jobs={jobs} />
      </div>

      <Footer />
    </div>
  );
}
