import React from "react";
import styles from "./PizzaImage.css";
import pizzaImage from "../../assets/pizza.jpg";
const pizzaImage = props => (
  <div className={styles.pizzaImage}>
    <img src={pizzaImage} alt="pizza" className={styles.pizzaImg} />
  </div>
);
export default pizzaImage;
