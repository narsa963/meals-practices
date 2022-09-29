import React, { Fragment, useContext } from "react";
import CartContext from "../store/cart-context";
import MealsInputForm from "./MealsInputForm";
import classes from './MealsItems.modules.css';


const MealsItems=(props)=>{
    
   const cartCtx= useContext(CartContext)
    const addtoCartHandler=(amount)=>{
      cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    }
  return(
    <Fragment>
        <li className={classes.meal}>
          <div>
          <h3>{props.name}</h3> 
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{props.price}</div>
          </div>
          <div><MealsInputForm  onAddCart={addtoCartHandler}/></div>
        </li>
    </Fragment>
  )

}
export default MealsItems;












