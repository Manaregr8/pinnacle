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
      title: "Work",
      description: "Want to Work Overseas? Avail our Job Search Services",
      imageUrl: "/images/work.jpg", // Ensure the image exists in the public folder
      formFields: [
        { label: "I am", type: "text", placeholder: "Name" },
        {
          label: "Looking to work in",
          type: "select",
          placeholder: "Select Country",
          options: [
            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", 
            "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
            "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", 
            "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
            "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
            "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", 
            "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
            "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", 
            "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", 
            "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
            "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", 
            "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
            "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", 
            "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", 
            "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
            "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
            "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", 
            "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", 
            "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", 
            "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", 
            "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", 
            "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", 
            "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", 
            "Zambia", "Zimbabwe"
          ],
        },
        { label: "You can contact me at", type: "text", placeholder: "Mobile No." },
        { label: "and Email", type: "email", placeholder: "Email ID" },
      ],
      buttonText: "Submit",
      footerText: "Don’t know what to do?",
      footerLinkText: "Get Free Consultation",
      footerLinkUrl: "/consultation",
      backgroundColor: "#38bdf8", // Set background color
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
                <p>{data.footerText}</p>
                <a
                  href="https://wa.me/917618367236"
                  className="text-teal-600 hover:text-teal-700"
                >
                  {data.footerLinkText}
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BannerWithForm;
