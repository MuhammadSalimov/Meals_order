import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const Backdrops = (props) => {
    return <div onClick={props.cartshown} className={classes.Backdrop}></div>;
  };
  const Modal1 = (props) => {
    return <div className={classes.modal}>{props.children}</div>;
  };

  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrops cartshown={props.cartshown} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <Modal1> {props.children}</Modal1>,
        document.getElementById("overlays")
      )}
    </div>
  );
};

export default Modal;
