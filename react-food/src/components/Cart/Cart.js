import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { cartActions } from "../../redux-store/cart";
import { checkoutActions } from "../../redux-store/checkout";
import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
const Cart = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => {
    return `$${state.cart.totalAmount.toFixed(2)}`;
  });
  const cartItemsData = useSelector((state) => {
    return state.cart.items;
  });
  const hasItems = cartItemsData.length > 0;

  const decreaseHandler = (key) => {
    dispatch(cartActions.updateAmount({ operation: "decrease", key: key }));
  };
  const increaseHandler = (key) => {
    dispatch(cartActions.updateAmount({ operation: "increase", key: key }));
  };
  const deleteHandler = (key) => {
    dispatch(cartActions.delete(key));
  };
  const orderBtnHandler = () => {
    dispatch(checkoutActions.displayModal());
  };

  const cartItems = (
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
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {hasItems && (
          <button onClick={orderBtnHandler} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Card>
  );
};

export default Cart;
