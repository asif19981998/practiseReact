import React,{useMemo, useState} from 'react'

function UseMemo() {

  const [countOne,setCountOne]=useState(0);
  const [countTwo,setCountTwo]=useState(0);

 const incrementOne=()=>{
    setCountOne(countOne+1);
 }
 const increamentTwo=()=>{
    setCountTwo(countTwo+1);
 }

const isEven= useMemo(()=>{
    var i = 0;
    while (i<2000000000) i++;
    return countOne % 2== 0;
},[countOne])





  return (
      <>
      <div>UseMemo</div>
      
      <button onClick={incrementOne}>Increament One</button>
      <span>{isEven ? "Even":"Odd"}</span>
      <span>{countTwo}</span>
      <button onClick={increamentTwo}>Increment Two</button>
      </>
    
  )
}

export default UseMemo