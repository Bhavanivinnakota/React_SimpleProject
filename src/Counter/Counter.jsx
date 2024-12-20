import "./Counter.css";
import {useState} from "react";



function Counter(){
        const [state,setState]=useState(0);
        function Increment(){
            setState(state+1);
        }
        function Reset(){
           setState(0);
        }
        function Decrement(){
            setState(state-1);
        }
        
    return(
        
        <div className="container">
            <h1>COUNTER APP</h1>
            <h1><b> {state} </b> </h1>
            <div>
            <button onClick={Decrement} id="decrement">Decrement</button>
            <button onClick={Reset} id="reset">Reset</button>
            <button onClick={Increment} id="increment">Increment</button>
            </div>
        </div>
    );
}
export default Counter;