import React from 'react'
import { useRef } from 'react';
import { useState , useEffect } from 'react'
import ContactList from '../components/ContactList'

let list = localStorage.getItem("ContactUs") ? JSON.parse(localStorage.getItem("ContactUs")) : [];

const ContactUs = () => {
        let firstRefName = useRef("");
        let lastRefName = useRef("");
        let emailRef = useRef("");
        let messageRef = useRef("");
        let[id,setId] = useState(Date.now());
        let[infoList, setInfoList] = useState(list);
      

        const handleSubmit = (event) => {
            event.preventDefault();
            
            let info = {
            id: id,firstName:firstRefName.current.value,
            lastName: lastRefName.current.value,
             email:emailRef.current.value,
             message: messageRef.current.value};
           
             
            setInfoList([...infoList, info]);
            setId(Date.now);
            firstRefName.current.value = "";
            lastRefName.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
          //  alert(JSON.stringify(info));
            }

        let handleRemove = (e) => {
          let num = parseInt(e.target.id);
          const remove = [...infoList].filter((item) => {
            return item.id !== num;
          });
          setInfoList(remove);
          

        }
        let handleUpdate = (e) => {
  
          let num = parseInt(e.target.id);
          const update = [...infoList].filter((item) => {
            return (item.id === num);
          });
            firstRefName.current.value = update[0].firstName;
            lastRefName.current.value = update[0].lastName;
            emailRef.current.value = update[0].email;
            messageRef.current.value = update[0].message;
          
         
          alert(num);

        }
        let clearAll = () => {
          localStorage.removeItem("ContactUs");
          setInfoList([]);
        }


        useEffect(
            () => localStorage.setItem("ContactUs",JSON.stringify(infoList)),[infoList]
        )

        
  return (
    <div>
      <p id="update"></p>
      <form name="form" onSubmit={handleSubmit}>
        <label for="firstName">First Name</label>
        <br></br>
        <input tabIndex={1} ref={firstRefName} id="firstName" type="text" name="firstName"  required></input>
        <br></br>
        <label for="lastName">Last Name</label>
        <br></br>
        <input tabIndex={2} ref={lastRefName} id="lastName" type="text" name="lastName"  required></input>
        <br></br>
        <label for="email">Email Address</label>
        <br></br>
        <input tabIndex={3} ref={emailRef} id="email" type="email" name="email"  required></input>
        <br></br>
        <label for="message">Message</label>
        <br></br>
        <textarea tabIndex={4} ref={messageRef}id="message" type="text" name="message" placeholder="enter your message here"  required></textarea>
        <br></br>
        <button type="submit">Submit</button>

        <ContactList infolist = {infoList} handleRemove = {handleRemove} handleUpdate = {handleUpdate} clearAll = {clearAll}/>
      </form>
    </div>
  )
}

export default ContactUs
