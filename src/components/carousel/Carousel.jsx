import React, { useState } from "react";
import "./carousel.scss";
import carouselList from "./carouselList";

function Carousel() {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    setSlide(slide === carouselList.length - 1 ? 0 : slide + 1);
  }

  function prevSlide() {
    setSlide(slide === 0 ? carouselList.length - 1 : slide - 1);
  }

  return (
    <div className="carousel">
      <img
        className="carousel-arrow arrow-left"
        src="/carousel-left-arrow.svg"
        alt="left arrow"
        onClick={prevSlide}
      />
      {carouselList.map((carouselItem, i) => {
        return (
          <img
            className={
              slide === i ? "carousel-img" : "carousel-img carousel-img-hidden"
            }
            key={i}
            src={carouselItem.src}
            alt={carouselItem.alt}
          />
        );
      })}
      <img
        className="carousel-arrow arrow-right"
        src="/carousel-right-arrow.svg"
        alt="right arrow"
        onClick={nextSlide}
      />

      <div className="indicators">
        {carouselList.map((_, i) => {
          return (
            <button
              className={
                slide === i ? "indicator" : "indicator indicator-inactive"
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

export default Carousel;
