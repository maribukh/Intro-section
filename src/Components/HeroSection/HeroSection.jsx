import Button from "../Button/Button";
import "../HeroSection/HeroSection.css";
import Partners from "../Partners/Partners";
import mainPic from "../../assets/images/image-hero-desktop.png";

export default function HeroSection() {
  return (
    <>
      <div className="hero-container container">
        <div className="left">
          <div className="top">
            {" "}
            <h1>
              Make <br /> remote work
            </h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituale, and watch productivity soar.
            </p>
            <Button className="btn-main" text="Learn More" />
          </div>
          <Partners />
        </div>
        <div className="picture">
          <img src={mainPic} alt="loading..." />
        </div>
      </div>
    </>
  );
}
