import "./Counterdisplay.css";
import {useState} from "react"

function Counterdisplay(){
    function Count(props){
        let countstyle = {}
        if(props.val > 0){
            countstyle =  {color:"green"};
        }
        else if(props.val < 0){
            countstyle =  {color:"red"}
        }
        else{
            countstyle = {color:"black"}
        }
        return(
        <b style={countstyle}> Countvalue : {props.val}</b>
          
        )
    }
    return(
             <div id="cardcount">
                <h1>Count Display</h1>
                 <Count val={100}/>
                 <Count val={-1}/>
                 <Count val={0}/>
             </div>
    )
}

export default Counterdisplay;