import React, { useContext } from "react";
import MealsForm from "./MealsForm";
import classes from "./Mealsitem.module.css";
import Context from "../../../Context/Context";
const MealsItem = (props) => { 
  const cartctx = useContext(Context)
  const getAmountitem = (son) =>{
    cartctx.Add({
      id:props.id,
      name:props.name,
      price:props.price,
      amount:son,
    })
  }
  
    return (
      <div className={classes.meal}>
        <div>
        <h3 >{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$ ${props.price}`}</div>
        </div>
        <div>
          <MealsForm  Malumotolish={getAmountitem}/>
        </div>
      </div>
    );
 
};

export default MealsItem;
