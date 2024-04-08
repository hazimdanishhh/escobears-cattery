import React from "react";
import "./adults.scss";
import { motion } from "framer-motion";
import AdultsItem from "./adultsComponents/AdultsItem";
import adultsList from "./adultsComponents/adultsList";

function Adults() {
  return (
    <div className="adults">
      <div className="adults-wrapper">
        <motion.div
          className="adults-container"
          initial={{ x: -200 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          whileInView={{ x: 0 }}
        >
          {/* TITLE */}

          <motion.h2
            className="adults-title"
            initial={{ opacity: 0, x: -50, y: 90 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 1.1, delay: 0.3 },
            }}
          >
            our studs & queens.
          </motion.h2>

          {/* IMAGES */}

          <div className="adults-images">
            {adultsList.map((adultsItem, i) => {
              return (
                <AdultsItem
                  key={i}
                  id={i}
                  src={adultsItem.src}
                  alt={adultsItem.alt}
                  name={adultsItem.name}
                  type={adultsItem.type}
                  breed={adultsItem.breed}
                  color={adultsItem.color}
                  age={adultsItem.age}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Adults;
