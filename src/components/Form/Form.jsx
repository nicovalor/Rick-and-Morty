import React, { useState } from "react";
import validation from "../../utils/validation";
import styles from "./Form.module";

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario..."
          value={userData.username}
          onChange={handleInputChange}
        />
        {errors.username && <p>{errors.username}</p>}
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese su password..."
          value={userData.password}
          onChange={handleInputChange}
        />
        {/* {errors.password && <p>{errors.password}</p>} */}
        <button type="submit">INGRESAR</button>
      </form>
    </div>
  );
}
