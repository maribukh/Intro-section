import "./Button.css";
import clsx from "clsx";

export default function Button({ outlined, bgcolor, text }) {
  const className = clsx({
    "btn-outline": outlined,
    "btn-main": bgcolor,
  });

  return (
    <>
      <button className={className}>{text}</button>
    </>
  );
}
