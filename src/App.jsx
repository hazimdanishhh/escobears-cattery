import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Adults from "./components/cats/adults/Adults";
import Kittens from "./components/cats/kittens/Kittens";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <div>
      <section id="top">
        {/* <img src="./litter-b.png" alt="litter b image" className="top-bg-img" /> */}
        <Navbar />
        <Hero />
      </section>

      {/* <section>Parallax</section> */}

      <section id="about">
        <About />
      </section>

      {/* <section>Parallax</section> */}

      <section id="cats">
        {/* <img src="./cat-1.jpg" alt="cat 1 image" className="cats-bg-img" /> */}
        <Adults />
      </section>

      <section>
        <Kittens />
      </section>

      {/* <section>Parallax</section> */}

      <section id="contact">
        <Contact />
      </section>

      {/* <section id="footer">
      </section> */}

      <Footer id="footer" />
    </div>
  );
}
