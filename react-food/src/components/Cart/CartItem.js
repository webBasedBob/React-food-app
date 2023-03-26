import { Minus, Plus, TrashBin } from "../../assets/icons";
import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes["cart-item"]}>
      <div className={classes["item-details"]}>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            props.onDelete(props.localId);
          }}
        >
          {TrashBin}
        </button>
        <button
          onClick={() => {
            props.onDecrease(props.localId);
          }}
        >
          {Minus}
        </button>
        <button
          onClick={() => {
            props.onIncrease(props.localId);
          }}
        >
          {Plus}
        </button>
      </div>
    </li>
  );
};

export default CartItem;
