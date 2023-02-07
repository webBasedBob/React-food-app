import React from "react";
import styles from "Cart.module.css";
import Card from "../Card/Card";
import CartItem from "../../CartItem/CartItem";
import Modal from "../Modal/Modal";
const Cart = () => {
  let arr = [];
  return (
    <Modal>
      {arr.map((cartItem) => {
        return (
          <CartItem
            price={cartItem.price}
            name={cartItem.name}
            amount={cartItem.amount}
            onRemove={"pula"}
            onClick={"coaiele"}
          ></CartItem>
        );
      })}
    </Modal>
  );
};

export default Cart;
