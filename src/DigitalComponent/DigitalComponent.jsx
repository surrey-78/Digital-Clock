import React, { useState } from 'react'
import "./DigitalComponent.css"

const DigitalComponent = () => {
    const [time,settime] = useState(new Date());
    setInterval(() => 
    {
        settime(new Date());
    },1000)    //Update time after every 1 second
    
    const rawhours = time.getHours();
    //convert clock 12 hour format
    const hours = (rawhours % 12 || 12).toString().padStart(2,'0')
    const period = rawhours >= 12 ? ' PM' : ' AM' ;
    const minutes = time.getMinutes().toString().padStart(2,'0');
    const seconds = time.getSeconds().toString().padStart(2,'0');
    //padstart is used show hour, minute and seconds have two digits
    
    return (
    <div className='container'>
        <div className='clock'>
            <div className='time'>
                <span className='hours'>{hours}:<div className='view'>HOURS</div></span>
                <span className='minutes'>{minutes}:<div className='view'>MINUTES</div></span> 
                <span className='seconds'>{seconds}<div className='view'>SECONDS</div></span>
                <div className='period'>{period}</div>
                
            </div>
        </div>
    </div>
  )
}

export default DigitalComponent



// 10-12  -----> 10:30 adressing ,  10:30 ---> 11:10 theory , next hands on ...