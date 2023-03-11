import { useState } from "react"

export default function App(){
  const [text,setText] = useState(false);
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      console.log(e.target.value)
      e.target.value = ""
      setText(true);
    }
  };
  const handleInput = () => {}
  return(
    <>
    <input  onChange={handleInput} onKeyPress={handleOnKeyPress}></input>
    </>
  )
}

function a(props){
  return(
    <>
    
    </>
  )
}
