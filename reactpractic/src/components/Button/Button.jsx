const Button = (props)=>{
  console.log(props);
  return(
    <button 
    style={{background:'red'}}
    onClick={props.handlClikc}>
    {props.title}
    </button>
  )
}

export default Button