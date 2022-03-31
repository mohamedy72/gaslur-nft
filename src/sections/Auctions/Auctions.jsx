import "./auctions.css";
import Sell_Card from "../../UI/Cards/Sell_Card";
import bid1 from "../../assets/imgs/bid1.jpg";
import bid2 from "../../assets/imgs/bid2.jpg";
import bid3 from "../../assets/imgs/bid3.jpg";
import bid4 from "../../assets/imgs/bid4.jpg";

const Auctions = () => {
  return (
    <section className="auctions">
      <div className="auctions__header">
        <h3 className="auctions__header--text">Hot auctions</h3>
        <a href="/" className="auctions__header--btn">
          view all{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.2197 19.0303C13.5126 19.3232 13.9874 19.3232 14.2803 19.0303L20.5303 12.7803C20.8232 12.4874 20.8232 12.0126 20.5303 11.7197L14.2803 5.46967C13.9874 5.17678 13.5126 5.17678 13.2197 5.46967C12.9268 5.76256 12.9268 6.23744 13.2197 6.53033L18.1893 11.5L3.75 11.5C3.33579 11.5 3 11.8358 3 12.25C3 12.6642 3.33579 13 3.75 13L18.1893 13L13.2197 17.9697C12.9268 18.2626 12.9268 18.7374 13.2197 19.0303Z"
              fill="#D7D7D7"
            />
          </svg>
        </a>
      </div>
      <div className="auctions__container">
        <Sell_Card
          imgSrc={bid1}
          altText="Abstract 1"
          nftName="Abstract 1"
          nftPrice="1.20"
          nftTime="01:34:45"
          actiontext="Bid"
        />
        <Sell_Card
          imgSrc={bid2}
          altText="Abstract 2"
          nftName="Abstract 2"
          nftPrice="0.21"
          nftTime="01:34:45"
          actiontext="Bid"
        />
        <Sell_Card
          imgSrc={bid3}
          altText="Abstract 3"
          nftName="Abstract 3"
          nftPrice="0.51"
          nftTime="01:34:45"
          actiontext="Bid"
        />
        <Sell_Card
          imgSrc={bid4}
          altText="Abstract 4"
          nftName="Abstract 4"
          nftPrice="0.42"
          nftTime="01:34:45"
          actiontext="Bid"
        />
      </div>
    </section>
  );
};

export default Auctions;
