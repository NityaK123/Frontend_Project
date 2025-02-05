import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {add,subtract} from '../reduxToolkit/slice'

const Counter=()=>{ 

    const val = useSelector((state)=>state.addSlice.value)
    const dispatch = useDispatch()

    return(
        <div>
             <h1>{val}</h1>
             <button onClick={()=>dispatch(add())}>Increment</button> 
             <button onClick={()=>dispatch(subtract())}>Decrement</button>
        </div>
    )
}

export default Counter