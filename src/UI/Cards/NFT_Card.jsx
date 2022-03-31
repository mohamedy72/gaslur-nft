import Avatar from "../Avatar/Avatar";
import "./cards.css";
import avatar from "../../assets/imgs/lauraavatar.jpg";
import { useState } from "react";
import { useRef } from "react";

const NFT_Card = () => {
  const [likes, setLikes] = useState(0);
  const svgRef = useRef();

  const handleLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
    svgRef.current.style.fill = "red";
  };
  return (
    <div className="nft-card">
      <div className="nft-card__img"></div>
      <div className="nft-card__details">
        <div className="nft-card__details--owner">
          <Avatar img={avatar} alt="Laura's avatar" />
          <div className="nft-card__details--owner__info">
            <span className="name">Laura</span>
            <span className="eth">0.21 Weth</span>
          </div>
        </div>
        <div className="nft-card__details--stats">
          <p className="nft-card__details--stats__head">We are here</p>
          <p className="nft-card__details--stats__likes">
            <svg
              onClick={handleLikes}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.73649 4C4.65746 4 2.5 5.88043 2.5 8.51351C2.5 11.6209 4.8236 14.4738 7.36118 16.6342C8.60701 17.6948 9.85656 18.5479 10.7965 19.1364C11.2656 19.4301 11.6557 19.6567 11.9269 19.8091C11.9523 19.8234 11.9767 19.837 12 19.85C12.0233 19.837 12.0477 19.8234 12.0731 19.8091C12.3443 19.6567 12.7344 19.4301 13.2035 19.1364C14.1434 18.5479 15.393 17.6948 16.6388 16.6342C19.1764 14.4738 21.5 11.6209 21.5 8.51351C21.5 5.88043 19.3425 4 17.2635 4C15.1581 4 13.4627 5.38899 12.7115 7.64258C12.6094 7.94883 12.3228 8.15541 12 8.15541C11.6772 8.15541 11.3906 7.94883 11.2885 7.64258C10.5373 5.38899 8.84185 4 6.73649 4ZM12 20.7027L12.3426 21.3699C12.1276 21.4803 11.8725 21.4803 11.6574 21.3699L12 20.7027ZM1 8.51351C1 5.052 3.82903 2.5 6.73649 2.5C9.02981 2.5 10.8808 3.72621 12 5.60482C13.1192 3.72621 14.9702 2.5 17.2635 2.5C20.171 2.5 23 5.052 23 8.51351C23 12.3318 20.1986 15.5735 17.6112 17.7763C16.2945 18.8973 14.9816 19.7929 13.9996 20.4077C13.5078 20.7157 13.0971 20.9544 12.8078 21.1169C12.6631 21.1982 12.5486 21.2605 12.4694 21.3029C12.4299 21.3241 12.3991 21.3404 12.3777 21.3516L12.3529 21.3646L12.3459 21.3682L12.3438 21.3693C12.3435 21.3694 12.3426 21.3699 12 20.7027C11.6574 21.3699 11.6576 21.37 11.6574 21.3699L11.6541 21.3682L11.6471 21.3646L11.6223 21.3516C11.6009 21.3404 11.5701 21.3241 11.5306 21.3029C11.4514 21.2605 11.3369 21.1982 11.1922 21.1169C10.9029 20.9544 10.4922 20.7157 10.0004 20.4077C9.01844 19.7929 7.70549 18.8973 6.38882 17.7763C3.80141 15.5735 1 12.3318 1 8.51351Z"
                fill="#E0E0E0"
                ref={svgRef}
              />
            </svg>
            <span>{likes}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFT_Card;
