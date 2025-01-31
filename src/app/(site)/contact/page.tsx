import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import "../../globals.css";
export const metadata: Metadata = {
  title: "Contact Us | Pinnacle Study",
  description: "Get in touch with Pinnacle Study for expert guidance on visas, study abroad opportunities, work and migration services. Reach out to us for personalized support and solutions tailored to your international goals.",
  keywords: [
    "Contact Pinnacle Study", "visa consultancy contact", "study abroad contact", "migration experts contact", "visa assistance contact", 
    "get in touch with Pinnacle Study", "visa agents near me", "contact visa consultants", "study abroad assistance", "visa application support", 
    "student visa consultants", "work visa consultants", "PR visa assistance contact", "visa documentation help", "personalized visa solutions", 
    "visa interview preparation contact", "visa coaching contact", "migration services contact", "reach out for visa guidance", "contact immigration consultants", 
    "study abroad experts contact", "visa consultancy address", "contact for study visa", "contact for work visa", "contact for migration services", 
    "Pinnacle Study contact details", "visa consultancy phone number", "visa consultancy email", "visa application helpline", "contact trusted visa consultants", 
    "international education assistance contact", "global opportunities contact", "best visa consultants contact", "help with visa process contact", 
    "student visa guidance contact", "visa agency support contact", "affordable visa consultancy contact"
  ],
};


const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" />
      <Contact />
      
    </>
  );
};

export default ContactPage;
