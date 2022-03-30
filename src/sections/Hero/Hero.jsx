import Button from "../../UI/Buttons/Button";
import NFT_Card from "../../UI/Cards/NFT_Card";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="hero__content--heading">
          Discover, collect, and charity in extraordinary NFT marketplace
        </h2>
        <p className="hero__content--subheading">
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p>

        <div className="hero__content--btns btn-group">
          <Button variant="primary" text="explore" />
          <Button variant="outlined" text="create" />
        </div>
      </div>
      <div className="hero__image">
        <NFT_Card />
      </div>
    </section>
  );
};

export default Hero;
