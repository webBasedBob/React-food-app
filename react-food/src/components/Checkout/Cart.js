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

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.remove(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(cartActions.add({ ...item, amount: 1 }));
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartItemsData.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderBtnHandler = () => {
    props.onShowCheckouHandler();
    props.onClose();
  };
  return (
    <Card>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
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
