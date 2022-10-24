import React from 'react'
import ContactUs from '../pages/ContactUs'

function ContactList({infolist,handleRemove,clearAll,handleUpdate}) {
    let pData = infolist;
  return (
    <table className="table table-info">
      <button type="button" className="d-flex justifyContent-flex-end" onClick={clearAll} >DeleteAll</button> <br></br>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>msg</th>
            <th>Action</th>
        </tr>
        {pData.map((data) => 
        <tr><td>{data.id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>{data.message}</td>
            <td><button type="button" id={data.id} onClick={handleRemove} >Remove</button>
            <button type="button" id={data.id} onClick={handleUpdate} >Update</button></td>
            
        </tr>
        )}
    </table>
  )
}

export default ContactList
