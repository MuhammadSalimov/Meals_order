import React, { useReducer } from "react";
import Context from "./Context";

const Defaultstate = {
  Items: [],
  TotalAmount: 0,
};

const reduserFN = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updateTotalamount =
        state.TotalAmount + action.maxsulot.price * action.maxsulot.amount;
      const existingItemIndex = state.Items.findIndex(
        (item) => item.id === action.maxsulot.id
      );

      const existingItem = state.Items[existingItemIndex];
      let totalItems
      if (existingItem) {
        const totalItem = {
          ...existingItem,
          amount: existingItem.amount + action.maxsulot.amount
        };
        totalItems = [...state.Items];
        totalItems[existingItemIndex] = totalItem;
      }else{
        totalItems = state.Items.concat(action.maxsulot);
      }
       return {
        Items:totalItems,
        TotalAmount: updateTotalamount,
      };
        case 'REMOVE':
        const existingItemIndex1= state.Items.findIndex(
          (item)=> item.id === action.maxsulot
        )
        const existingItem1 = state.Items[existingItemIndex1]
        const updateTotalamount1 = state.TotalAmount - existingItem1.price
        let totalItems1;
        if(existingItem1.amount===1){
          totalItems1=state.Items.filter((item)=> item.id !==action.maxsulot)
          console.log(totalItems1);
        } else{
          const totalItem1 ={
            ...existingItem1,
            amount:existingItem1.amount-1
          }
          totalItems1=[
            ...state.Items
          ]
          totalItems1[existingItemIndex1]=totalItem1 
        }
        return {
          Items:totalItems1,
          TotalAmount:updateTotalamount1,
        };
        default:
      return state;
  }
};
const ContextProvider = (props) => {
  const [state, dispatchFN] = useReducer(reduserFN, Defaultstate);
  const AdditemHandler = (item) => {
    dispatchFN({ type: "ADD", maxsulot: item });
  };
  const removeItemFromcart = (id) => {
      dispatchFN({type:'REMOVE', maxsulot:id})
  };
  const Cartcontext = {
    Items: state.Items,
    TotalAmount: state.TotalAmount,
    Add: AdditemHandler,
    remove: removeItemFromcart,
  };
  return (
    <Context.Provider value={Cartcontext}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
