import Link from "next/link";
import "./click.css";
const ClickToAction = () => {
  return (
    <div className="clickContainer">
      <div className="click">
      <Link href="https://wa.me/917618367236" className="links flex items-center justify-center">
        <img className="w-12 h-12" src="/icons/social.png" alt="Social" />
      </Link>
      <Link href="tel:+918506040783" className="links flex items-center justify-center">
        <img className="w-12 h-12" src="/icons/phone-call.png" alt="Phone Call" />
      </Link>
      </div>
    </div>
  );
};

export default ClickToAction;
