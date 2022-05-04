import React, { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./hamburger.css";
import useBodyDismiss from "../../hooks/useBodyDismiss";
import { useLocation } from "react-router-dom";

const Hamburger = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleMobileNav = () => setIsOpen(!isOpen);

  const navRef = useRef(null);

  useEffect(() => {
    useBodyDismiss(navRef, setIsOpen);
  }, [navRef]);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="hamburger">
      {isOpen ? (
        <AiOutlineClose className="icon" onClick={toggleMobileNav} />
      ) : (
        <GiHamburgerMenu className="icon" onClick={toggleMobileNav} />
      )}
      {isOpen && (
        <Navigation
          navRef={navRef}
          className={`${className} ${isOpen ? "open" : "close"}`}
        />
      )}
    </div>
  );
};

export default Hamburger;
