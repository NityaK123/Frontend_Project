import axios from 'axios'

export const fetchData = async()=>{
    
    try{
        const response = await axios.get('./data.json')
        return  {type:"Fetch data successfully",payload:response.data}
    }
    catch(error){
        return  {type:"Fetch Data Failure",payload:error.message}
    }
}

