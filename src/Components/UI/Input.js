import React from "react";
import classes from "./Input.module.css";
const Input =React.forwardRef((props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.input.label}</label>
      <input ref={props.refAmount} {...props.input} />
    </div>
  );
})

export default Input;
