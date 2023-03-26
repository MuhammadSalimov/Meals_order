import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Context from "../../Context/Context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const addItemHandler = (item) => {
    cartCtx.Add({
      ...item,
      amount:1
    })
  };

  const removeItemHandler = (id) => {
    cartCtx.remove(id)
  };

  const cartCtx = useContext(Context);
  const fixedTotalamount = cartCtx.TotalAmount.toFixed(2);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.Items.map((item) => {
        return (
          <CartItems
          key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addItemHandler.bind(null,item)}
            onRemove={removeItemHandler.bind(null,item.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal cartshown={props.showncart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${fixedTotalamount}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.showncart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
