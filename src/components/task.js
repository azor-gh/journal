import React from 'react'
import { useRef } from 'react';
import { useState , useEffect } from 'react'
import "../css/task.css"

let list = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];

function Task() {
    
    let [id,setId] = useState(Date.now());
    let taskRef = useRef("");
    let dateRef = useRef("");
    let[taskList, setTaskList] = useState(list);

    const handleSubmit = (event) => {
        event.preventDefault();
        setId(Date.now());
        let info = {
        id:id,
        taskName:taskRef.current.value,
        date: dateRef.current.value};
        setTaskList([...taskList, info]);
        taskRef.current.value = "";
        dateRef.current.value = "";
        }

        const handleRemove = (event) => {
            event.preventDefault();
                let num = parseInt(event.target.id);
                const remove = [...taskList].filter((item) => {
                  return item.id !== num;
                });
                setTaskList(remove);
                
      
        
            }

        useEffect(
            () => localStorage.setItem("task",JSON.stringify(taskList)),[taskList]
        )
  return (
    <div className='style display bg-info'>
        <form >
        <textarea  ref={taskRef} id="task" type="text" name="task" placeholder="input task"  required></textarea>
        <br></br>
        <input ref={dateRef} type="date" id="date" name="date" required></input>
        <br></br>
        <button className='border rounded-pill' type="submit" onClick={handleSubmit}>Save</button>
        </form >
        <div className='display'>
        <h5 className='text-secondary'>Tasks</h5>
        {taskList.map(item => (
            <>
            <hr></hr>
            <div > <span className='bg-dark text-warning'>{item.date}</span> <br></br>
             {item.taskName} <button id={item.id} className='border-0 bg-secondary rounded btn btn-sm' type="submit" onClick={handleRemove}><i class="bi bi-trash3-fill"></i></button></div>
             
             
             </>
        ))}
        </div>
    </div>
  )




  
}

export default Task
