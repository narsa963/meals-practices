import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from './Cart.module.css';
import CartItem from "./CartItems";
import Modal from "./Modal";



const Cart=(props)=>{
  console.log('---items');

  const cartCtx =useContext(CartContext);

  const toatalAmount =`$${cartCtx.totalAmount.toFixed(2)}`;
  
  const hasItems=cartCtx.items.length >0;

  const cartItemsAddHanler=(item)=>{
      cartCtx.addItem(item);   
  }
  const cartItemRove=(id)=>{
    cartCtx.removeItem(id)
  }
    console.log('cartiems-----');

    console.log(cartCtx);
    console.log('cartiems-----');
    const cartItems = (
    <ul className={classes['cart-items']}>
    {cartCtx.items.map((item)=>(
    <CartItem 
      key={item.id}
      id={item.id}
      name={item.id}
      price={item.price}
      amount={item.amount}
      onAdd={cartItemsAddHanler.bind(null, item)}
      onRemove={cartItemRove.bind(null, item.id)}
    />
    ))}
    </ul>
    );
  
  console.log(cartItems);

return( 
    <Modal>
       {cartItems}
       <div className={classes.total}>
        <span>TotalAmount</span>
        <span>{toatalAmount}</span>
       </div> 
       <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
       </div>
    </Modal>

)
}
export default Cart;