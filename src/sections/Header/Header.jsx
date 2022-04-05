import { useEffect } from "react";
import Button from "../../UI/Buttons/Button";
import Hamburger from "../../UI/Hamburger/Hamburger";
import Navigation from "../../UI/Navigation/Navigation";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">gaslur</h1>
      <Hamburger className="mobile-nav" />
      <Navigation className="desktop-nav" />
    </header>
  );
};

export default Header;
