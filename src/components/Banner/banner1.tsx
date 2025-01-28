"use client";
import React, { useState } from "react";
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

// Accept the API access key as a prop
interface BannerWithFormProps {
  contactFormAccess: string; // API key passed as prop
}

const BannerWithForm: React.FC<BannerWithFormProps> = ({ contactFormAccess }) => {
  const [result, setResult] = useState<string>("");

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

  // Handle form submission
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Ensure the form element is valid
    const form = event.currentTarget;
    if (!form) return;

    setResult("Sending...");
    const formData = new FormData(form);
    
    // Append the API access key dynamically
    formData.append("access_key", contactFormAccess);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();  // Reset the form safely
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

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

              {/* Form */}
              <form onSubmit={onSubmit} className="space-y-4">
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
                        name={field.label} // Ensure that field name is set for the API
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
                        name={field.label} // Ensure that field name is set for the API
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

              {/* Display submission result */}
              <span className="block mt-4 text-center text-gray-700">{result}</span>

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
