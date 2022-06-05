import React,{useContext} from 'react'
import { UserContext } from '../../App'

function ComA() {
  const mean =   useContext(UserContext) ;
  return (
      <>
        <div>ComA</div>
        <span>ComA------{mean}</span>
      </>
  
  )
}

export default ComA