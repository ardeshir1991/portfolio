import React, { useState } from "react";
import styles from "./contact.module.css";
import {
  FaPhoneVolume,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const eventHandler = (e) => {
    const name = e.target.value;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Contact Me</h1>
      </div>
      <h2>Have you any question?</h2>
      <h3>I'M AT YOUR SERVICES</h3>
      <ul>
        <li>
          <span>
            <FaPhoneVolume />
          </span>
          <h4>Call Me On</h4>
          <p>+98 9353049521</p>
        </li>
        <li>
          <span>
            <FaMapMarkerAlt />
          </span>
          <h4>Location</h4>
          <p>Isfahan, Iran</p>
        </li>
        <li>
          <span>
            <FaRegEnvelope />
          </span>
          <h4>Gmail</h4>
          <p>ardeshiref1991</p>
        </li>
        <li>
          <span>
            <FaLinkedinIn />
          </span>
          <h4>LinkedIn</h4>
          <p>Linked in</p>
        </li>
        <li>
          <span>
            <FaTelegramPlane />
          </span>
          <h4>Telegram</h4>
          <p>telegram</p>
        </li>
      </ul>
      <h2>SEND ME AN EMAIL</h2>
      <h3>I'M VERY RESPONSIVE TO MESSAGES</h3>
      <div className={styles.formContainer}>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            onChange={eventHandler}
            name="name"
            value={inputs.name}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={eventHandler}
            name="email"
            value={inputs.email}
          />
          <textarea
            name="message"
            id=""
            cols=""
            rows="10"
            placeholder="Message"
            onChange={eventHandler}
            value={inputs.message}
          ></textarea>
          <input type="button" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
