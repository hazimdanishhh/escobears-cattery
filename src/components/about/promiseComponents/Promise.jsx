import React from "react";
import "./promise.scss";
import { motion } from "framer-motion";

function Promise(props) {
  const itemVariant = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.3,
      },
    },
    whileHover: {
      opacity: 0.6,
      scale: 1.1,
    },
  };

  return (
    <>
      <div className="promise-item">
        <motion.img
          className="promise-img"
          src={props.src}
          alt={props.alt}
          variants={itemVariant}
          initial="initial"
          whileInView="whileInView"
          whileHover={{ opacity: 1, scale: 1.1 }}
        />
        <motion.h3
          className="promise-item-title"
          variants={itemVariant}
          initial="initial"
          whileInView="whileInView"
        >
          {props.title}
        </motion.h3>
        <motion.p
          className="promise-desc"
          variants={itemVariant}
          initial="initial"
          whileInView="whileInView"
        >
          {props.desc}
        </motion.p>
      </div>
    </>
  );
}

export default Promise;
