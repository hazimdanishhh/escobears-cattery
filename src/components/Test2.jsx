import React from "react";
import { motion } from "framer-motion";

function Test2() {
  const variantVisible = {
    visible: (x) => ({
      opacity: 1,
      x: 100,
      //   transition: { delay: 0.3, duration: 1 },
      //   transition: { type: "spring", stiffness: 200 },
      transition: { delay: x * 0.3 },
    }),
    hidden: { opacity: 0.1 },
  };

  const items = ["Peanut", "Butter", "Jelly", "Coconut"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variantVisible}>
        {items.map((item, i) => {
          return (
            <motion.li key={i} variants={variantVisible} custom={i}>
              {item}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}

export default Test2;
