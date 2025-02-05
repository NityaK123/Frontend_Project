import React from 'react' 
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Counter from '../components/Counter'

const AppRoutes=()=>{

    return(
        <Routes>    
            <Route path='/' element={<Home/>} />
            <Route path='/counter' element={<Counter/>}/>
        </Routes>
    )
}

export default AppRoutes