"use client";
import React, { useState, useEffect } from "react";
import "./banner.css";

// Define the BannerData interface
interface BannerData {
  title: string;
  description: string;
  imageUrl: string;
  formFields: {
    label: string;
    type: string;
    placeholder?: string;
    options?: string[];
  }[];
  buttonText: string;
  footerText: string;
  footerLinkText: string;
  footerLinkUrl: string;
  backgroundColor: string;
}

const BannerWithForm: React.FC = () => {
  // Define different data objects for each banner
  const bannerDataArray: BannerData[] = [
    {
      title: "Study",
      description: "Want to Study Abroad? Let us help with your application.",
      imageUrl: "/images/study.jpg", // Ensure the image exists in the public folder
      formFields: [
        { label: "I am", type: "text", placeholder: "Full Name" },
        {
          label: "Preferred Country",
          type: "select",
          placeholder: "Select Country",
          options: ["Australia", "Canada", "Germany"],
        },
        { label: "Phone Number", type: "text", placeholder: "Your phone number" },
        { label: "Email Address", type: "email", placeholder: "Your email address" },
      ],
      buttonText: "Apply Now",
      footerText: "Have questions?",
      footerLinkText: "Talk to us",
      footerLinkUrl: "/contact",
      backgroundColor: "#4caf50",
    },
  ];

  return (
    <div className="bannerContainer">
      {bannerDataArray.map((data, index) => (
        <section
          key={index}
          className="paddingSection p-4 sm:p-8"
          style={{ backgroundColor: data.backgroundColor }}
        >
          <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-stretch rounded-lg overflow-hidden shadow-lg">
            {/* Left Side: Image and Text */}
            <div className="imgContainer lg:flex-1 flex flex-col justify-center items-center p-8">
              <img
                src={data.imageUrl}
                alt={data.title}
                className="bannerImg"
              />
            </div>

            {/* Right Side: Form */}
            <div className="bg-white p-6 sm:p-8 lg:flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {data.title}
              </h2>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                {data.description}
              </p>

              <form className="space-y-4">
                {data.formFields.map((field, idx) => (
                  <div key={idx}>
                    <label
                      className="block text-gray-700 font-medium mb-1"
                      htmlFor={`field-${idx}`}
                    >
                      {field.label}
                    </label>
                    {field.type === "select" && field.options ? (
                      <select
                        id={`field-${idx}`}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options.map((option, optionIdx) => (
                          <option key={optionIdx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={`field-${idx}`}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
                >
                  {data.buttonText}
                </button>
              </form>

              {/* Footer */}
              <div className="mt-6 text-gray-700 text-center">
                <span className="text-xl">🤔</span>
                <p>
                  <strong>{data.footerText}</strong>{" "}
                  <a
                    href={data.footerLinkUrl}
                    className="text-red-500 underline"
                  >
                    {data.footerLinkText}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BannerWithForm;
