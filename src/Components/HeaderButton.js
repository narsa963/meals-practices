import React, { useContext } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import CartContext from '../store/cart-context';

const HeaderButton=(props)=>{

  const ctxCart=useContext(CartContext);
    console.log('----Head Button Start---');

    console.log(ctxCart.items);
    console.log(ctxCart);
    console.log('----Head Button end---');
    
    let numberOfItems = ctxCart.items.reduce((currentNumber,item)=>{    
    return (currentNumber + item.amount);
    }, 0);
    


   return(
    <button className='header-btn' onClick={props.onClick}>
      <span className='icon'><FaCartArrowDown/></span>
      <span>yourcart</span>
      <span className='numberof-items'>{numberOfItems}</span>
    </button>
   )
}
export default HeaderButton;