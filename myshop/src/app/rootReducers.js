const initialState = {
    value:0
}

export const reducers =(state=initialState,action)=>{
     switch(action.type){
        case "add":
            return {...state,value:state.value+1}
        case "sub":
            return {...state,value:state.value-1}
        default:
            return state
     }
}