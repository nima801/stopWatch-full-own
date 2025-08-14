import React ,{useContext, useState}from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import { contextCom } from './testContext';


let Text = ({setTxt})=>{
     let textProv = useContext(contextCom)
     return(
          <h1 className="txt-part">
            {textProv}
          </h1>
     )
}

export default Text;