import  { createContext } from 'react'

const Context =createContext (
  {
    Items:[],
    TotalAmount:0,
    Add:(item)=> item,
    remove: (id)=> id,

  }
)
export default Context