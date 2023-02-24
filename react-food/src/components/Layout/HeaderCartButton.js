import { useContext, useEffect, useState } from "react";

import CartIcon from "../Checkout/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const items = useSelector((state) => {
    return state.cart.items;
  });

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Link to="/checkout" className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </Link>
  );
};

export default HeaderCartButton;
