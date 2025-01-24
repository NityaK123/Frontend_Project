
export const calculateThreeMonthData =(data)=>{  

     const today = new Date()
     const threeMonthago = new Date(today) 
     threeMonthago.setMonth(today.getMonth() - 3)

     const lastthreeMonthData = data.filter((val)=>{
            const date = new Date(val.date) 
            return date > threeMonthago && date <= today
     })
     return lastthreeMonthData
}