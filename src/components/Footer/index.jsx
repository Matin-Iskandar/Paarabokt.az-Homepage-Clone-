import React from "react";
import darkLogo from "../../assets/images/darkLogo.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import darkphone from "../../assets/icons/darkphone.svg";

import "./style.scss";
const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={darkLogo} alt="darkLogo" />
      <div className="footer-main">
        <div className="first-part-footer">
          <div className="about">
            <h2>Haqqımızda</h2>
            <a href="#">Şirkət haqqında</a>
            <a href="#">Maliyyə hesabatları</a>
            <a href="#">Xəbər</a>
          </div>
          <div className="footer-links">
            <a href="#">İnsan resursları</a>
            <a href="#">Məhsullar</a>
            <a href="#">Kredit kalkulyatoru</a>
            <a href="#">FAQ</a>
            <a href="#">Əlaqə</a>
          </div>
        </div>
        <div className="contacts">
          <div className="call-to-us">
            <h2>Bizimlə əlaqə</h2>
            <div>
          <img src={darkphone} alt="darkphone" />  <h5>139</h5> 
            </div>
          </div>
          <div className="socials">
            <h2>Bizi izləyin</h2>
            <div className="social-icons">
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>© 2023 All right reserved</p>
        <h3>Designed by JOSEPH</h3>
      </div>
    </div>
  );
};

export default Footer;