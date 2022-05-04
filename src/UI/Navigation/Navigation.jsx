import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Buttons/Button";
import "./navigation.css";

const Navigation = ({ className, navRef }) => {
  return (
    <nav ref={navRef} className={className}>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-item-link ">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-item-link">
            my profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/activity" className="nav-item-link">
            activity
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/howitworks" className="nav-item-link">
            How it works
          </NavLink>
        </li>
      </ul>
      <div className="header__btns btn-group">
        <Button variant="outlined" text="create" />
        <Button text="sign in" />
      </div>
    </nav>
  );
};

export default Navigation;
