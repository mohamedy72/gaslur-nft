import Button from "../../UI/Buttons/Button";
import "./discover.css";
import category from "../../assets/icons/sort-ascending.png";
import downArrow from "../../assets/icons/cheveron-down.png";
import filter from "../../assets/icons/filter.png";
import Sell_Card from "../../UI/Cards/Sell_Card";
import bid1 from "../../assets/imgs/bid1.jpg";
import { NFTs } from "../../data/NFTs";

const Discover = () => {
  return (
    <section className="discover" id="discover">
      <div className="discover__header">
        <h3 className="discover__header--text">Discover</h3>
        <div className="discover__header--filters">
          <Button
            withIcon
            dir="left"
            text="category"
            imgSrc={category}
            altText="Sorting by category icon"
          />
          <Button
            withIcon
            dir="right"
            text="cheapest"
            imgSrc={downArrow}
            altText="Sorting by the cheapest icon"
          />
          <Button
            withIcon
            dir="right"
            text="newest"
            imgSrc={downArrow}
            altText="Sorting by newest icon"
          />
          <Button
            variant="primary"
            withIcon
            dir="left"
            text="filter"
            imgSrc={filter}
            altText="Filter icon for filter button"
          />
        </div>
      </div>
      <div className="discover__nfts">
        {NFTs.map((nft) => {
          return (
            <Sell_Card
              key={nft?.id}
              imgSrc={nft?.img}
              altText={nft?.name}
              nftName={nft?.name}
              nftPrice={nft?.price}
              nftTime={nft?.countDown}
              actiontext="Bid"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Discover;
