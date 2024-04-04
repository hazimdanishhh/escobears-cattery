import React from "react";
import "./adultsItem.scss";
import { motion } from "framer-motion";

function AdultsItem(props) {
  return (
    <>
      <motion.div
        className="img-container"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.3, delay: 0.3 * props.id },
        }}
      >
        <img className="adults-img" src={props.src} alt={props.alt} />
        <p className="cat-name">{props.name}</p>
        <motion.div
          className="cat-desc"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        >
          <div className="adults-desc-container">
            <p className="adults-desc">{props.type}</p>
            <p className="adults-desc">{props.breed}</p>
            <p className="adults-desc">{props.color}</p>
            <p className="adults-desc">{props.age}</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default AdultsItem;
