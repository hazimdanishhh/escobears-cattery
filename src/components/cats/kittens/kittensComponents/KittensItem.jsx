import React, { useEffect, useRef, useState } from "react";
import "./kittensItem.scss";
import { motion } from "framer-motion";
import Carousel from "../../../carousel/Carousel";

function KittensItem(props) {
  const [imgIsClicked, setImgIsClicked] = useState(false);

  // TODO: Create new component to open img-2 when img-1 is clicked
  // const [isStart, setIsStart] = useState(false)
  // ...
  // {isStart ? <Start> : <Button onClick={() => setIsStart(true)}>Start</Button>}

  const imageRef = useRef();

  useEffect(() => {
    function closeImage(e) {
      console.log(e);
      if (e.target !== imageRef.current) {
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
        <img
          className="kittens-img"
          src={props.img}
          alt={props.alt}
          ref={imageRef}
        />
        <p className="kittens-name">{props.name}</p>
        <div>
          <img className="kittens-img-2" src="./kitten-1.png" alt="kitten 1" />
          <img className="kittens-img-2" src="./kitten-1.png" alt="kitten 1" />
          <img className="kittens-img-2" src="./kitten-1.png" alt="kitten 1" />
          <img className="kittens-img-2" src="./kitten-1.png" alt="kitten 1" />

          {/* <Carousel className="kittens-img-2" /> */}
        </div>
      </motion.div>
    </>
  );
}

export default KittensItem;
