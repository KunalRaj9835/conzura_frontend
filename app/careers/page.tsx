import Link from "next/link";
import Footer from "@/components/Footer";
import CareersList from "./CareersList";

async function getJobs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 py-20">

        <CareersList jobs={jobs} />
      </div>

      <Footer />
    </div>
  );
}
