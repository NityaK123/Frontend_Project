import React from 'react'
import { Table } from 'react-bootstrap'

const Shop = ({ data }) => {

    return (
        <div>
            <Table striped bordered size="sm">
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>Transaction Id</td>
                        <td>Customer Id</td>
                        <td>Customer Name</td>
                        <td>Purchase Date</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Rewards Point</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{val.transactionId}</td>
                                    <td>{val.customerId}</td>
                                    <td>{val.customerName}</td>
                                    <td>{val.purchaseDate}</td>
                                    <td>{val.productPurchased}</td>
                                    <td>{val.price}</td>
                                    <td>{0}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Shop