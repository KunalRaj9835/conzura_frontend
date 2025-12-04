"use client";

import { useState } from "react";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
}

export default function CoursesList({ courses }: { courses: Course[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  const filtered = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.shortDescription?.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  const perPage = 6;
  const totalPages = Math.ceil(filtered.length / perPage);
  const start = (page - 1) * perPage;
  const visible = filtered.slice(start, start + perPage);

  function handleSearch(value: string) {
    setQuery(value);
    setPage(1);
  }

  function handleCategory(value: string) {
    setCategory(value);
    setPage(1);
  }

  return (
    <div>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center mb-10">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search by course name..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-64 
          focus:ring-2 focus:ring-red-500 outline-none text-sm"
        />

        {/* CATEGORY */}
        <select
          value={category}
          onChange={(e) => handleCategory(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-52 
          focus:ring-2 focus:ring-red-500 outline-none text-sm"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        {/* RESULTS COUNT */}
        <div className="text-gray-700 font-medium">
          Showing {filtered.length} {filtered.length === 1 ? "course" : "courses"}
        </div>
      </div>

      {/* COURSES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((course) => (
          <div key={course.id} className="border rounded-xl shadow-sm p-4 bg-white hover:shadow-md transition">

            <div className="h-40 w-full overflow-hidden rounded-lg">
              <img
                src={course.thumbnail}
                className="h-full w-full object-cover"
                alt={course.title}
              />
            </div>

            <div className="mt-4">
              <div className="text-sm text-red-600 font-medium">
                {course.category}
              </div>

              <h3 className="text-lg font-semibold text-[#0e355d] mt-1">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {course.shortDescription}
              </p>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-red-600 font-semibold text-base">
                  ₹{course.price}
                </span>

                <Link
                  href={`/courses/${course.slug}`}
                  className="px-3 py-1 border border-red-500 text-red-500 rounded-lg
                    hover:bg-red-500 hover:text-white text-sm font-medium transition"
                >
                  View details
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <p className="text-center py-16 text-2xl font-semibold text-[#0e355d]">
          No courses found
          {query ? ` for "${query}"` : ""}
        </p>
      )}

      {/* PAGINATION */}
      {filtered.length > 0 && (
        <div className="flex justify-center items-center gap-6 mt-12 text-base text-gray-700">
          
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`px-3 py-1 rounded font-medium transition ${
              page === 1 ? "opacity-30 cursor-not-allowed" : "hover:text-red-500"
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
              page === totalPages ? "opacity-30 cursor-not-allowed" : "hover:text-red-500"
            }`}
          >
            Next
          </button>

        </div>
      )}
    </div>
  );
}
