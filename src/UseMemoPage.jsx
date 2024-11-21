import React,{useState,useMemo, useCallback} from 'react'
//in this below code multicount function is called even if i click only on the item button so used here memo hook to specify that the multicount should be called only when there is update on count

function UseMemoPage() {
    const [count,setCount]=useState(0)
    const [item,setItem]=useState(10)

    //console.log('component rerendered')

    const multiMemo=useMemo( function multiCount(){
      console.warn('multi')
      return count*5
  },[count])
//   function multiCount(){
//     console.warn('multi')
//     return count*5
// }

// const multiMemo =useCallback(()=>{
//   console.warn('multi')
// return count*5
// },[count])
  
   
  return (<>
  <div>UseMemoPage</div>
  <h2>Count:{count}</h2>
  <h2>Item:{item}</h2>
  <h2>{multiMemo} </h2>

  <button onClick={()=>setCount(count+1)}>Update Count</button>
  <button onClick={()=>setItem(item+1)}>Update Item</button>
  </>
    
  )
}

export default UseMemoPage