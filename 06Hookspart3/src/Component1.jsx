import React from "react";
function Fx1(){
    console.log("FX1 RENDERED")
    return(  
    <h1>Hey I am a component.</h1>
    )
}

export default React.memo(Fx1)

