import React, { useState } from "react";
import "./NavBar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt--navbar">
      <div className="gpt--navbar-links">
        <div className="gpt--navbar-links-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="gpt--navbar-links-container">
          <p>
            {" "}
            <a href="#home">Home</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#gpt">What is GPT?</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#possibility">Open AI</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#features">Case Studies</a>{" "}
          </p>
          <p>
            {" "}
            <a href="#blog">Library</a>{" "}
          </p>
        </div>
      </div>
      <div className="gpt--navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt--navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt--navbar-menu-container scale-up-center">
            <div className="gpt--navbar-menu-container-links">
              <p>
                {" "}
                <a href="#home">Home</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#gpt">What is GPT?</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#possibility">Open AI</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#features">Case Studies</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#blog">Library</a>{" "}
              </p>
            </div>
            <div className="gpt--navbar-menu-container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
