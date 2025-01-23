import { fetchData } from "./fetchData"

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

async function processData(){
    try {
        const monthlyData = await fetchData() 

        const addPriceOfThreeMonthData = monthlyData.reduce((acc, val) => {
            const purchaseDate = new Date(val.purchaseDate);
            const key = `${val.customerId}_${purchaseDate.getMonth()})_${purchaseDate.getFullYear()}`

            if (acc[key]) {
                acc[key].totalPrice = acc[key].totalPrice + val.price
            }
            else {
                acc[key] = {
                    transactionId: val.transactionId,
                    customerId: val.customerId,
                    customerName: val.customerName,
                    month: monthNames[(new Date(val.purchaseDate)).getMonth()],
                    totalPrice: val.price,
                    purchaseYear: (new Date(val.purchaseDate)).getFullYear()
                }
            }
            return acc
        }, {}) 
        return Object.values(addPriceOfThreeMonthData)
    }
    
    catch(error){
        console.log("Procees Data",error)
    }
}

export default processData  