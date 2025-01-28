"use client";
import { useEffect } from "react";

type PrivacyPolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when the modal is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when the modal is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center lg:items-center items-end z-50">
      <div className="bg-white dark:bg-dark-2 p-6 w-[90%] lg:w-[60vh] lg:h-[60vh] h-[80vh] rounded-lg overflow-y-auto mb-5 relative">
        <button
          className="absolute top-4 right-4 text-lg font-bold text-gray-900 dark:text-white hover:text-gray-900"
          onClick={onClose}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nO2VXQrCMBAGxwtalZY86NkVLP6hN6hQCaQgJdXdsFHEDOQt+02TbBooFP6JBrgBB2ChqFsCJ+AK1FrpLBT2YXSAE9S5MHeo8xlqLk8BEvlY6sc5RbyKBE3JY9IuZCRRRwLvwGbUC7E561SpRJ5N+m4rpUdhvvJsK5XKs0qZONNYw31E2ueUu280V/Piykjuubl0wFxeGfwyfYaa1uCR2KeIjwbPos9QU4Uv3iq3zM/dhdp5irhQ+E0ekyummbane5EAAAAASUVORK5CYII="
            alt="multiply"
          />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-dark dark:text-white">Privacy Policy</h2>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          At Pinnacle Study, we are committed to protecting your privacy
          and ensuring that your personal information is secure. This Privacy
          Policy explains how we collect, use, and safeguard your personal
          information.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">1. Information We Collect</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          We collect personal information when you interact with our website
          or services. This includes information such as your name, email
          address, phone number, and any other details provided through forms
          or sign-ups.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">2. How We Use Your Information</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          We use your personal information to provide our services, respond
          to your inquiries, and keep you updated on relevant services and
          opportunities. We may also use your data for internal purposes such
          as improving our services.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">3. Data Protection</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          We take the security of your data seriously. We implement
          appropriate measures to safeguard your personal information against
          unauthorized access, alteration, or destruction.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">4. Cookies and Tracking Technologies</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          Our website uses cookies and other tracking technologies to
          enhance your user experience. These technologies help us understand
          how users interact with our website and enable us to improve our
          services.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">5. Sharing Your Information</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          We do not sell, rent, or trade your personal information. However,
          we may share your data with trusted third-party service providers
          who assist us in delivering our services, subject to strict
          confidentiality agreements.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">6. Your Rights</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          You have the right to access, correct, or delete your personal
          information. You can also opt-out of receiving marketing
          communications at any time.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">7. Changes to This Privacy Policy</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          We may update this Privacy Policy from time to time. We will notify
          you of any significant changes by posting the updated policy on our
          website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
