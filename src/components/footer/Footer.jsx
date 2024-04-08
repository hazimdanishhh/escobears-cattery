import React from "react";
import "./footer.scss";
import SocialsItem from "../navbar/navbarComponents/SocialsItem";
import socialsList from "../navbar/navbarComponents/socialsList";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Escobears Global 202203012775
            &#40;003359093-U&#41;
          </p>
        </div>
        <div className="club">
          <p>WCF 37731-2022&#40;F&#41;</p>
        </div>
        <div className="socials" id="socials">
          {socialsList.map((socialsItem, i) => {
            return (
              <SocialsItem
                key={i}
                href={socialsItem.href}
                src={socialsItem.src}
                alt={socialsItem.alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
