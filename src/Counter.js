import React, {useState}from 'react';
const Counter=()=> {

const[counter,setCounter] = useState(0)
const [inputVal, setinputVal] = useState("Name")
  const Plus = () =>{
   setCounter(counter +1)
  }

  let onChange = (event)=>{
    const newValue = event.target.value;
    setinputVal(newValue)
  }
  return (
    <React.Fragment>
      <div style={{border:"solid 2px",height:"60px",width:"60px",marginLeft:"10px",textAlign:"center"}}>
     {counter}
     </div>
     <div style={{height:"5px"}}></div>
     <button onClick={Plus}>Increment</button>
     <div style={{height:"20px"}}></div>
     
      {inputVal}
      <input placeholder="Enter a Val..." onChange={onChange}></input>
    </React.Fragment>
  );
}

export default Counter;
