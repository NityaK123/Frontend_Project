import React from 'react'
import { Table } from 'react-bootstrap'

const TotalRewards = ({ data }) => {

    return (
        <div>
            <h1>Total Rewards</h1>
            <Table striped bordered size="sm">
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>Customer Id</td>
                        <td>Customer Name</td>
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
                                    <td>{val.customerId}</td>
                                    <td>{val.customerName}</td>
                                    <td>{val.totalPrice}</td>
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

export default TotalRewards;