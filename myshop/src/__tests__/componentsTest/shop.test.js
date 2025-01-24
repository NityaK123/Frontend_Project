import { render, screen } from "@testing-library/react"
import Shop from "../../components/Shop"

describe("Test Shop",()=>{ 

    const mockData =[{
        "transactionId": 101,
        "customerId": 1000,
        "customerName": "John Doe",
        "purchaseDate": "2024-10-05",
        "productPurchased": "Smartphone",
        "price": 599.99
      },
      {
        "transactionId": 102,
        "customerId": 1000,
        "customerName": "John Doe",
        "purchaseDate": "2025-01-20",
        "productPurchased": "Laptop",
        "price": 1200.00
      },]

    beforeEach(()=>{
        render(<Shop data={mockData}/>)
    })
    
    test("Test case1",()=>{
         const element = screen.getByText(/Total Transaction/i)
         expect(element).toBeInTheDocument() 
    })

}) 
