import { onAuthStateChanged } from 'firebase/auth'
import {auth,AddTask} from '../../Backend'
import React, { useEffect, useState } from 'react'

export const TaskDisplay = () => {

    const [data,setData] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                
            }
            else
            {
                
            }
        })
    })
  return (
    <div>
      
    </div>
  )
}


