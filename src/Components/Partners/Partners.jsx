import "../Partners/Partners.css";
import firstPartner from "../../assets/images/client-databiz.svg";
import secondPartner from "../../assets/images/client-audiophile.svg";
import thirdPartner from "../../assets/images/client-meet.svg";
import fourPartner from "../../assets/images/client-maker.svg";

export default function Partners() {
  return (
    <>
      <div className="partner-section">
        <img src={firstPartner} alt="loading..." />
        <img src={secondPartner} alt="loading..." />
        <img src={thirdPartner} alt="loading..." />
        <img src={fourPartner} alt="loading..." />
      </div>
    </>
  );
}
