import { useState ,useEffect} from "react";

var UseEffect=()=>{
    var [text,setText]=useState("Kongu");
    useEffect(()=>{
        setText("KEC")
    },[text])//text cannot change when typed
    //},[])//text can be changed when typed
    return(
        <section>
            <h2>Use Effect</h2>
            <input type="text" placeholder="Enter text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <h2>Text typed is {text}</h2>
        </section>
    );
};
export default UseEffect;