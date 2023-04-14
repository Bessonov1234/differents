import Button from "../Button/Button";
const Counter = ()=>{
  const handInk = ()=>{
console.log('+');
  }
  const handDirc = ()=>{
    console.log('+');
      }
      return(
        <div 
         className="button-wrap"
         >
<Button  
title="Add"
label="someLabel"
handClick={handInk}
/>
<Button  
title="Add"
label="someLabel"
handClick={handDirc}
/>
        </div>
      )
}

export default Counter