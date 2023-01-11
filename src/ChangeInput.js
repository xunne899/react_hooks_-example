import React, {useRef} from "react";


const ChangeInput = () =>{
const inputRef = useRef(null);

const onClick = () =>{
    inputRef.current.value = " ";
}

    return(
<React.Fragment>
<div style={{textAlign:"center"}}>
<h1>Shiseido</h1>
<input type="text" ref={inputRef}/>
<button onClick={onClick}>Change my name</button>
</div>
</React.Fragment>
    )
}

export default ChangeInput;