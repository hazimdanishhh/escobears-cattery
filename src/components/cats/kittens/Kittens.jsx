import React from "react";
import "./kittens.scss";
import { motion } from "framer-motion";

function Kittens() {
  return (
    <div className="kittens">
      <div className="kittens-wrapper">
        <motion.h2
          className="kittens-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.1, delay: 0.3 },
          }}
        >
          our kittens.
        </motion.h2>
        <motion.div className="kittens-container">
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
          >
            <img className="kittens-img" src="/kitten-1.png" alt="kitten 1" />
            <p className="kittens-name">litter a.</p>
          </motion.div>
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
          >
            <img className="kittens-img" src="/kitten-2.png" alt="kitten 2" />
            <p className="kittens-name">litter b.</p>
          </motion.div>
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
          >
            <img className="kittens-img" src="/kitten-1.png" alt="kittens 3" />
            <p className="kittens-name">litter c.</p>
          </motion.div>
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
          >
            <img className="kittens-img" src="/kitten-1.png" alt="kittens 4" />
            <p className="kittens-name">litter d.</p>
          </motion.div>
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
          >
            <img className="kittens-img" src="/kitten-1.png" alt="kittens 1" />
            <p className="kittens-name">litter e.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Kittens;
