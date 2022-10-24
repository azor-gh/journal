import React from 'react'

const Greetings = (props) => {
    let name = props.firstName + " " + props.lastName;
    let greetings;
    let d = new Date();
    let houroftheDay = d.getHours();

    greetings = (houroftheDay < 12) ? " Good Morning":
    (houroftheDay > 12 && houroftheDay < 18)?"Good Afternoon!":
    (houroftheDay >= 18) ? "good evening.":"";
  return (
    <div>
        {greetings}
    </div>
  )
}

export default Greetings
