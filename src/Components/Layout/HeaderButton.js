import React, { useContext } from 'react'
import Context from '../../Context/Context'
import {BsFillCartFill} from 'react-icons/bs'
import classes from './HeaderButton.module.css'
const HeaderButton = (props) => {
  const CartX= useContext(Context)
  const numberOfItems=CartX.Items.reduce((prev,current)=>{
return prev+ current.amount
  },0)
  return (
    <>
    <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}><BsFillCartFill /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
    </button>
    </>
  )
}

export default HeaderButton