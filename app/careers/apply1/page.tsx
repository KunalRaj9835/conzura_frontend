"use client";

import React, { useState } from "react";

interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resume: File | null;
  letter: File | null;
}

export default function CareerApplyForm() {
  const [formData, setFormData] = useState<CareerFormData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
    letter: null,
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.experience.trim()) newErrors.experience = "Experience is required";
    if (!formData.resume) newErrors.resume = "Resume upload is mandatory";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      alert("Application submitted!");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    if (errors[name]) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const removeFile = (field: "resume" | "letter") => {
    setFormData((prev) => ({ ...prev, [field]: null }));
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE – BENEFITS */}
          <div className="text-black">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0e355d]">
              Why Join conzura Tech?
            </h1>

            <p className="text-lg mb-6 text-gray-700">
              Become part of a fast-growing tech workforce solutions company where your skills create meaningful impact.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-2xl">✓</span>
                <span>Work with global clients & modern tech teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-2xl">✓</span>
                <span>Career growth through training & development</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-2xl">✓</span>
                <span>Supportive, collaborative & inclusive culture</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-2xl">✓</span>
                <span>Opportunity to work on high-impact projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-2xl">✓</span>
                <span>Competitive compensation & clear growth paths</span>
              </li>
            </ul>

            <p className="text-lg text-gray-700">
              Submit your application and our recruitment team will reach out if your profile matches our requirements.
            </p>
          </div>

          {/* RIGHT SIDE – APPLY FORM */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply Now</h2>

            <div className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* PHONE */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* POSITION */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Position Applying For *
                </label>
                <input
                  name="position"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md"
                />
                {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
              </div>

              {/* EXPERIENCE */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Experience (in years) *
                </label>
                <input
                  type="number"
                  name="experience"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md"
                />
                {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
              </div>

              {/* RESUME */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Upload Resume (PDF/DOC) *
                </label>

                <label className="cursor-pointer inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                  Choose File
                  <input
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>

                {formData.resume && (
                  <div className="flex items-center mt-2">
                    <p className="text-sm text-gray-700 mr-3">
                      {formData.resume.name}
                    </p>
                    <span
                      className="text-red-600 cursor-pointer text-lg font-bold"
                      onClick={() => removeFile("resume")}
                    >
                      ×
                    </span>
                  </div>
                )}

                {errors.resume && (
                  <p className="text-red-500 text-sm">{errors.resume}</p>
                )}
              </div>

              {/* LETTER */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Upload Cover Letter (Optional)
                </label>

                <label className="cursor-pointer inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                  Choose File
                  <input
                    name="letter"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>

                {formData.letter && (
                  <div className="flex items-center mt-2">
                    <p className="text-sm text-gray-700 mr-3">
                      {formData.letter.name}
                    </p>
                    <span
                      className="text-red-600 cursor-pointer text-lg font-bold"
                      onClick={() => removeFile("letter")}
                    >
                      ×
                    </span>
                  </div>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full mt-4 bg-[#e5170f] hover:bg-[#AB130E] text-white py-3 rounded-md font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
