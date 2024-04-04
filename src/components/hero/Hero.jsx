import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

function Hero() {
  const textVariants = {
    initial: {
      opacity: 0,
      x: -300,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const buttonVariants = {
    whileHover: {
      scale: 1.1,
    },
    whileTap: {
      scale: 0.9,
    },
  };

  const arrowVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 0.3,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="hero">
      <div className="hero-wrapper">
        {/* WELCOME CONTAINER */}

        <motion.div
          className="welcome-container"
          id="welcome-container"
          initial="initial"
          whileInView="whileInView"
          variants={textVariants}
        >
          <motion.h2 className="welcome-title" variants={textVariants}>
            Welcome to Escobears Cattery
          </motion.h2>

          <motion.p className="welcome-desc" variants={textVariants}>
            A Home-based Cattery in the heart of Kuala Lumpur, Malaysia. We
            pride ourselves in raising beautiful, loving and nurturing British
            Shorthairs and Longhairs.
          </motion.p>

          <motion.div className="welcome-buttons" variants={textVariants}>
            <a href="#contact">
              <motion.span
                className="contact-btn btn"
                whileHover="whileHover"
                whileTap="whileTap"
                variants={buttonVariants}
              >
                contact us.
              </motion.span>
            </a>

            <a href="#cats">
              <motion.span
                className="cats-btn btn"
                whileHover="whileHover"
                whileTap="whileTap"
                variants={buttonVariants}
              >
                our cats.
              </motion.span>
            </a>
          </motion.div>

          <a href="#about">
            <motion.img
              src="/arrow-down.svg"
              alt="arrow down"
              className="arrow-down"
              initial="initial"
              whileInView="whileInView"
              variants={arrowVariants}
            />
          </a>
        </motion.div>

        {/* IMAGE CONTAINER */}
        <motion.div
          className="img-container"
          id="img-container"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <img className="hero-img" src="/cat-1.jpg" alt="cat 1 image" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
