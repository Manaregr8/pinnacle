import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: " Amit Sharma",
    designation: "MBA Aspirant",
    content:
      "I can't thank Pinnacle Study One enough for their exceptional visa services. They guided me through the entire process, from selecting the right university abroad to preparing me for my visa interview. Their expertise and personalized approach made my dream of studying abroad a reality. Highly recommended!",
    image: "/images/brands/abhishek.jpg",
    star: 5,
  },

  {
    id: 2,
    name: " Rajiv Mehta",
    designation: "Student in Canada",
    content:
      "Pinnacle Study One helped me with everything – from the visa application to visa interviews for my study abroad journey. They took the time to understand my goals and provided tailored solutions. Thanks to their guidance, I am now studying in Canada. I would recommend them to anyone looking for expert visa services!",
    image: "/images/brands/komal.jpg",
    star: 5,
  },
  {
    id: 3,
    name: " Sarah Fernandez",
    designation: " IT Professional",
    content:
      "I approached Pinnacle Study One for my work visa, and the experience was seamless. The team’s in-depth knowledge and prompt support at every step of the process helped me secure my work visa in no time. Their coaching sessions for the interview were spot-on. A truly reliable partner for anyone looking to migrate!",
    image: "/images/brands/sachin.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonals" className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px] text-justify">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="Discover what our clients say about their journey with us!"
          width="640px"
          center
        />

        <div data-pointer="hover" className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
