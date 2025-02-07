import React,{useReducer} from 'react'
import reducer from '../reduxToolkit/slice'

const reducer = (state,action)=>{
      switch(action.type){
        case "Monthly Rewards":
            return {...state,"Monthly Rewards":data}
        case "All Transaction":
            return {...state,"Transaction":transaction}
        default:
            return state
      }
}

const initialState = {
    "Monthly Rewards":"",
    "transaction":""
}

const Hooks=()=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    return(
        <h1>This is useReducerHooks</h1>
    )
}