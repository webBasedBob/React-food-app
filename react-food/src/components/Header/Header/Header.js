import styles from "./Header.module.css";
import React from "react";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import MealsSummary from "../../MealsSummary/MealsSummary";
const Header = () => {
  return (
    <div>
      <div className={styles["main-image"]}>
        <img src={require("../../../meals.jpg")}></img>
      </div>
      <div className={styles.header}>
        <div className={styles.title}>REACT MEALS</div>
        <HeaderCartButton />
      </div>
      <MealsSummary />
    </div>
  );
};

export default Header;
