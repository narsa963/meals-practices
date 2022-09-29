import React, { Fragment } from "react";
import HeaderButton from "./HeaderButton";

const MainHeader =(props)=>{
    return(
        <Fragment>
            <header>
                <h1>ReactMeals</h1>
                 <HeaderButton  onClick={props.onShowCart}/>
            </header>
            <div className="main-image">
               <img src="meals.jpg" alt="food" /> 
            </div>
        </Fragment>
    )
}
export default MainHeader;