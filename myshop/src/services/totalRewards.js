import {fetchData} from './fetchData'

export const TotalRewardsPoint = async()=>{
    try{
        const totalData = await fetchData()

        const totalReward = totalData.reduce((acc,val)=>{
             if(acc[val.customerId]){
                acc[val.customerId].totalPrice += val.price
             }
             else{
                acc[val.customerId]={
                    customerId: val.customerId,
                    customerName: val.customerName,
                    totalPrice: val.price
                }
            }
            return acc
        },{})
      return Object.values(totalReward)
    }
    catch(error){
        console.log(error)
    }
}
