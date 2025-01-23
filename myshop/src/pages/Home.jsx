import React, { useEffect, useState } from 'react'
import Shop from '../components/Shop'
import { fetchData } from '../services/fetchData'
import processData from '../services/monthlyRewardsData'

const Home = () => {

    const [isLoding, setIsLoding] = useState(true)
    const [error, setError] = useState()
    const [transactionData, setTransactionData] = useState()
    const [monthlyData,setMonthlyData] = useState()


    useEffect(() => {

        const transData = async () => {
            setIsLoding(true)
            try {
                const data = await fetchData()
                setTransactionData(data)


            //     console.log("Three")
            //    // const threeMonthlyData = await processData()
            //     console.log("Three of")
            //     console.log("Three Month", threeMonthlyData)
            //     setMonthlyData(threeMonthlyData)
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
    }, [])

    if (isLoding)return <h1>Loding....</h1> 
    if (error)return <>This is error off</>

    return (
        <div>
            <Shop data={transactionData} />
        </div>
    )
}

export default Home