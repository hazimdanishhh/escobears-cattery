import React from "react";
import "./kittens.scss";
import { motion } from "framer-motion";
import KittensItem from "./kittensComponents/KittensItem";
import kittensList from "./kittensComponents/kittensList";

function Kittens() {
  return (
    <div className="kittens">
      <div className="kittens-wrapper">
        <div className="kittens-container">
          {/* TITLE */}

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

          {/* IMAGES */}

          <motion.div className="kittens-images">
            {kittensList.map((kittenItem, i) => {
              return (
                <KittensItem
                  key={i}
                  img={kittenItem.img}
                  alt={kittenItem.alt}
                  name={kittenItem.name}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Kittens;
