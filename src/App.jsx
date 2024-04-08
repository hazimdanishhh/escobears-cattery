import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Adults from "./components/cats/adults/Adults";
import Kittens from "./components/cats/kittens/Kittens";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
      <section id="top">
        <Navbar />
        <Hero />
      </section>

      {/* <section>Parallax</section> */}

      <section id="about">
        <About />
      </section>

      {/* <section>Parallax</section> */}

      <section id="cats">
        <Adults />
      </section>

      <section>
        <Kittens />
      </section>

      {/* <section>Parallax</section> */}

      <section id="contact">Contact</section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
