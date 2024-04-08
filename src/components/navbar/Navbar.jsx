import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import NavItem from "./navbarComponents/NavItem";
import navList from "./navbarComponents/navList";
import SocialsItem from "./navbarComponents/SocialsItem";
import socialsList from "./navbarComponents/socialsList";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}

      {/* Logo and Socials */}
      <div className="navbar-wrapper">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.05,
            opacity: 0.7,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 1, opacity: 1, transition: { duration: 0.1 } }}
        >
          <span className="nav-title">escobears cattery.</span>
        </motion.a>

        {/* Nav */}
        <ul className="nav">
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
        </ul>

        {/* Socials */}
        <div className="socials" id="socials">
          {socialsList.map((socialsItem, i) => {
            return (
              <SocialsItem
                key={i}
                href={socialsItem.href}
                src={socialsItem.src}
                alt={socialsItem.alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
