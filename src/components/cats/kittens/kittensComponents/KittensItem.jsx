import React, { useState } from "react";
import "./kittensItem.scss";
import { motion } from "framer-motion";

function KittensItem(props) {
  const [imgIsClicked, setImgIsClicked] = useState(false);

  function ImgClicked() {
    console.log(imgIsClicked);
    setImgIsClicked(!imgIsClicked);
  }

  return (
    <>
      <motion.div
        className={`kittens-img-container ${
          imgIsClicked ? "kittens-img-container-clicked" : null
        }`}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
        onClick={ImgClicked}
      >
        <img className="kittens-img" src={props.img} alt={props.alt} />
        <p className="kittens-name">{props.name}</p>
        <div>
          <img className="kittens-img-2" src="/kitten-1.png" alt="kitten 1" />
          <img className="kittens-img-2" src="/kitten-1.png" alt="kitten 1" />
          <img className="kittens-img-2" src="/kitten-1.png" alt="kitten 1" />
          <img className="kittens-img-2" src="/kitten-1.png" alt="kitten 1" />
        </div>
      </motion.div>
    </>
  );
}

export default KittensItem;
