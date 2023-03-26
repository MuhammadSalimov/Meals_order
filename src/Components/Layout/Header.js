import React from 'react'
import classes from './Header.module.css'
import image from '../../Assest/meals.jpg'
import HeaderButton from './HeaderButton'
const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        < HeaderButton key={'asdfg'} onClick={props.showncart}  />
    </header>
    <div className={classes["main-image"]}>
        <img alt='rasm' src={image}  />
    </div>
    </>
  )
}

export default Header