import React, { useEffect, useState } from 'react'
import Shop from '../components/Shop'
import { fetchData } from '../services/fetchData';
import processData from '../services/monthlyRewardsData';
import MonthlyRewards from '../components/MonthlyRewards';
import {TotalRewardsPoint } from '../services/totalRewards';
import TotalRewards from '../components/TotalRewardsData';
import { calculateThreeMonthData } from '../utils/calculateThreeMonthData';

const Home = () => {

    const [isLoding, setIsLoding] = useState(true)
    const [error, setError] = useState()
    const [transactionData, setTransactionData] = useState()
    const [monthlyData,setMonthlyData] = useState()
    const [totalRewardsData,setTotalRewardsData] = useState()


    useEffect(() => {

        const transData = async () => {
            setIsLoding(true)
            try {
                const data = await fetchData()
                setTransactionData(data)

                const threeMonthlyData = await processData()
                const lastThreeMonthData = calculateThreeMonthData(threeMonthlyData)
                setMonthlyData(lastThreeMonthData)

                const totalRewardData = await TotalRewardsPoint()
                setTotalRewardsData(totalRewardData)
            }
            catch(error) {
                console.log("error",error)
                setError("This is error")
            }
            finally {
                setIsLoding(false)
            }
        }
        transData()
    },[])

    if (isLoding)return <h1>Loding....</h1> 
    if (error)return <div>{error}</div>

    return (
        <div>
            <Shop data={transactionData} />
            <MonthlyRewards data ={monthlyData}/>
            <TotalRewards data={totalRewardsData}/>
        </div>
    )
}

export default Home;