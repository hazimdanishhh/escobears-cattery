import React, { useState } from "react";
import "./adultsItem.scss";
import { motion } from "framer-motion";

function AdultsItem(props) {
  const [imgIsClicked, setImgIsClicked] = useState(false);

  function ImgClicked() {
    console.log(imgIsClicked);
    setImgIsClicked(!imgIsClicked);
  }

  return (
    <>
      <motion.div
        className={`adults-img-container ${
          imgIsClicked ? "adults-img-container-clicked" : null
        }`}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.3, delay: 0.3 * props.id },
        }}
        onClick={ImgClicked}
      >
        <img className="adults-img" src={props.src} alt={props.alt} />
        <p className="adults-name">{props.name}</p>
        <motion.div
          className="adults-desc-container"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        >
          <ul className="adults-desc-list">
            <li className="adults-desc">{props.type}</li>
            <li className="adults-desc">{props.breed}</li>
            <li className="adults-desc">{props.color}</li>
            <li className="adults-desc">{props.age}</li>
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
}

export default AdultsItem;
