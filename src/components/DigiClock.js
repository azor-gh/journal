import React from 'react'


window.onload = function () {
    DigiClock();
}
function DigiClock() {
    let tail ="";
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    if(hour > 0 && hour < 12){
         tail = "AM";
    }else{
         tail = "PM";
        
    }

    if(min<10){
        min = "0" + min;
    }
    
    if(sec<10){
        sec = "0" + sec;
    }
    let text2 = hour + ":" + min + ":" + sec + tail;
  return (
    <div>
      {text2}
    </div>
  )
}

export default DigiClock
