import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '../app/rootActions'

const AddRemove=()=>{  
    const data = useSelector(state=>state.value)
    const dispatch = useDispatch() 

    const res = dispatch(fetchData) 

    console.log("res",res)
    res.then((re)=>console.log(re))

    return (
        <div>
             <h1>{data}</h1>
             <button onClick={()=>dispatch({type:"add"})}>Add</button>
             <button onClick={()=>dispatch({type:"sub"})}>Subtract</button>
        </div>
    )
}

export default AddRemove 