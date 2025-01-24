import { calculateRewardsPoint } from "../../../utils/calculateRewardsPoints"

describe("Test of rewards Point",()=>{

      test("Test case 1",()=>{
           const data = calculateRewardsPoint(100) 
           expect(data).toBe(50)
      })

      test("Test case 2",()=>{
         const data = calculateRewardsPoint(30)
         expect(data).toBe(0)  
      }) 
      
      test("Test case 3",()=>{
         const data = calculateRewardsPoint(400)
         expect(data).toBe(650)
      })

      test("Test case 3",()=>{
          const data = calculateRewardsPoint(410.58)
          expect(data).toBe(670) 
      })
})