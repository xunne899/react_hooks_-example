import React ,{useEffect, useState}from "react";

import axios from "axios";

export default function Effect(){
const[data,setData] = useState("");
const [count,setCount] = useState(0);

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
        setData(response.data[0].email);
        console.log("API was Called")
    })
},[])


    return(
    <React.Fragment>
        <div style={{textAlign:"center"}}>
        <h1>Data Count</h1>
    
        <div>{data}</div>
        <div>{count}</div>

    <button 
    onClick ={()=>{
    setCount(count + 1)
}}>Click</button>

<button 
    onClick ={()=>{
        setCount(0);
    }}>Reset</button>
</div>
    </React.Fragment>
    )
}