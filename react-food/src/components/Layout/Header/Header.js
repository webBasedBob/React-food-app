import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Fragment, useState } from "react";
import Auth from "../../Auth/Auth";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../../assets/showarma-logo.png";
import { Close, Menu } from "../../../assets/icons";
import classes from "./Header.module.scss";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux-store/auth";
import { Link, NavLink } from "react-router-dom";
import HeaderLink from "./HeaderLink";
const Header = (props) => {
  const HeaderLinkClass = ({ isActive }) => {
    if (isActive) return `${classes["nav-link"]} ${classes.active}`;
    return `${classes["nav-link"]}`;
  };
  const [navLinksVisible, setNavLinksVisible] = useState(false);

  const showNavLinks = () => {
    setNavLinksVisible(true);
  };

  const hideNavLinks = () => {
    setNavLinksVisible(false);
  };
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Link to={"/"} className={classes.logo}>
          <img src={logo}></img>
        </Link>
        <div
          className={`${classes["nav-links"]} ${
            navLinksVisible ? classes.expanded : ""
          }`}
        >
          <div className={classes.close} onClick={hideNavLinks}>
            {Close}
          </div>
          <div className={classes.menu} onClick={showNavLinks}>
            {Menu}
          </div>
          <HeaderLink
            config={{
              onClick: hideNavLinks,
              to: "/",
              className: HeaderLinkClass,
            }}
          >
            Home
          </HeaderLink>
          <HeaderLink
            config={{
              onClick: hideNavLinks,
              to: "/food",
              className: HeaderLinkClass,
            }}
          >
            Meals
          </HeaderLink>
          <HeaderLink
            config={{
              onClick: hideNavLinks,
              to: "/checkout",
              className: HeaderLinkClass,
            }}
          >
            Cart
          </HeaderLink>
          <HeaderLink
            config={{
              onClick: hideNavLinks,
              to: "/delivery-status",
              className: HeaderLinkClass,
            }}
          >
            Delivery Status
          </HeaderLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
