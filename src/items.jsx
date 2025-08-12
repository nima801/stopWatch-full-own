import react from "react";
import reactDom from "react-dom";
import "./style.css"

let Item = (timeArr)=>{

    console.log(timeArr);
    
    return(
        <div className="item-txt">
            {timeArr.children}
        </div>
    )
}
export default Item;