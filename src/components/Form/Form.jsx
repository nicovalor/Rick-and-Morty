import React, { useState } from "react";
import validation from "../../utils/validation";
import styles from "./Form.module.css";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const val = event.target.value;
    setUserData({
      ...userData,
      [event.target.name]: val,
    });
    setErrors(
      validation({
        ...errors,
        [event.target.name]: val,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
            className={styles.input}
            type="text"
            name="username"
            placeholder="Nombre de usuario..."
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
        {errors.username && <p>{errors.username}</p>}

        <div>
          <label htmlFor="password"></label>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Ingrese su password..."
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className={styles.button}>
          INGRESAR
        </button>
      </form>
    </div>
  );
}
