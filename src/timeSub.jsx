import React from "react";
import ReactDOM from "react-dom/client";
import Item from "./items";
 
let Timesubmit = (timeArr)=>{
    // console.log(timeArr.children);
    
    return(
        <div className="time-sub">
                {timeArr.children.map((c)=>(
                    <Item>{c}</Item>
                ))
                }
                
        </div>
    )
}
export default Timesubmit;