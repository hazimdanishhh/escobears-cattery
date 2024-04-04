import React from "react";
import "./promise.scss";
import { motion } from "framer-motion";

function Promise(props) {
  return (
    <>
      <div className="promise-item">
        <motion.img
          className="promise-img"
          src={props.src}
          alt={props.alt}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.3, delay: 0.3 * props.id }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ opacity: 0.6, scale: 1.1 }}
        />
        <motion.h3
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.3, delay: 0.3 * props.id }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          {props.title}
        </motion.h3>
        <motion.p
          className="promise-desc"
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.3, delay: 0.3 * props.id }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          {props.desc}
        </motion.p>
      </div>
    </>
  );
}

export default Promise;
