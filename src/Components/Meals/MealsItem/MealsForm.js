import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealsForm.module.css";
const MealsForm = (props) => {
  const inputRef = useRef()
  const submitChange = (event) => {
    event.preventDefault();
    const Hisobkitob = + inputRef.current.value;
    props.Malumotolish(Hisobkitob)
  };
  return (
    <form onSubmit={submitChange} className={classes.form}>
      <Input
      refAmount={inputRef}
        input={{
          id: "amount",
          max: "5",
          min: "1",
          type: "number",
          defaultValue: "1",
          label: "Amount",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealsForm;
