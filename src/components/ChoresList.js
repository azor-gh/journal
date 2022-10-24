import React from 'react';

function ChoresList(props) {
    let pData = props.data;
  return (
    <table className="table table-info">
        <tr>
            <th>Chore Name</th>
            <th>Description</th>
            <th>Date</th>
        </tr>
        {pData.map((data) => 
        <tr>
            <td>{data.name}</td>
            <td>{data.desc}</td>
            <td>{data.date}</td>
        </tr>
        )}
    </table>
  )
}

export default ChoresList
