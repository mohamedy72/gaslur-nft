import "./step.css";

const Step = ({ imgSrc, altText, text }) => {
  return (
    <div className="step">
      <div className="step__icon">
        <img src={imgSrc} alt={altText} />
      </div>
      <div className="step__text">{text}</div>
    </div>
  );
};

export default Step;
