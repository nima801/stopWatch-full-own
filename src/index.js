import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Text from "./text";
import Timer from "./timer";
import Timesubmit from "./timeSub";
import Item from "./items";
import  {contextCom}  from "./testContext";

let App = () => {

  let [isLight,setIsLight] = useState(false);

  const [timeArr, setTimeArr] = useState([]);

  let [txt, setTxt] = useState("WellCome Here...!");

  let handlesetTxt = () => {
    setTxt("Have a Nice Use");
  };

  return (
    <contextCom.Provider value={txt}>
     <div className="main" style={{background : isLight ? "white" : "black"}}>
      <Text  handlesetTxt={handlesetTxt}/>
      <Timer isLight={isLight} setIsLight={setIsLight} timeArr={timeArr} setTimeArr={setTimeArr}/>
      <Timesubmit>
         {timeArr}
       </Timesubmit>
     </div>
    </contextCom.Provider>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(<App/>);


