import "./button.css";

const Button = ({ variant, text, withIcon, dir, imgSrc, altText }) => {
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
      {withIcon && dir === "right" ? (
        <>
          {text} <img src={imgSrc} alt={altText} />
        </>
      ) : withIcon && dir === "left" ? (
        <>
          <img src={imgSrc} alt={altText} /> {text}
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
