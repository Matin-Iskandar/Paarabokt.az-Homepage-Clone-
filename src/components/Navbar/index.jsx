import React, { useState,useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/icons/search.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import callPhone from "../../assets/icons/callPhone.svg";
import branches from "../../assets/icons/branches.svg";
import languages from "../../assets/icons/languages.svg";
import cancel from "../../assets/icons/cancel.svg";
import darkModeBtn from "../../assets/icons/darkModeBtn.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import "./style.scss";
const Navbar = () => {
  const [isActiveHamburger, setActiveHamburger] = useState(true);
  const toggleHamburger = () => {
    setActiveHamburger(!isActiveHamburger);
  };
  return (
    <div className="nav">
      <section className="header">
        <img className="nav-logo" src={logo} alt="Logo" />
        <div className="nav-btns">
          <ul>
            <li className="desktop nav-btn ">
              <img src={callPhone} alt="call phone" /> <h5>139</h5>
            </li>
            <li className="desktop  nav-btn">
              <img src={branches} alt="branches" /> <h5>Filiallar</h5>
            </li>
            <li className="search-btn">
              <img src={search} alt="search" />
            </li>
            <li className="desktop">
              <img src={languages} alt="languages" />
            </li>
            <li className="mobile" onClick={toggleHamburger}>
              {isActiveHamburger ? (
                <img src={hamburger} alt="hamburger" />
              ) : (
                <img src={cancel} alt="cancel" />
              )}
            </li>
            <li>
              <img className="desktop" src={darkModeBtn} alt="darkModeBtn" />
          
            </li>
          </ul>
        </div>
      </section>
      <nav>
        <div className="navbar-links">
          <a href="#">
            Haqqımızda <img src={arrowDown} alt="" />
          </a>
          <a href="#">İnsan resursları</a>
          <a href="#">Məhsullar</a>
          <a href="#">Kredit kalkulyatoru</a>
          <a href="#">FAQ</a>
          <a href="#">Əlaqə</a>
        </div>
        <div className="nav-btns-desktop">
          <button>
            Kredit ödənişi <img src={arrowDown} alt="arrowDown" />
          </button>
          <button>Kredit sifariş et</button>
        </div>
      </nav>
      <div className={isActiveHamburger ? "hamburger-none" : "hamburger"}>
        <section className="heading">
          <a>
            <img src={callPhone} alt="call phone" /> <h5>139</h5>
          </a>
          <a>
            <img src={branches} alt="branches" /> <h5>Filiallar</h5>
          </a>
          <a>
            {" "}
            <img src={languages} alt="languages" />
          </a>
        </section>
        <a>
          <img className="dark-mode-btn" src={darkModeBtn} alt="darkModeBtn" />
        </a>
        <section className="hamburger-links">
          <a href="#">
            Haqqımızda <img src={arrowDown} alt="" />
          </a>
          <a href="#">İnsan resursları</a>
          <a href="#">Məhsullar</a>
          <a href="#">Kredit kalkulyatoru</a>
          <a href="#">FAQ</a>
          <a href="#">Əlaqə</a>
        </section>
        <section className="hamburger-btns">
          <button>
            Kredit ödənişi <img src={arrowDown} alt="arrowDown" />
          </button>
          <button>Kredit sifariş et</button>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
