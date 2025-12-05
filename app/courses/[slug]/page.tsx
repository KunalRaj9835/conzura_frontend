import seedData from "@/data/seed.json";
import Footer from "@/components/Footer";
import ClientActions from "./ClientActions";

export default async function CourseDetails({ params }: any) {
  const { slug } = await params;

  const courses = seedData.courses || [];
  const instructors = seedData.instructors || [];
  const courseExtra = seedData.courseextra as Record<
    string,
    { learn: string[]; audience: string[] }
  >;

  const course = courses.find((c: any) => c.slug === slug);

  if (!course) {
    return (
      <div className="p-10 text-center text-xl font-semibold text-red-600 font-[Poppins]">
        Course Not Found
      </div>
    );
  }

  const instructor = instructors.find((i: any) => i.id === course.instructor);
  const extra = courseExtra[course.id] || null;

  return (
    <div className="font-[Poppins] pt-10">

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#0e355d] to-[#1a5490] text-white py-16 shadow-lg">
        <div className="max-w-6xl mx-auto px-6">

          <span className="inline-block bg-red-500 px-4 py-1.5 rounded-md text-sm font-semibold tracking-wide mb-4">
            {course.category}
          </span>

          <h1 className="text-5xl font-bold mb-4 leading-tight">
            {course.title}
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            {course.shortDescription}
          </p>

          {/* HERO META */}
          <div className="flex flex-wrap gap-4 mt-8">
  {/* Rating */}
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
    <img
      src="/course/star2.svg"
      alt="rating"
      className="w-5 h-5"
    />
    <span className="font-semibold text-gray-100">{course.rating}</span>
  </div>

  {/* Students */}
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
    <img
      src="/course/people.svg"
      alt="students"
      className="w-7 h-7"
    />
    <span className="text-gray-100">
      {course.studentsEnrolled.toLocaleString()} students
    </span>
  </div>

  {/* Duration */}
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
    <img
      src="/course/hourglass.svg"
      alt="duration"
      className="w-7 h-7"
    />
    <span className="text-gray-100">{course.duration}</span>
  </div>

  {/* Level */}
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
    <img
      src="/course/award.svg"
      alt="level"
      className="w-7 h-7"
    />
    <span className="text-gray-100">{course.level}</span>
  </div>
</div>

        </div>
      </div>

      {/* BODY */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-12">

          {/* ABOUT */}
          <section className="bg-white p-8 rounded-xl shadow-md border">
            <h2 className="text-3xl font-semibold text-[#0e355d] mb-4">
              About This Course
            </h2>
            <p className="text-gray-700 leading-relaxed text-[17px]">
              {course.description}
            </p>
          </section>

          {/* WHAT YOU'LL LEARN */}
          {extra?.learn && (
            <section className="bg-white p-8 rounded-xl shadow-md border">
              <h2 className="text-3xl font-semibold text-[#0e355d] mb-6">
                What You'll Learn
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extra.learn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 text-lg">✔</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SYLLABUS */}
          <section className="bg-white p-8 rounded-xl shadow-md border">
            <h2 className="text-3xl font-semibold text-[#0e355d] mb-6">
              Course Syllabus
            </h2>

            <div className="space-y-4">
              {course.syllabus.map((week) => (
                <div
                  key={week.week}
                  className="rounded-xl border hover:border-red-400 transition shadow-sm p-5 bg-gray-50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-md text-sm font-semibold">
                      WEEK {week.week}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {week.title}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {week.topics.map((topic, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-700">
                        <span className="text-red-500 mt-1 text-sm">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* AUDIENCE */}
          {extra?.audience && (
            <section className="bg-white p-8 rounded-xl shadow-md border">
              <h2 className="text-3xl font-semibold text-[#0e355d] mb-6">
                Who Is This Course For?
              </h2>

              <div className="space-y-4">
                {extra.audience.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 text-lg">✔</span>
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* INSTRUCTOR */}
          {instructor && (
            <section className="bg-white p-8 rounded-xl shadow-md border">
              <h2 className="text-3xl font-semibold text-[#0e355d] mb-6">
                Your Instructor
              </h2>

              <div className="flex gap-6">
                <img
                  src={instructor.image}
                  className="w-24 h-24 rounded-full object-cover border"
                />

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {instructor.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{instructor.title}</p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {instructor.bio}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
  {/* rating block */}
  <div className="flex items-center gap-1">
    <img
      src="/course/star2.svg"
      alt="rating"
      className="w-2.7 h-2.5"
    />
    <span>{instructor.rating} rating</span>
  </div>

  <span>• {instructor.studentsCount.toLocaleString()} learners</span>
  <span>• {instructor.coursesCount} courses</span>
</div>

                </div>
              </div>
            </section>
          )}
        </div>

        {/* SIDEBAR */}
        <div>
          <div className="sticky top-6 bg-white border rounded-xl shadow-lg overflow-hidden">

            <img
              src={course.thumbnail}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              {/* PRICE */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-4xl font-bold text-green-600">
                    ₹{course.price}
                  </span>
                  <span className="line-through text-gray-400 text-xl">
                    ₹{course.originalPrice}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Limited seats • Includes certification & lifetime access
                </p>
              </div>

              {/* CTA */}
              <ClientActions slug={course.slug} />

              {/* FEATURES */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  This course includes
                </h3>

                <div className="space-y-3">
                  {course.features?.map((feature, idx) => (
                    <div key={idx} className="flex gap-2 text-gray-700 text-sm">
                      <span className="text-red-500 mt-1 text-sm">✔</span>
                      {feature}
                    </div>
                  ))}

                  <div className="flex gap-2 text-gray-700 text-sm">
                    <span className="text-red-500 mt-1 text-sm">✔</span>
                    30-day satisfaction guarantee
                  </div>

                  <div className="flex gap-2 text-gray-700 text-sm">
                    <span className="text-red-500 mt-1 text-sm">✔</span>
                    Flexible batch timings & mentor support
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
