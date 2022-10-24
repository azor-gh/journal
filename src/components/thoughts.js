import React from 'react'
import { useRef } from 'react';
import { useState , useEffect } from 'react'
import "../css/task.css"

let list = localStorage.getItem("thoughts") ? JSON.parse(localStorage.getItem("thoughts")) : [];

function Thoughts() {
    
    let [id,setId] = useState(Date.now());
    let thRef = useRef("");
    let dateRef = useRef("");
    let[thList, setTaskList] = useState(list);

    const handleSubmit = (event) => {
        event.preventDefault();
        setId(Date.now());
        let info = {
        id:id,
        thName:thRef.current.value,
        date: dateRef.current.value};
        setTaskList([...thList, info]);
        thRef.current.value = "";
        dateRef.current.value = "";
        }

        const handleRemove = (event) => {
            event.preventDefault();
                let num = parseInt(event.target.id);
                const remove = [...thList].filter((item) => {
                  return item.id !== num;
                });
                setTaskList(remove);
                
      
        
            }

        useEffect(
            () => localStorage.setItem("thoughts",JSON.stringify(thList)),[thList]
        )
  return (
    <div className='style display bg-info'>
        <form >
        <textarea  ref={thRef} id="task" type="text" name="task" placeholder="input thoughts for the day"  required></textarea>
        <br></br>
        <input ref={dateRef} type="date" id="date" name="date" required></input>
        <br></br>
        <button className='border rounded-pill' type="submit" onClick={handleSubmit}>Save</button>
        </form >
        <div className='display'>
        <h5 className='text-secondary'>Thoughts for the day</h5>
        {thList.map(item => (
            <>
            <hr></hr>
            <div > <span className='bg-dark text-warning'>{item.date}</span> <br></br>
             {item.thName} <button id={item.id} className='border-0 bg-secondary rounded btn btn-sm' type="submit" onClick={handleRemove}><i class="bi bi-trash3-fill"></i></button></div>
             
             
             </>
        ))}
        </div>
    </div>
  )




  
}

export default Thoughts
