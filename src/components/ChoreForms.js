import React from 'react'
import { useState,useEffect } from 'react'
import ChoresList from './ChoresList';

// let choreList = localStorage.getItem("chores") ? JSON.parse(localStorage.getItem("chores")) : [];

function ChoreForms() {
    const [choreData, setChoreData] = useState((localStorage.getItem("chores")) 
    ? JSON.parse(localStorage.getItem("chores")) 
    : []);
    
    const [choreName, setChoreName] = useState(""); //choreData.map(eva => (eva.choreName))
    const [choreDesc, setChoreDesc] = useState(""); //choreData.map(eva => (eva.choreDesc))
    const [choreDate, setChoreDate] = useState(""); //choreData.map(eva => (eva.choreDate))
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // let choreLog = {choreName , choreDesc,choreDate};
        setChoreData([...choreData,{id: choreData.length,name: choreName,desc: choreDesc,date:choreDate}]);
        setChoreName("");
        setChoreDesc("");
        setChoreDate("");
    }

    useEffect(() => {
        localStorage.setItem("chores", JSON.stringify(choreData),choreData)
    })

  return (
    <form onSubmit={handleSubmit}>
      <label> Chore Name</label>
      <input type="text" value={choreName} name="choreName" onChange={e => setChoreName(e.target.value)}></input>

      <label> Description</label>
      <input type="text" value={choreDesc} name="choreDesc" onChange={e => setChoreDesc(e.target.value)}></input>

      <label> Date</label>
      <input type="date" value={choreDate} name="choreDate" onChange={e => setChoreDate(e.target.value)}></input>

      <input type="submit" value="Submit"></input>

      {/* <ul>
        {choreData.map(eva => (<li>{eva.choreName}<br></br>{eva.choreDesc}<br></br>{eva.choreDate}</li>))}
    </ul> */}

    <ChoresList data = {choreData} />

   


    </form>

    
  )
}

export default ChoreForms
