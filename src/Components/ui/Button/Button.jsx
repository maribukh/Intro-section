import "./Button.css";
import clsx from "clsx";

export default function Button({
  outlined,
  bgcolor,
  bgyellow,
  text,
  action,
  type = "button",
}) {
  const className = clsx({
    "btn-outline": outlined,
    "btn-main": bgcolor,
    "btn-delete": bgyellow,
  });

  return (
    <button type={type} className={className} onClick={action}>
      {text}
    </button>
  );
}
