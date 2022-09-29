import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Model.module.css";

const BackDrop=(props)=>{
    return(
        <div className={classes.backdrop} onClose={props.onClick}></div>
    )
}
const ModelOverlay=(props)=>{
    return(
        <div className={classes.modal}>
           <div>{props.children}</div> 
        </div>
    )
}

const portalElement=document.getElementById('overlays');

const Modal=(props)=>{
 return(
    <Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
    </Fragment>
 )
}
export default Modal;