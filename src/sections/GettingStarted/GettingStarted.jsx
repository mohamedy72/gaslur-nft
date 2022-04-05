import Step from "../../UI/Steps/Step";
import "./gettingStarted.css";
import shield from "../../assets/icons/shield-check-24.png";
import archive from "../../assets/icons/archive-24.png";
import media from "../../assets/icons/file-media-24.png";
import rocket from "../../assets/icons/rocket-24.png";
const GettingStarted = () => {
  return (
    <section className="getting-started" id="getting-started">
      <div className="getting-started__header">
        <h3 className="getting-started__header--text">Getting started</h3>
        <p className="getting-started__header--para">
          Eu, molestie commodo, enim pellentesque turpis integer sagittis
        </p>
      </div>
      <div className="getting-started__steps">
        <Step
          imgSrc={shield}
          altText="Shield Icon"
          text="Connect your wallet"
        />
        <Step
          imgSrc={archive}
          altText="Archive Icon"
          text="Posuere urna, sit amet molestie leo"
        />

        <Step
          imgSrc={media}
          altText="Media Icon"
          text="Semper pretium libero sed quam ac integer ut"
        />

        <Step
          imgSrc={rocket}
          altText="Rocket Icon"
          text="Lectus volutpat magna vitae in arcu"
        />
      </div>
    </section>
  );
};

export default GettingStarted;
