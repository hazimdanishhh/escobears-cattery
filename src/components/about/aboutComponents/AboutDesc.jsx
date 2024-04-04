import React from "react";
import "./aboutDesc.scss";
import { motion } from "framer-motion";

function AboutDesc(props) {
  return (
    <motion.p
      className="about-desc"
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.3, delay: 0.3 * props.id }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      {props.desc}
    </motion.p>
  );
}

export default AboutDesc;
