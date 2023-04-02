import React from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.scss";
import { cartActions } from "../../redux-store/cart";
import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { googleMapActions } from "../../redux-store/googleMap";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItemsData = useSelector((state) => state.cart.items);
  const totalAmount = useSelector(
    (state) => `$${state.cart.totalAmount.toFixed(2)}`
  );
  const hasItems = cartItemsData.length > 0;

  const decreaseHandler = (key) => {
    dispatch(cartActions.updateAmount({ operation: "decrease", key }));
  };

  const increaseHandler = (key) => {
    dispatch(cartActions.updateAmount({ operation: "increase", key }));
  };

  const deleteHandler = (key) => {
    dispatch(cartActions.delete(key));
  };

  const orderBtnHandler = () => {
    dispatch(googleMapActions.displayModal());
  };

  const renderCartItems = () => (
    <ul className={classes["cart-items"]}>
      {cartItemsData.map((item) => (
        <CartItem
          key={item.key}
          localId={item.key}
          name={item.name}
          amount={item.amount}
          price={item.finalPrice / item.amount}
          onDelete={deleteHandler}
          onDecrease={decreaseHandler}
          onIncrease={increaseHandler}
        />
      ))}
    </ul>
  );

  return (
    <Card>
      {renderCartItems()}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {hasItems && (
          <Button label="Pick address" config={{ onClick: orderBtnHandler }} />
        )}
      </div>
    </Card>
  );
};

export default Cart;
