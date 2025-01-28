import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import "./globals.css";
import Banner from "@/components/Banner";
export const metadata: Metadata = {
  title: "Pinnacle Study | Home",
  description: "At Pinnacle Study, we specialize in providing comprehensive visa services and coaching to help you achieve your dreams of studying, working, or migrating abroad. With years of experience, we are dedicated to offering personalized assistance tailored to your unique goals and needs.",
  keywords: [
    "home page", "visa consultancy services", "visa application assistance", "visa agents near me", "immigration and visa services", "visa consultants for USA", 
    "visa consultants for Canada", "visa consultants for Australia", "visa consultants for UK", "visa consultants for Germany", "visa consultants for New Zealand", 
    "visa consultants for Ireland", "visa consultants for France", "visa consultants for Italy", "visa experts for study", "visa experts for work", 
    "visa experts for migration", "fast visa approval services", "online visa services", "visa documentation help", "personalized visa solutions", 
    "study visa consultants", "study abroad visa assistance", "student visa services", "best countries for student visas", "study visa for USA", 
    "study visa for Canada", "study visa for Australia", "study visa for UK", "study visa for Germany", "education visa consultancy", 
    "affordable study visa options", "scholarships and study visa guidance", "work visa consultants", "work visa application assistance", 
    "job visa services", "skilled worker visa consultancy", "work visa for USA", "work visa for Canada", "work visa for Australia", 
    "work visa for UK", "work visa for Germany", "employer-sponsored visa assistance", "seasonal work visa application", "work abroad opportunities", 
    "migration services", "immigration consultancy", "PR visa assistance", "permanent residency application help", "migration to Canada", 
    "migration to Australia", "migration to USA", "migration to Germany", "migration to New Zealand", "migration to Ireland", 
    "work and settle abroad", "family migration services", "spouse visa assistance", "dependent visa guidance", "business visa consultants", 
    "investor visa help", "startup visa assistance", "golden visa services", "digital nomad visa services", "coaching for visa interviews", 
    "visa interview preparation", "study and work abroad", "higher education visa assistance", "post-graduate visa services", "pathway programs for international students"
  ],
};

export default function Home() {

  return (
    <main>
      <ScrollUp />
      <Hero />
      <About />
      <CallToAction />
      <Testimonials />
      <Faq />
    {/*  <LinkedInPosts /> */}
      <Contact />
     {/* <Clients />*/}
    </main>
  );
}
