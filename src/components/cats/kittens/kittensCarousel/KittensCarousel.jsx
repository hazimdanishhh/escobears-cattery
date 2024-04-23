import React, { useState } from "react";
import "./kittensCarousel.scss";
import kittensCarouselList from "./kittensCarouselList";
import { motion } from "framer-motion";

function KittensCarousel() {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    setSlide(slide === kittensCarouselList.length - 1 ? 0 : slide + 1);
  }

  function prevSlide() {
    setSlide(slide === 0 ? kittensCarouselList.length - 1 : slide - 1);
  }

  return (
    <div className="kittens-carousel">
      <motion.img
        className="kittens-carousel-arrow kittens-arrow-left"
        src="./carousel-left-arrow.svg"
        alt="left arrow"
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
      />

      {kittensCarouselList.map((carouselItem, i) => {
        return (
          <img
            className={
              slide === i
                ? "kittens-carousel-img"
                : "kittens-carousel-img kittens-carousel-img-hidden"
            }
            key={i}
            src={carouselItem.src}
            alt={carouselItem.alt}
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
        {kittensCarouselList.map((_, i) => {
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
    </div>
  );
}

export default KittensCarousel;
