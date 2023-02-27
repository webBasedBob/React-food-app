import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { cartActions } from "../../redux-store/index";
import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
const Cart = (props) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => {
    return state.cart.totalAmount;
  });
  const cartItemsData = useSelector((state) => {
    return state.cart.items;
  });
  const totalAmount = `$${amount.toFixed(2)}`;
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
  const orderBtnHandler = () => {};
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
