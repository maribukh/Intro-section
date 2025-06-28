import logo from "../../assets/logo.svg";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import Button from "../Button/Button";
import "../Header/Header.css";

export default function Header() {
  return (
    <>
      <header className="container">
        {" "}
        <div className="left">
          {" "}
          <img src={logo} alt="loading..." />
          <nav>
            <ul>
              <li>
                Features <img src={arrowDown} alt="loading..." />
              </li>
              <li>
                Company <img src={arrowDown} alt="loading..." />
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <Button text="Login" />
          <Button className="btn-outline" text="Register" />
        </div>
      </header>
    </>
  );
}

Header();
