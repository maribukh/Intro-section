import Button from "../Button/Button";
import "../HeroSection/HeroSection.css";

export default function HeroSection() {
  return (
    <>
      <div className="container">
        <div className="left">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituale, and watch productivity soar.
          </p>
          <Button className="btn-main" text="Learn More" />
        </div>
      </div>
    </>
  );
}
