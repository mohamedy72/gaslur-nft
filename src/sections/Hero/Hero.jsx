import Button from "../../UI/Buttons/Button";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="main-heading">
          Discover, collect, and charity in extraordinary NFT marketplace
        </h2>
        <p className="subheading">
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p>

        <div className="btn-group">
          <Button variant="primary" text="explore" />
          <Button variant="outlined" text="create" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
