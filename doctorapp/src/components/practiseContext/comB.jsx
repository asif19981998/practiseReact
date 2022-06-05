import React,{useContext} from 'react'
import { UserContext } from '../../App'

function ComB() {
  const mean =   useContext(UserContext) ;
  return (
      <>
       <div>ComB</div>
       {mean}
      </>
   
  )
}

export default ComB