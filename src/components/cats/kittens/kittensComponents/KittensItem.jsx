import React, { useEffect, useRef, useState } from "react";
import "./kittensItem.scss";
import { motion } from "framer-motion";
import KittensCarousel from "../kittensCarousel/KittensCarousel";

function KittensItem(props) {
  const [imgIsClicked, setImgIsClicked] = useState(false);

  const imageRef = useRef();
  const closeRef = useRef();

  useEffect(() => {
    function closeImage(e) {
      console.log(e);
      if (e.target === closeRef.current) {
        setImgIsClicked(false);
      }
    }

    document.body.addEventListener("click", closeImage);

    return () => {
      document.body.removeEventListener("click", closeImage);
    };
  });

  function ImgClicked() {
    console.log(imgIsClicked);
    setImgIsClicked(!imgIsClicked);
  }

  return (
    <>
      {imgIsClicked ? <KittensCarousel /> : null}
      {imgIsClicked ? (
        <motion.img
          ref={closeRef}
          // onClick={ImgClicked}
          className="close-icon"
          src="./close-icon.svg"
          alt="close icon"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
      ) : null}

      <motion.div
        className="kittens-img-container"
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
        <img
          className="kittens-img"
          src={props.img}
          alt={props.alt}
          ref={imageRef}
        />
        <p className="kittens-name">{props.name}</p>
      </motion.div>
    </>
  );
}

export default KittensItem;
