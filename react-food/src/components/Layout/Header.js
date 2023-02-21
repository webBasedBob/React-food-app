import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux-store";
const Header = (props) => {
  const dispatch = useDispatch();
  const displayAuthModal = () => {
    dispatch(authActions.displayModal());
  };
  let user = useSelector((state) => {
    return state.auth.user;
  });
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <Button
          config={{ onClick: displayAuthModal }}
          label={user ? user : "Log in"}
        ></Button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
