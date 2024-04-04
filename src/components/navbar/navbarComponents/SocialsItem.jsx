import React from "react";
import "./socialsItem.scss";
import { motion } from "framer-motion";

function SocialsItem(props) {
  return (
    <>
      <a className="socials-link" href={props.href} target="__blank">
        <motion.img
          className="socials-img"
          src={props.src}
          alt={props.alt}
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.2, rotate: 360 }}
        />
      </a>
    </>
  );
}

export default SocialsItem;
