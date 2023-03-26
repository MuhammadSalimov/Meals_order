import React from 'react'
import classes from './CartItems.module.css'

const CartItems = (props) => {
  return (
    <li className={classes['cart-item']}>
        <div>
            <h2>{props.name}</h2>
            <div className={classes.summary}>
                <span className={classes.price}>{`$${props.price}`}</span>
                <span className={classes.amount}>x {props.amount}</span>
            </div>
        </div>
        <div className={classes.action}>
            <button onClick={props.onAdd}>+</button>
            <button onClick={props.onRemove}>-</button>
        </div>

    </li>
  )
}

export default CartItems