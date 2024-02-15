import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pushpak Patel</h1>
        <p className={styles.description}>
            I'm from Khandwa, pursuing MCA at NIT Trichy.
            Passionate about MERN development and DSA,
            eager to contribute to impactful projects with a fresh perspective and dedication to learning.
        </p>
        <a href="mailto:pushpakpatel076@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
