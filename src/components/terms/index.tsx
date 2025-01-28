"use client";
import { useEffect } from "react";

type TermsAndServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TermsAndServiceModal = ({ isOpen, onClose }: TermsAndServiceModalProps) => {
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

        <h2 className="text-2xl font-bold mb-4 text-dark dark:text-white">Terms and Service</h2>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          Welcome to Pinnacle Study! By using our services, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">1. Introduction</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          These terms govern your use of our website and services. By accessing our website, you agree to comply with these terms and conditions.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">2. Use of Services</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          You may use our services only for lawful purposes and in accordance with our terms. Any misuse or illegal activity is strictly prohibited.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">3. Account Responsibility</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          You are responsible for maintaining the confidentiality of your account details and for all activities under your account.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">4. Data Privacy</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          We respect your privacy and are committed to safeguarding your personal data. For details, please review our Privacy Policy.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">5. Limitation of Liability</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          We are not liable for any damages or losses arising from the use or inability to use our website or services.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">6. Changes to the Terms</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          We may update these terms from time to time. We will notify you of significant changes by posting an updated version on our website.
        </p>

        <h3 className="font-semibold mt-4 text-dark dark:text-white">7. Contact Information</h3>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-justify">
          If you have any questions or concerns regarding these terms, please contact us at support@pinnaclestudy.com.
        </p>
      </div>
    </div>
  );
};

export default TermsAndServiceModal;
