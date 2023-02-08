import React, { useContext, useEffect, useRef } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import OrderContext from "../../../context/OrderContext/order-context";
const HeaderCartButton = () => {
  const context = useContext(OrderContext);
  const cartClickHandler = () => {
    context.displayCartModal();
  };
  const cartItemsNoNodeRef = useRef();
  let cartItemsNo = context.cartState.length;
  useEffect(() => {}, [cartItemsNo]);
  return (
    <div onClick={cartClickHandler} className={styles.button}>
      <div className={styles.icon}>
        <CartIcon></CartIcon>
      </div>
      <div>Your Cart</div>
      <p ref={cartItemsNoNodeRef} className={`${styles.badge} ${styles.bump}`}>
        {cartItemsNo}
      </p>
    </div>
  );
};

export default HeaderCartButton;
