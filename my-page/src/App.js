import { useState } from "react"

export default function App(){
  const [text,setText] = useState(false);
  const [message,setMessage] = useState(["", ]);
  const handleOnKeyPress = e => {
    if(e.target.value === ""){
      setText(false);
    }
    if (e.key === 'Enter') {
      setMessage(e.target.value);
      const arr = Array.from(message);
      arr.unshift(e.target.value);
      console.log(e.target.value);
      e.target.value = ""
      setText(true);
    }
  };
  const handleInput = () => {}
  return(
    <>
    <input  onChange={handleInput} onKeyPress={handleOnKeyPress}></input>
    {text ?  <div>{message}</div> : null}
    </>
  )
}
