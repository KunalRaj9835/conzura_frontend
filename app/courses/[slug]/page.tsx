import seedData from "@/data/seed.json";
import Footer from "@/components/Footer";
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
      <div className="p-10 text-center text-xl font-semibold text-red-600">
        Course not found
      </div>
    );
  }

  const instructor = instructors.find((i: any) => i.id === course.instructor);
  const extra = courseExtra[course.id] || null;

  return (
    <div>
    <div className="font-[Poppins] pt-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0e355d] to-[#1a5490] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-3 inline-block px-4 py-1.5 bg-red-500 rounded-md text-sm font-medium uppercase tracking-wide">
            {course.category}
          </div>
          <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl mb-6 text-gray-100">{course.shortDescription}</p>

          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="font-semibold">{course.rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>{course.studentsEnrolled.toLocaleString()} students</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{course.level}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* About This Course */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0e355d] mb-4">About This Course</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {course.description}
            </p>
          </section>

          {/* What You'll Learn */}
          {extra?.learn && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0e355d] mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extra.learn.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Course Syllabus */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0e355d] mb-6">Course Syllabus</h2>
            <div className="space-y-4">
              {course.syllabus.map((week: any) => (
                <div key={week.week} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm font-medium">
                        WEEK {week.week}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">{week.title}</h3>
                    </div>
                  </div>
                  <ul className="p-4 space-y-2">
                    {week.topics.map((topic: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Who Is This Course For */}
          {extra?.audience && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0e355d] mb-6">Who Is This Course For?</h2>
              <div className="space-y-4">
                {extra.audience.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Your Instructor */}
          {instructor && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#0e355d] mb-6">Your Instructor</h2>
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{instructor.name}</h3>
                    <p className="text-gray-600 mb-3">{instructor.title}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{instructor.bio}</p>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <span>{instructor.rating} rating</span>
                      </div>
                      <span>• {instructor.studentsCount.toLocaleString()} learners</span>
                      <span>• {instructor.coursesCount} courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Sidebar - Price & Features */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 border border-gray-200 rounded-xl overflow-hidden shadow-lg">
            {/* Course Thumbnail */}
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            
            {/* Pricing Section */}
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-green-600">₹{course.price}</span>
                  <span className="text-xl text-gray-400 line-through">₹{course.originalPrice}</span>
                </div>
                <p className="text-sm text-gray-600">Limited seats • Includes certification & lifetime access</p>
              </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg mb-4 transition-colors">
              Enquire Now
            </button>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">This course includes</h3>
              <div className="space-y-3">
                {course.features?.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">30-day satisfaction guarantee</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Flexible batch timings & mentor support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}