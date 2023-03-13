import React from "react";
import classes from "./Backdrop.module.scss";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
const portalElement = document.getElementById("overlays");

const Backdrop = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={props.display}
          timeout={500}
          onEnter={() => {
            console.log("ee");
          }}
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
          <div className={classes.backdrop} onClick={props.onClose} />
        </CSSTransition>,
        portalElement
      )}
    </>
  );
};

export default Backdrop;
