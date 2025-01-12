import React from "react";
import "./about.scss";
import { motion } from "framer-motion";
import Promise from "./promiseComponents/Promise";
import promiseList from "./promiseComponents/promiseList";
import AboutDesc from "./aboutComponents/AboutDesc";
import aboutList from "./aboutComponents/aboutList";

function About() {
  const variant = {
    initial: {
      opacity: 0,
      x: -100,
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
    <div className="about">
      <div className="about-wrapper">
        {/* ABOUT CONTAINER */}

        <motion.div
          className="about-container"
          initial="initial"
          whileInView="whileInView"
          variants={variant}
        >
          <h2>about us.</h2>

          {aboutList.map((aboutDesc, i) => {
            return <AboutDesc key={i} id={i} desc={aboutDesc} />;
          })}
        </motion.div>

        {/* PROMISE CONTAINER */}
        <div className="promise-container">
          <motion.h2
            initial="initial"
            whileInView="whileInView"
            variants={variant}
          >
            our promises.
          </motion.h2>

          <div className="promise-details">
            {promiseList.map((promiseItem, i) => {
              return (
                <Promise
                  key={i}
                  id={i}
                  src={promiseItem.src}
                  alt={promiseItem.alt}
                  title={promiseItem.title}
                  desc={promiseItem.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
