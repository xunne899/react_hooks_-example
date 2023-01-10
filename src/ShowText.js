import React,{useState} from "react";


const ShowText = () =>{

const[counter,setCounter] = useState(0)
const [display, setDisplay] = useState(true)

return(
<React.Fragment>
    <h1>{counter}</h1>
    <button
    onClick={()=>{
        setCounter(counter+1);
        setDisplay(!display)
    }}
    >Hit me !</button>
    {display && <p>Text Display</p>}
</React.Fragment>
)
}

export default ShowText;