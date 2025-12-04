import Footer from "@/components/Footer";
import CoursesList from "./CoursesList";
import seedData from "@/data/seed.json";

export const dynamic = "force-dynamic";

async function getCourses() {
  // Replace with external API later:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`, { cache: "no-store" });
  // return res.json();

  return seedData.courses;
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen flex flex-col font-[Poppins] pt-10">
      <div className="bg-[#0e355d] text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold">Explore Programs & Courses</h1>
          <p className="mt-3 text-lg font-light opacity-90">
            Browse curated programs across technology, data, design and more.
          </p>
        </div>
      </div>

      <div className="flex-grow max-w-6xl mx-auto px-6 py-16">
        <CoursesList courses={courses} />
      </div>

      <Footer />
    </div>
  );
}
