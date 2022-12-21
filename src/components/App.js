import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
const [name,setName] = useState('____');
let text='';
const onChange=(e)=>{
 text = e.target.value;
}
const onClick = () =>{
  if(text.length>0)
setName(text);
else
 setName('____');
}
  return (
    <div id="main">
      <input id='input' onChange={onChange}></input>
      <button id='button' onClick={onClick}>Click</button>
      <p id='text'> Hello my name is {name} and I study at Newton School</p>
    </div>
  )
}


export default App;
