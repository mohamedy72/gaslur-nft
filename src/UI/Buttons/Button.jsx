import "./button.css";

const Button = ({ variant, text }) => {
  return (
    <button
      className={`
      btn
      ${
        variant === "primary"
          ? "btn-primary"
          : variant === "outlined"
          ? "btn-secondary"
          : "btn-text"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
