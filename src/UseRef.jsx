import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
   
    const[count,setCount]=useState(0)
   // let a=0;
   //this way every time the count value changes the console is printed but a is shown as 1, bcoz at every count change the component is re-rendered and again the value of a is set to 0 i.e. the value of a does not persiste to handle this useRef hook is used.

   //other solution

   const a=useRef(0)
    useEffect(()=>{
        //a=a+1
        a.current=a.current+1 //here component is re-rendered but the value of a persists unless refresh
        console.log('rendered and value of a is ',a.current)
    })
    
    const handleClick=()=>{
        setCount(count+1)
    }

  return (<>
     <div>UseRef</div>
    <button onClick={handleClick}>Count increment: ${count}</button>
    </>
  )
}

export default UseRef