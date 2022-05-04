import React, { useEffect, useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./hamburger.css";
import useBodyDismiss from "../../hooks/useBodyDismiss";

const Hamburger = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileNav = () => setIsOpen(!isOpen);
  const navRef = useRef(null);
  useEffect(() => {
    useBodyDismiss(navRef, setIsOpen);
  }, [navRef]);

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
