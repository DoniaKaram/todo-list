import logo from './logo.svg';
import './App.css';
import { useState,useRef } from 'react';

function App() {
  const [x,setX]=useState([]);
  const inputRef=useRef();
  
  const add=()=>{
    const value=inputRef.current.value;
    const newData={completed:false,value};
    setX([...x,newData]);
    inputRef.current.value="";
  }

  const itemDone=(index)=>{
    const newx=[...x];
    x[index].completed=!x[index].completed;
    setX(newx);

  }
  const toDelete=(index)=>{
    const newx=[...x];
    newx.splice(index,1);
    setX(newx);

  }
  return (
    <div className="App">
     <h1>To do list</h1>
     <ul>
      {
        x.map(({value,completed},index)=>{
          
          return<div  className="div10"> 
          <li  className={completed?"diffstyle":""} onClick={()=>itemDone(index)}>{value}</li>
          <span onClick={()=>toDelete(index)}>X</span>
          </div>

        })

      }
     </ul>
     <input type='text' ref={inputRef} placeholder='Enter Your Task...'/>
     <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
