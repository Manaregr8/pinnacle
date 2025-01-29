import Link from "next/link";
import "./hero.css";
const Hero = () => {

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px] backgroundbannerColor"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
  <div
    className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
    data-wow-delay=".2s"
  >
    <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
      {`Your Trusted Partner in Global Opportunities`}
    </h1>
    <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44] ">
      {`At Pinnacle Study, we are committed to helping individuals navigate the complex world of immigration, study abroad, and work opportunities. 
      Whether you're looking to study at top international universities, work abroad, or migrate for better prospects, our expert team is here to guide you through every step.`}
    </p>  
    <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
      <li>
        <Link
          href={`https://wa.me/917618367236`}
          target="_blank"
          className="stylesLink flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          <svg
            className="fill-current text-white transition-colors duration-300 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 509 511.514"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M434.762 74.334C387.553 26.81 323.245 0 256.236 0h-.768C115.795.001 2.121 113.696 2.121 253.456l.001.015a253.516 253.516 0 0033.942 126.671L0 511.514l134.373-35.269a253.416 253.416 0 00121.052 30.9h.003.053C395.472 507.145 509 393.616 509 253.626c0-67.225-26.742-131.727-74.252-179.237l.014-.055zM255.555 464.453c-37.753 0-74.861-10.22-107.293-29.479l-7.72-4.602-79.741 20.889 21.207-77.726-4.984-7.975c-21.147-33.606-32.415-72.584-32.415-112.308 0-116.371 94.372-210.743 210.741-210.743 56.011 0 109.758 22.307 149.277 61.98a210.93 210.93 0 0161.744 149.095c0 116.44-94.403 210.869-210.844 210.869h.028zm115.583-157.914c-6.363-3.202-37.474-18.472-43.243-20.593-5.769-2.121-10.01-3.202-14.315 3.203-4.305 6.404-16.373 20.593-20.063 24.855-3.69 4.263-7.401 4.815-13.679 1.612-6.278-3.202-26.786-9.883-50.899-31.472a192.748 192.748 0 01-35.411-43.867c-3.712-6.363-.404-9.777 2.82-12.873 3.224-3.096 6.363-7.381 9.48-11.092a41.58 41.58 0 006.357-10.597 11.678 11.678 0 00-.508-11.09c-1.718-3.18-14.444-34.357-19.534-47.06-5.09-12.703-10.37-10.603-14.272-10.901-3.902-.297-7.911-.19-12.089-.19a23.322 23.322 0 00-16.964 7.911c-5.707 6.298-22.1 21.673-22.1 52.849s22.671 61.249 25.852 65.532c3.182 4.284 44.663 68.227 108.288 95.649 15.099 6.489 26.891 10.392 36.053 13.403a87.504 87.504 0 0025.216 3.718c4.905 0 9.82-.416 14.65-1.237 12.174-1.782 37.453-15.291 42.776-30.073s5.303-27.57 3.711-30.093c-1.591-2.524-5.704-4.369-12.088-7.615l-.038.021z"
            />
          </svg>
          WhatsApp Us
        </Link>
      </li>
    </ul>
  </div>
</div>



        
      </div>
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
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="50"
              />
              <circle
                cx="446"
                r="39"
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="20"
              />
              <path
                d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                stroke="white"
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
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="50"
              />
              <circle
                cx="49"
                cy="470"
                r="39"
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="20"
              />
              <path
                d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                stroke="white"
                strokeOpacity="0.06"
                strokeWidth="13"
              />
            </svg>
          </span>
    </div >
      </section >
    </>
  );
};

export default Hero;
