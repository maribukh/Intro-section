import "./Button.css";
import clsx from "clsx";

export default function Button({ outlined, text }) {
  const className = clsx({
    "btn-outline": outlined,
  });

  return (
    <>
      <button className={className}>{text}</button>
    </>
  );
}
