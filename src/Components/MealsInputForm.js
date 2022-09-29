import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealsInputForm.modules.css"

const MealsInputForm=(props)=>{
    const [amountisValid, setAmountisValid]=useState(true)
    const amountInputRef=useRef();

    const SubmitInputRef=(event)=>{
        event.preventDefault();

        const enteredAmount=amountInputRef.current.value;
        console.log(enteredAmount);
        const enteredAmountNumber= +enteredAmount;
        console.log(enteredAmountNumber);
        if(
          enteredAmountNumber.length === 0 || 
          enteredAmountNumber < 1 || 
          enteredAmountNumber > 5
          ){
            setAmountisValid(true)
         return;
        }
      props.onAddCart(enteredAmountNumber)
    }

  return(
    <form className={classes.enter} onSubmit={SubmitInputRef}>
       <Input 
        ref={amountInputRef} 
        label="Amount"
        input={{
         id:'amount',
         type:'number',
         min:'1',
         max:"5",
         step:"1",
         defaultValue:"1"

        }}
       />
       <button>+ Add</button> 
       {!amountisValid && <p>please check</p>}
    </form>
  )
}
export default MealsInputForm;