import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import './App.css';
import Cart from './Components/Cart/Cart';
import ContextProvider from './Context/ContextProvider';
const  App =  ()=> {
  const [isShownCart,setisShownCart]=useState(false)
  const Cartshown = ()=>{
    setisShownCart(!isShownCart)
  }
  return (
   <ContextProvider >
   <Header key={'asd'}  showncart={Cartshown} />
  {isShownCart && <Cart key={'asdf'} showncart={Cartshown} />  }
   <main>
    <Meals  />
   </main>
   </ContextProvider>
  );
}

export default App;
