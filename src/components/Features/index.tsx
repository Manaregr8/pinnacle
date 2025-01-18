import SectionTitle from "../Common/SectionTitle";
import InfiniteCarousel from "./InfiniteCarousel";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="w-full pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px] overflow-hidden">
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="Our Clients"
          paragraph="Some major brands that we served to success!"
        />

        <div className="-mx-10 flex flex-wrap lg:mt-20">
          <InfiniteCarousel />
        </div>
      </div>
    </section>
  );
};

export default Features;
