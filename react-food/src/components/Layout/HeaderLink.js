import React from "react";
import { NavLink } from "react-router-dom";
const HeaderLink = (props) => {
  return <NavLink {...props.config}>{props.children}</NavLink>;
};

export default HeaderLink;
