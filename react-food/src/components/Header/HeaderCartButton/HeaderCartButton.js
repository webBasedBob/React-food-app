import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../../context//OrderContext/order-context";
const HeaderCartButton = () => {
  const context = useContext(CartContext);
  return (
    <>
      <div className={styles.button}>
        <div className={styles.icon}>
          <CartIcon></CartIcon>
        </div>
        <div>Your Cart</div>
        <p className={`${styles.badge} ${styles.bump}`}>
          {context.cartState.length}
        </p>
      </div>
    </>
  );
};

export default HeaderCartButton;
