import "./footer.css";
import insta from "../../assets/icons/Instagram.png";
import facebook from "../../assets/icons/Facebook.png";
import twitter from "../../assets/icons/Twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <h4 className="footer__nav--heading">
          Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis
          magna faucibus lacus.
        </h4>
        <div className="footer__nav--marketplace">
          <h5 className="heading">marketplace</h5>
          <ul className="body">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/activity">activity</a>
            </li>
            <li>
              <a href="/discover">discover</a>
            </li>
            <li>
              <a href="/learnmore">learn more</a>
            </li>
          </ul>
        </div>
        <div className="footer__nav--company">
          <h5 className="heading">company</h5>
          <ul className="body">
            <li>
              <a href="/aboutus">about us</a>
            </li>
            <li>
              <a href="/services">services</a>
            </li>
            <li>
              <a href="/portfolio">portfolio</a>
            </li>
          </ul>
        </div>
        <div className="footer__nav--contact">
          <h5 className="heading">contact</h5>
          <ul className="body">
            <li>
              <a href="#">facebook</a>
            </li>
            <li>
              <a href="#">instagram</a>
            </li>
            <li>
              <a href="#">twitter</a>
            </li>
            <li>
              <a href="#">email</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line-break" />
      <div className="footer__copyright">
        <div className="footer__copyright--social">
          <img src={insta} alt="Instagram logo" />

          <img src={facebook} alt="Facebook logo" />

          <img src={twitter} alt="Twitter logo" />
        </div>
        <p>copyright 2022 Gaslur</p>
      </div>
    </footer>
  );
};

export default Footer;
