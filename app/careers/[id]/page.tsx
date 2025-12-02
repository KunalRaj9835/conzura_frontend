import Link from "next/link";

async function getJobById(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch job:", res.status);
    return null;
  }

  return res.json();
}

export default async function JobDetailsPage(props: any) {
  const { id } = await props.params;
  const job = await getJobById(id);

  if (!job) {
    return (
      <div className="p-10 text-center text-gray-600 font-[Poppins]">
        Job not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-14 font-[Poppins]">

      {/* TITLE */}
      <div>
        <h1 className="text-4xl font-semibold text-[#0e355d] tracking-wide">
          {job.title}
        </h1>
      </div>

      {/* JOB META INFO */}
      <div className="grid sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border shadow-sm">

        {[
          { label: "Experience", value: job.experience },
          { label: "Location", value: job.place },
          { label: "Salary", value: job.salary },
          { label: "Job Type", value: job.job_type },
          { label: "Open Positions", value: job.open_positions },
          { label: "Category", value: job.category },
          { label: "Graduation", value: job.graduation },
          { label: "Process", value: job.process },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-gray-500 text-sm">{item.label}</p>
            <p className="font-medium text-[16px] mt-1">
              {item.value || "—"}
            </p>
          </div>
        ))}

      </div>

      {/* ELIGIBILITY */}
      <div>
        <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">
          Eligibility
        </h2>
        <p className="text-gray-700 leading-relaxed text-[16px] font-light">
          {job.eligibility}
        </p>
      </div>

      {/* FULL DESCRIPTION */}
      <div>
        <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">
          Job Description
        </h2>
        <p className="text-gray-700 leading-relaxed text-[16px] font-light whitespace-pre-line">
          {job.full_description}
        </p>
      </div>

      {/* REQUIRED TECHNOLOGIES */}
      {job.required_technologies?.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Required Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {job.required_technologies.map((t: string) => (
              <span
                key={t}
                className="px-4 py-2 bg-gray-100 border rounded-md text-gray-700 text-[14px] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* NICE TO HAVE */}
      {job.nice_to_have && (
        <div>
          <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">
            Nice to Have
          </h2>
          <p className="text-gray-700 text-[16px] font-light leading-relaxed">
            {job.nice_to_have}
          </p>
        </div>
      )}

      {/* APPLY BUTTON */}
      <div className="pt-4">
        <Link
          href={`https://payments.cashfree.com/forms/gniriharuznoc`}
          className="px-8 py-3 bg-red-500 text-white text-lg rounded-lg 
          hover:bg-red-600 transition font-medium tracking-wide"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
