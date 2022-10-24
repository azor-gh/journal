import React from 'react'
import { useState,useEffect } from 'react'
import randomcolor from 'randomcolor';
import ChoreForms from './ChoreForms';
function Hooks() {
    //counter
    let [count,setCount]= useState(0);
    //timer 
    let [seconds, setSeconds ] = useState(0);
    let [isActive, setIsActive] = useState(false);
    const [itemName, setItemName] = useState("");
    const [items,setItems] = useState([]);
 
    let text = "Start";


    let toggle = () => {
        setIsActive(!isActive);
    } 
    let reset = () => {
        setSeconds(0);
        setIsActive(false);
    }
    let addItem = (e) => {
        e.preventDefault(); //stops form from submitting
        setItems([...items,{id:items.length, name: itemName}]);
        setItemName("");
        
    }
    const [ username, setUsername ] = useState("Hi, this is Sham");
    // useEffect always has a 2nd parameter
    //1st arg is function
    //2nd arg is dependencies (optional)
    useEffect(() => {let interval = null;
        if(isActive){
        
        interval = setInterval(()=>{
            setSeconds(seconds => seconds + 1)
        },1000)
    }else if(!isActive && seconds !== 0){
        
        clearInterval(interval);
    }
        
        return () => clearInterval(interval)
    },[isActive,seconds]
    
    )
    if(isActive){
        text = "Pause";
  }
  
  return (
    <div>

      <h2>Hooks examples</h2>
      <ChoreForms />

      <h2>List of things </h2>
      <form onSubmit = {addItem}>
        <label>My things</label>
        <input type="text" name="item" value={itemName} onChange={(e) => setItemName(e.target.value)}></input>

        <ul>
          {items.map(eva => (<li key={eva.id}>{eva.name}</li>))}
        </ul>
      </form>


      <h2>{username}</h2>
      <input type="text" name='username' value={username} onChange={
        (event) => {
          setUsername(event.target.value);
        }
      }></input>

      {/* Counter */}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count +1)}>
        +
      </button>
      <button onClick={() => setCount(count -1)}>
        -
      </button>
      <p>Timer Example</p>
      <div style={{color:randomcolor()}}>{seconds}</div>
      <div>
        <button onClick={toggle}>{text}</button>
        <button onClick={reset}>Reset</button>
      </div>

    </div>
  )
}

export default Hooks
