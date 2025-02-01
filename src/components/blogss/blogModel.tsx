"use client";
import { useEffect } from "react";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose, title, content }) => {
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

        <h2 className="text-2xl font-bold mb-4 text-dark dark:text-white">{title}</h2>
        <div className="text-lg text-body-color dark:text-dark-6 text-justify" dangerouslySetInnerHTML={{ __html: content }} />

        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BlogModal;
