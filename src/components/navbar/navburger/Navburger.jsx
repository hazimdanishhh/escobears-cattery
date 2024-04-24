import React, { useEffect, useRef, useState } from "react";
import "./navburger.scss";
import NavItem from "../navbarComponents/NavItem";
import navList from "../navbarComponents/navList";
import { motion } from "framer-motion";

function Navburger() {
  const [open, setOpen] = useState(false);

  const btnRef = useRef();

  useEffect(() => {
    function closeNav(e) {
      console.log(e);
      if (e.target !== btnRef.current) {
        setOpen(false);
      }
    }

    document.body.addEventListener("click", closeNav);

    return () => {
      document.body.removeEventListener("click", closeNav);
    };
  });

  function OpenNav() {
    setOpen(!open);
  }

  return (
    <motion.div
      className={`navburger ${open ? "navburger navburger-open" : null}`}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      animate={{ opacity: 1 }}
    >
      <div
        className={`navburger-list ${
          open ? "navburger-list navburger-list-open" : null
        }`}
      >
        <motion.ul
          className="navburger-links"
          id="navburger-links"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          whileInView={{ opacity: 1 }}
        >
          {navList.map((navItem, i) => {
            return (
              <NavItem
                key={i}
                src={navItem.src}
                alt={navItem.alt}
                href={navItem.href}
                name={navItem.name}
              />
            );
          })}
        </motion.ul>
      </div>

      <button onClick={OpenNav} className="navburger-btn">
        <img
          ref={btnRef}
          src={open ? "./navburger-close.svg" : "./navburger.svg"}
          alt="navburger icon"
          className="navburger-icon"
        />
      </button>
      {/* <BtnNavburger setOpen={setOpen} /> */}
    </motion.div>
  );
}

export default Navburger;
