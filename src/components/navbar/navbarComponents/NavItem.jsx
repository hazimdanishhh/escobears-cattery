import React from "react";
import "./navItem.scss";
import { motion } from "framer-motion";

export default function NavItem(props) {
  return (
    <>
      {props.src ? (
        <li>
          <a className="nav-item-link" href={props.href}>
            <motion.img
              className="nav-item-img"
              src={props.src}
              alt={props.alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ opacity: 0.7 }}
              whileTap={{ opacity: 1 }}
            />
          </a>
        </li>
      ) : (
        <li>
          <motion.a
            className="nav-item-link"
            href={props.href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 1 }}
          >
            {props.name}
          </motion.a>
        </li>
      )}
    </>
  );
}
