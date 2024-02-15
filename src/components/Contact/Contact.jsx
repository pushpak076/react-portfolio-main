import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="pushpakpatel076@email.com">pushpakpatel076@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/pushpak076/">linkedin.com/pushpak076</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/pushpak076">github.com/pushpak076</a>
        </li>
        {/* <li className={styles.link}>
          <img src={getImageUrl("contact/instagram-icons.png")} alt="insta icon" />
          <a href="https://www.instagram.com/pushpak076/">github.com/pushpak076</a>
        </li> */}
      </ul>
    </footer>
  );
};
