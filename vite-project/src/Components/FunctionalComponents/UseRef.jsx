import { useState ,useRef, useEffect} from "react";

var UseRef=()=>{
   var [text,setText]=useState("");
   var prevText=useRef();
   useEffect(()=>{
    prevText.current=text
   },[text])
    return(
        <section>
            <h1>This is UseRef Component</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h3>Current text is {text}</h3>
            <h3>Previous text is {prevText.current}</h3>
        </section>
    );
};

export default UseRef;