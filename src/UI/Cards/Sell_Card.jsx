import Button from "../Buttons/Button";
import "./cards.css";
const Sell_Card = ({
  actiontext,
  nftName,
  nftPrice,
  nftTime,
  imgSrc,
  altText,
}) => {
  return (
    <div className="sell-card">
      <div className="sell-card__img">
        <img src={imgSrc} alt={altText} />
      </div>
      <div className="sell-card__info">
        <span className="name">{nftName}</span>
        <span className="eth">{nftPrice} Weth</span>
      </div>
      <hr className="line-break" />
      <div className="sell-card__actions">
        <p className="sell-card__actions--countdown">
          Ends in <span className="time">{nftTime}</span>
        </p>
        <Button variant="outlined" text={actiontext} />
      </div>
    </div>
  );
};

export default Sell_Card;
