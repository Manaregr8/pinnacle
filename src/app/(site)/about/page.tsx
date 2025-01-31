import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import YouTubeWidget from "@/components/youtubeComp";
export const metadata: Metadata = {
  title: "About Us | Pinnacle Study",
  description: "At Pinnacle Study, we are dedicated to empowering individuals to pursue their dreams of studying, working, and settling abroad. With a team of experienced consultants and a client-first approach, we provide tailored visa solutions, coaching services, and comprehensive support to make your international journey seamless.",
  keywords: [
    "About Pinnacle Study", "visa consultancy services", "study abroad experts", "about our visa consultants", "study visa services", 
    "work visa consultants", "migration experts", "student visa guidance", "about visa application services", "best visa consultants", 
    "personalized visa services", "immigration consultants", "study abroad assistance", "visa documentation support", "visa coaching services", 
    "visa interview preparation", "about our immigration services", "PR visa assistance", "study and work abroad", "trusted visa advisors", 
    "tailored visa solutions", "international student support", "about Pinnacle Study team", "work and settle abroad", 
    "education and visa consultancy", "reliable visa agents", "our mission and vision", "why choose Pinnacle Study", 
    "dedicated visa consultancy services", "expert migration consultants", "global opportunities assistance", "study abroad coaching", 
    "trusted immigration services", "comprehensive visa solutions"
  ],
};

const AboutPage = () => {
  return (
    <main>
      <div style={{marginTop:"50px"}}></div>
      <About />
      <YouTubeWidget/>
    </main>
  );
};

export default AboutPage;
