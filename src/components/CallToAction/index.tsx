import Link from "next/link";
import "./clickevent.css";
const CallToAction = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden py-20 lg:py-[115px]" style={{backgroundColor:"#ffd539", color:"#333"}}>
        <div className="container mx-auto">
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap items-stretch">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[570px] text-center">
                  <h2 className="mb-2.5 text-3xl font-bold  md:text-[38px] md:leading-[1.44]">
                    <span data-pointer="hover">What Are You Looking For?</span>
                    <span data-pointer="hover" className="text-3xl font-normal md:text-[40px]">
                      {" "}
                      Let Us Handle Everything For You{" "}
                    </span>
                  </h2>
                  <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] " style={{color:"grey"}}>
                    Explore our Services, where cutting-edge technology meets practical solutions.
                  </p>
                  <Link
                    href="tel:+917618367236"
                    className="inline-block rounded-md border border-transparent px-7 py-3 text-base font-medium text-white transition hover:bg-[white]" style={{border: "2px solid #333",color:"#333"}}
                  >
                   Call Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="clickEventnone absolute left-0 top-0">
            <svg
              width="495"
              height="470"
              viewBox="0 0 495 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="55"
                cy="442"
                r="138"
                stroke="blue"
                strokeOpacity="0.04"
                strokeWidth="50"
              />
              <circle
                cx="446"
                r="39"
                stroke="blue"
                strokeOpacity="0.04"
                strokeWidth="20"
              />
              <path
                d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                stroke="blue"
                strokeOpacity="0.08"
                strokeWidth="12"
              />
            </svg>
          </span>
          <span className="clickEventnone absolute bottom-0 right-0">
            <svg
              width="493"
              height="470"
              viewBox="0 0 493 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="462"
                cy="5"
                r="138"
                stroke="blue"
                strokeOpacity="0.04"
                strokeWidth="50"
              />
              <circle
                cx="49"
                cy="470"
                r="39"
                stroke="blue"
                strokeOpacity="0.04"
                strokeWidth="20"
              />
              <path
                d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                stroke="blue"
                strokeOpacity="0.06"
                strokeWidth="13"
              />
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
