import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { delay, motion } from "framer-motion";

function Contact() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_6f1wt2r", "template_l7uvd38", formRef.current, {
        publicKey: "9FljeWJvo5mst9fdp",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  }

  const infoVariant = {
    initial: {
      opacity: 0,
      x: -50,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <motion.div
          className="contact-info"
          initial="initial"
          whileInView="whileInView"
          variants={infoVariant}
        >
          <h2>contact us.</h2>

          <div className="contact-item">
            <h3>e-mail</h3>
            <span>escobearsmy@gmail.com</span>
          </div>

          <div className="contact-item">
            <h3>address</h3>
            <span>Dato Keramat, Kuala Lumpur</span>
          </div>

          <div className="contact-item">
            <h3>phone</h3>
            <span>+60 12-8641207</span>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          action="/submit"
          autoComplete="on"
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
          whileInView={{ opacity: 1 }}
        >
          <input
            type="text"
            required
            placeholder="name"
            id="name"
            name="name"
            autoComplete="on"
            className="contact-input"
          />
          <input
            type="email"
            required
            placeholder="e-mail"
            id="email"
            name="email"
            autoComplete="on"
            className="contact-input"
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="message"
            className="contact-input"
          ></textarea>
          <button className="contact-btn">send.</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
