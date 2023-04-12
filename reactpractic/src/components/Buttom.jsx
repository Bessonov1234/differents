const Button = (props)=>{
  console.log(props);
  return(
    <button onClick={props.handlClikc}>{props.title}</button>
  )
}

export default Button