
import { Fragment, useState } from 'react';
import './App.css';
import MainHeader from './Components/MainHeader';
import Meals from './Components/Mels';
import CartProvider from './store/CartProvider';
import Cart from './UI/Cart';

function App() {
  const [showCart, setShowCart]=useState(false);

  const showCartHandler=()=>{
    setShowCart(true);
  }
  
  const hiddenCartHandler=()=>{
    setShowCart(false);
  }

  return (
      <CartProvider>
      {showCart && <Cart onCloseCart={hiddenCartHandler} />}
      <MainHeader onShowCart={showCartHandler}/>
       <Meals />
    </CartProvider>
  );
}

export default App;
