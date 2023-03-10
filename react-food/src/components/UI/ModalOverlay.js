import React from "react";
import classes from "./ModalOverlay.module.scss";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
const portalElement = document.getElementById("overlays");

const ModalOverlay = (props) => {
  return ReactDOM.createPortal(
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.display}
      timeout={500}
      classNames={{
        appear: classes.init,
        appearActive: classes["active-appear"],
        appearDone: classes["done-appear"],
        enter: classes["enter"],
        enterActive: classes["active-enter"],
        enterDone: classes["done-enter"],
        exit: classes["exit"],
        exitActive: classes["active-exit"],
        exitDone: classes["done-exit"],
      }}
    >
      <div className={classes.modal}>
        <div>{props.children}</div>
      </div>
    </CSSTransition>,
    portalElement
  );
};

export default ModalOverlay;
