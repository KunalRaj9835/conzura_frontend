"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ApplyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams.get("job_id");

  const [form, setForm] = useState({
    name: "",
    email: "",
    qualification: "",
    stream: "",
    passing_year: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [otherDocument, setOtherDocument] = useState<File | null>(null);

  const onNextStep = (e: any) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.qualification ||
      !form.stream ||
      !form.passing_year ||
      !resume
    ) {
      alert("Please fill all required fields and upload your Resume (mandatory).");
      return;
    }

    const payload = {
      form,
      jobId,
    };

    localStorage.setItem("application-data", JSON.stringify(payload));
    localStorage.setItem("resume", URL.createObjectURL(resume));

    if (coverLetter)
      localStorage.setItem("coverLetter", URL.createObjectURL(coverLetter));

    if (otherDocument)
      localStorage.setItem("otherDocument", URL.createObjectURL(otherDocument));

    router.push("/careers/apply/payment");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 font-[Poppins]">
      <h1 className="text-3xl font-semibold text-[#0e355d] mb-8 tracking-wide">
        Apply for Job
      </h1>

      <form onSubmit={onNextStep} className="space-y-7">
        {[
          { name: "name", placeholder: "Full Name" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "qualification", placeholder: "Qualification" },
          { name: "stream", placeholder: "Stream" },
          { name: "passing_year", placeholder: "Passing Year" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type || "text"}
            placeholder={field.placeholder}
            value={(form as any)[field.name]}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg text-[15px] 
            font-light focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        ))}

        {/* Resume */}
        <div>
          <label className="font-medium text-gray-700">Resume (PDF) *</label>
          <input
            id="resume"
            type="file"
            accept="application/pdf"
            onChange={(e) => setResume(e.target.files?.[0] || null)}
            required
            className="hidden"
          />
          <label
            htmlFor="resume"
            className="mt-2 inline-block text-blue-600 cursor-pointer hover:underline text-sm font-medium"
          >
            Upload Resume
          </label>
          {resume && <p className="text-sm text-green-600 mt-1">{resume.name}</p>}
        </div>

        {/* Cover Letter */}
        <div>
          <label className="font-medium text-gray-700">Cover Letter (Optional)</label>
          <input
            id="coverLetter"
            type="file"
            accept="application/pdf"
            onChange={(e) => setCoverLetter(e.target.files?.[0] || null)}
            className="hidden"
          />
          <label
            htmlFor="coverLetter"
            className="mt-2 inline-block text-blue-600 cursor-pointer hover:underline text-sm font-medium"
          >
            Upload Cover Letter
          </label>
          {coverLetter && <p className="text-sm text-green-600 mt-1">{coverLetter.name}</p>}
        </div>

        {/* Other Document */}
        <div>
          <label className="font-medium text-gray-700">Other Document (Optional)</label>
          <input
            id="otherDoc"
            type="file"
            accept="application/pdf"
            onChange={(e) => setOtherDocument(e.target.files?.[0] || null)}
            className="hidden"
          />
          <label
            htmlFor="otherDoc"
            className="mt-2 inline-block text-blue-600 cursor-pointer hover:underline text-sm font-medium"
          >
            Upload Document
          </label>
          {otherDocument && <p className="text-sm text-green-600 mt-1">{otherDocument.name}</p>}
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-red-500 text-white rounded-lg 
          hover:bg-red-600 transition text-[15px] font-medium tracking-wide"
        >
          Next Step
        </button>
      </form>
    </div>
  );
}
