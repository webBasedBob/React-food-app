import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Fragment } from "react";
import Auth from "../../Auth/Auth";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../../assets/showarma-logo.png";
import classes from "./Header.module.scss";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux-store/auth";
import { Link, NavLink } from "react-router-dom";
import HeaderLink from "./HeaderLink";
const Header = (props) => {
  // const dispatch = useDispatch();
  // const displayAuthModal = () => {
  //   dispatch(authActions.displayModal());
  // };
  // let user = useSelector((state) => {
  //   return state.auth.user;
  // });
  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     dispatch(authActions.logIn(user.email));
  //   }
  // });
  // const authModalIsDisplayed = useSelector((context) => {
  //   return context.auth.displayAuthModal;
  // });
  const HeaderLinkClass = ({ isActive }) => {
    if (isActive) return `${classes["nav-link"]} ${classes.active}`;
    return `${classes["nav-link"]}`;
  };
  return (
    <Fragment>
      {/* <Auth display={authModalIsDisplayed}></Auth> */}
      <header className={classes.header}>
        <Link to={"/"} className={classes.logo}>
          <img src={logo}></img>
        </Link>
        <div className={classes["nav-links"]}>
          <HeaderLink config={{ to: "/", className: HeaderLinkClass }}>
            Home
          </HeaderLink>
          <HeaderLink config={{ to: "/food", className: HeaderLinkClass }}>
            Meals
          </HeaderLink>
          <HeaderLink config={{ to: "/checkout", className: HeaderLinkClass }}>
            Cart
          </HeaderLink>
          <HeaderLink
            config={{ to: "/delivery-status", className: HeaderLinkClass }}
          >
            Delivery Status
          </HeaderLink>
        </div>
        {/* <HeaderCartButton onClick={props.onShowCart} /> */}
        {/* {user ? (
          <Link className={HeaderLinkClass} to="/account">
            {user}
          </Link>
        ) : (
          <Button
            className={classes["auth-btn"]}
            config={{ onClick: displayAuthModal, type: "button" }}
            label="Log in"
          ></Button>
        )} */}
      </header>
    </Fragment>
  );
};

export default Header;
