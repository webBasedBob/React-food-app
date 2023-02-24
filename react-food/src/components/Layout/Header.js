import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/showarma-logo.jpg";
import classes from "./Header.module.scss";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux-store";
import { Link, NavLink } from "react-router-dom";
const Header = (props) => {
  const dispatch = useDispatch();
  const displayAuthModal = () => {
    dispatch(authActions.displayModal());
  };
  let user = useSelector((state) => {
    return state.auth.user;
  });
  console.log(user);
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to={"/"} className={classes.logo}>
          <img src={logo}></img>
        </Link>
        <div className={classes["nav-links"]}>
          <NavLink
            to="/"
            className={({ isActive }) => {
              if (isActive) return `${classes["nav-link"]} ${classes.active}`;
              return `${classes["nav-link"]}`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/food"
            className={({ isActive }) => {
              if (isActive) return `${classes["nav-link"]} ${classes.active}`;
              return `${classes["nav-link"]}`;
            }}
          >
            Buy Shawarma
          </NavLink>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
        {user ? (
          <Link className={classes["auth-btn"]} to="/account">
            {user}
          </Link>
        ) : (
          <Button className={classes["auth-btn"]} to="/account">
            "Log in"
          </Button>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
