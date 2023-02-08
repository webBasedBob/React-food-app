import React, { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Card from "../Card/Card";
import CartItem from "../../CartItem/CartItem";
import Modal from "../Modal/Modal";
import OrderContext from "../../../context/OrderContext/order-context";
const Cart = () => {
  const localOrderContext = useContext(OrderContext);
  const [finalPrice, setFinalPrice] = useState(0);
  useEffect(() => {
    let computedPrice = localOrderContext.cartState.reduce((acc, cartItem) => {
      return acc + cartItem.price * cartItem.amount;
    }, 0);
    setFinalPrice(computedPrice);
  }, [localOrderContext.cartState]);
  const formCancelHandler = (e) => {
    e.preventDefault();
    localOrderContext.hideCartModal();
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return localOrderContext.cartModalVisible ? (
    <Modal>
      <div className={styles["cart-items"]}>
        {localOrderContext.cartState.map((cartItem) => {
          return (
            <CartItem
              price={cartItem.price}
              name={cartItem.name}
              amount={cartItem.amount}
              onRemove={"pula"}
              onClick={"coaiele"}
              key={cartItem.id}
              id={cartItem.id}
            ></CartItem>
          );
        })}
      </div>
      <div className={styles.total}>
        <p>Total Amount</p>
        <p>{finalPrice.toFixed(2)} $</p>
      </div>
      <form className={styles.actions}>
        <button
          onClick={formCancelHandler}
          type="cancel"
          className={styles["button--alt"]}
        >
          Close
        </button>
        <button
          onClick={formSubmitHandler}
          type="submit"
          className={styles.button}
        >
          Order
        </button>
      </form>
    </Modal>
  ) : (
    ""
  );
};

export default Cart;
