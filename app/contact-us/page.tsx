'use client';

import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { getCountryCallingCode } from 'react-phone-number-input';
import Footer from '@/components/Footer';
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>('IN');
  const [phoneInput, setPhoneInput] = useState('');

  const [serverMsg, setServerMsg] = useState("");
  const [serverMsgType, setServerMsgType] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length !== 10) {
        newErrors.phone = 'Phone number must be exactly 10 digits';
      }
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setServerMsg("");
    setServerMsgType("");

    if (!recaptchaChecked) {
      setServerMsg("Please verify that you are not a robot");
      setServerMsgType("error");
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Get country calling code and combine with phone number
      const countryCode = selectedCountry ? getCountryCallingCode(selectedCountry) : '91';
      const phoneWithCountryCode = `+${countryCode}${formData.phone.replace(/\D/g, '')}`;
      
      const submissionData = {
        ...formData,
        phone: phoneWithCountryCode
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        }
      );

      const data = await res.json();

      if (res.status === 200) {
        setServerMsg("Form submitted successfully!");
        setServerMsgType("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });

        setPhoneInput('');
        setRecaptchaChecked(false);

      } else if (res.status === 400) {
        setServerMsg(data.message || "Validation error");
        setServerMsgType("error");
      } else {
        setServerMsg("Server error. Try again later.");
        setServerMsgType("error");
      }

    } catch (err) {
      setServerMsg("Unable to connect to server.");
      setServerMsgType("error");
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Extract only digits and limit to 10
    const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
    setPhoneInput(digitsOnly);
    setFormData(prev => ({ ...prev, phone: digitsOnly }));
    
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  // Handle autofill - extract last 10 digits from any format
  const handlePhoneBlur = () => {
    if (phoneInput) {
      const digitsOnly = phoneInput.replace(/\D/g, '');
      const last10Digits = digitsOnly.slice(-10);
      setPhoneInput(last10Digits);
      setFormData(prev => ({ ...prev, phone: last10Digits }));
    }
  };

  return (
    <div>
    <div className="min-h-screen bg-white">
      
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <div className="text-black">
              <h1 className="text-4xl md:text-5xl font-extralight mb-6">
                Get in Touch with<br />conzura Tech
              </h1>
              
              <p className="text-lg mb-6 text-black text-justify">
                At conzura Tech, we specialize in providing end-to-end recruitment solutions tailored to meet your unique needs.
              </p>
              
              <p className="text-lg mb-6 text-black text-justify">
                Discover how our comprehensive services, including
              </p>
              
              <ul className="space-y-3 mb-8 text-justify">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-2xl">✓</span>
                  <span className="text-black">Talent Intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-2xl">✓</span>
                  <span className="text-black">Talent Acquisition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-2xl">✓</span>
                  <span className="text-black">Global PEO & EOR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-2xl">✓</span>
                  <span className="text-black">Remote Hiring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-2xl">✓</span>
                  <span className="text-black">Recruitment Process Outsourcing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-2xl">✓</span>
                  <span className="text-black">Board Room Hiring</span>
                </li>
              </ul>
              
              <p className="text-lg text-black text-justify">
                can transform your hiring process. Contact us today to connect with top-tier talent and streamline your recruitment strategy.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              
              <h2 className="text-3xl font-extralight text-gray-900 mb-2">
                Contact us
              </h2>

              <p className="text-gray-600 mb-6">
                Everything you need to grow your business.<br />
                Order our services today!
              </p>

              <div className="space-y-5">

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2 items-center">
  <div className="shrink-0">
    <PhoneInput
      international={false}
      withCountryCallingCode={false}
      defaultCountry="IN"
      country={selectedCountry}
      onCountryChange={setSelectedCountry}
      value=""
      onChange={() => {}}
      countrySelectProps={{
        className:
          "border border-gray-300 rounded-md px-2 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      }}
      numberInputProps={{
        style: { display: 'none' }
      }}
    />
  </div>

  <input
    type="text"
    value={phoneInput}
    onChange={handlePhoneInputChange}
    onBlur={handlePhoneBlur}
    placeholder="Enter 10 digit number"
    maxLength={10}
    className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
</div>

                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Comment or Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    checked={recaptchaChecked}
                    onChange={(e) => setRecaptchaChecked(e.target.checked)}
                    className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="recaptcha" className="text-sm text-gray-700">
                    I'm not a robot
                  </label>
                </div>

                <div className="h-12">
                  {serverMsg && (
                    <div
                      className={`p-3 rounded-md text-sm h-full flex items-center ${
                        serverMsgType === "success"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {serverMsg}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors disabled:bg-blue-400"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4385825869897!2d78.55076131487748!3d17.376914888065743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c3ffffff8f%3A0x3b9e3b3d3b3d3b3d!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              className="w-full"
              style={{ height: '400px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="conzura Location"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}