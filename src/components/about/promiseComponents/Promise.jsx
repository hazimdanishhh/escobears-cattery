import React from "react";
import "./promise.scss";
import { motion } from "framer-motion";

function Promise(props) {
  const itemVariant = {
    initial: {
      opacity: 0,
      x: -50,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.3,
      },
    },
  };

  return (
    <>
      <div className="promise-item">
        <motion.img
          className="promise-img"
          src={props.src}
          alt={props.alt}
          initial={{ opacity: 0, rotate: -90, scale: 1 }}
          whileInView={{ opacity: 1, rotate: 0, transition: { duration: 0.8 } }}
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
