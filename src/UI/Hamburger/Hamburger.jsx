import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./hamburger.css";
const Hamburger = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenHamburger = () => {
    setIsOpen(true);
  };

  const handleClosingHamburger = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger">
      {isOpen ? (
        <AiOutlineClose className="icon" onClick={handleClosingHamburger} />
      ) : (
        <GiHamburgerMenu onClick={handleOpenHamburger} className="icon" />
      )}
      {isOpen && (
        <Navigation className={`${className} ${isOpen ? "open" : "close"}`} />
      )}
    </div>
  );
};

export default Hamburger;
