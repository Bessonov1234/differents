import React from "react";
import Button from "./Buttom";
const Counter = ()=>{
  const handlInc= ()=>{
    console.log('+');
  }
  const handlDirc= ()=>{
    console.log('-');
  }
  return(

    <div className="button=m=n-wrap">
    <Button title="Додавання" 
    handlClikc={handlInc}
/>
      <Button title="Віднімання"
      handlClikc={handlDirc}
 />
    </div>
  )
}

export default Counter