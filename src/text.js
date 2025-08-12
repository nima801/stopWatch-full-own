import React ,{useState}from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";


let Text = ({txt,setTxt})=>{
     return(
          <h1 className="txt-part">
            {txt}
          </h1>
     )
}

export default Text;