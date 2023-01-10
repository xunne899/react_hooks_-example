import React ,{useEffect, useState}from "react";

import axios from "axios";

export default function Effect(){
const[data,setData] = useState("")

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{
        setData(response.data[0].email);
        console.log("API was Called")
    })
},[])

    return(
    <React.Fragment>
    {data}
    </React.Fragment>)
}