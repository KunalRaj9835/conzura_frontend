"use client";

import { useState } from "react";
import Link from "next/link";

export default function CareersList({ jobs }: { jobs: any[] }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = jobs.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  const jobsPerPage = 5;
  const totalPages = Math.ceil(filtered.length / jobsPerPage);

  const startIndex = (page - 1) * jobsPerPage;
  const visibleJobs = filtered.slice(startIndex, startIndex + jobsPerPage);

  const handleSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <div className="font-[Poppins]">

      {/* TOP BAR */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 w-full gap-4">

        {/* TITLE */}
        <h1 className="text-3xl font-semibold text-[#0e355d] tracking-wide">
          Open Positions
        </h1>

        {/* PAGINATION */}
        {filtered.length > 0 && (
          <div className="flex items-center justify-center gap-4 text-gray-700 text-sm sm:text-base">

            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-3 py-1 rounded font-medium transition ${
                page === 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:text-red-500"
              }`}
            >
              Prev
            </button>

            <span className="font-medium">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded font-medium transition ${
                page === totalPages
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:text-red-500"
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search by title..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="border px-4 py-2 rounded w-full sm:w-64 focus:outline-none 
          focus:ring-2 focus:ring-red-500 font-light text-[15px] text-gray-700"
        />
      </div>

      {/* JOB CARDS */}
      <div className="space-y-6">
        {visibleJobs.map((job) => (
          <div
            key={job.id}
            className="border p-6 rounded-xl shadow-sm bg-white hover:shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold text-[#0e355d]">
              {job.title}
            </h2>

            <p className="text-gray-600 mt-2 text-[15px] font-light leading-relaxed">
              {job.short_description}
            </p>

            <div className="text-sm text-gray-500 mt-3 font-light">
              Experience: {job.experience} • Location: {job.place}
            </div>

            <div className="flex gap-4 mt-5">

              <Link
                href={`/careers/${job.id}`}
                className="px-4 py-2 border border-red-500 text-red-500 
                rounded-lg hover:bg-red-500 hover:text-white transition text-sm font-medium"
              >
                Read More
              </Link>

              <Link
                href={`https://payments.cashfree.com/forms/gniriharuznoc`}
                className="px-4 py-2 bg-red-500 text-white rounded-lg 
                hover:bg-red-600 transition text-sm font-medium"
              >
                Apply
              </Link>

            </div>
          </div>
        ))}

        {filtered.length === 0 && (
  <p className="text-center py-20 text-2xl font-semibold text-[#0e355d]">
    No jobs found
    {query ? ` for "${query}"` : ""}
  </p>
)}

      </div>

      {/* BOTTOM PAGINATION */}
      {filtered.length > 0 && (
        <div className="flex justify-center items-center gap-6 mt-10 text-base text-gray-700">

          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`px-3 py-1 rounded font-medium transition ${
              page === 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:text-red-500"
            }`}
          >
            Prev
          </button>

          <span className="font-medium">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={`px-3 py-1 rounded font-medium transition ${
              page === totalPages
                ? "opacity-30 cursor-not-allowed"
                : "hover:text-red-500"
            }`}
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
}
