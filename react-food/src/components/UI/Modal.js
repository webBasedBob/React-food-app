import { Fragment } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import classes from "./Modal.module.scss";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.onClose} display={props.display}></Backdrop>
      <ModalOverlay display={props.display}>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
