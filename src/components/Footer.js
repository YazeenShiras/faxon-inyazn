import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="credits">
        <h4>
          Copyright © 2021 | <a href="https://inyazn.web.app/">inyazn</a>
        </h4>
      </div>
      <div className="social">
        <a
          className="social__icon"
          href="https://www.facebook.com/yazeenshiraz/"
        >
          <FontAwesomeIcon className="iconSocial" icon={faFacebook} />
        </a>
        <a className="social__icon" href="https://www.instagram.com/inyazn/">
          <FontAwesomeIcon className="iconSocial" icon={faInstagram} />
        </a>
        <a className="social__icon" href="https://inyazn.web.app/">
          <FontAwesomeIcon className="iconSocial" icon={faGlobe} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
