import React, { useState } from "react";
import "./kittensCarousel.scss";
import kittensCarouselList from "./kittensCarouselList";
import { motion } from "framer-motion";

function KittensCarousel(props) {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    setSlide(
      slide === kittensCarouselList[props.id].src.length - 1 ? 0 : slide + 1
    );
  }

  function prevSlide() {
    setSlide(
      slide === 0 ? kittensCarouselList[props.id].src.length - 1 : slide - 1
    );
  }

  return (
    <motion.div
      className="kittens-carousel"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.img
        className="kittens-carousel-arrow kittens-arrow-left"
        src="./carousel-left-arrow.svg"
        alt="left arrow"
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
      />

      {kittensCarouselList[props.id].src.map((carouselItem, i) => {
        return (
          <img
            className={
              slide === i
                ? "kittens-carousel-img"
                : "kittens-carousel-img kittens-carousel-img-hidden"
            }
            key={i}
            src={carouselItem}
            alt="Image"
          />
        );
      })}

      <motion.img
        className="kittens-carousel-arrow kittens-arrow-right"
        src="./carousel-right-arrow.svg"
        alt="right arrow"
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
      />

      <div className="kittens-indicators">
        {kittensCarouselList[props.id].src.map((_, i) => {
          return (
            <button
              className={
                slide === i
                  ? "kittens-indicator"
                  : "kittens-indicator kittens-indicator-inactive"
              }
              key={i}
              onClick={() => setSlide(i)}
            ></button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default KittensCarousel;
