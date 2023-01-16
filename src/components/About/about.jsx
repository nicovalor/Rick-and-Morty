import React from "react";
import styles from "./about.module.css";

export default function About(props) {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Página creada por <span className="style.name">NICOLÁS VALOR</span>
        </h1>
        <h3>Redes de contacto</h3>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </>
  );
}
