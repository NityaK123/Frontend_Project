import React from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { calculateRewardsPoint } from '../utils/calculateRewardsPoints'

const MonthlyRewards = ({ data }) => {

    return (
        <div>
            <h1>Monthly Rewards</h1>
            <Table striped bordered size="sm">
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>Transaction Id</td>
                        <td>Customer Id</td>
                        <td>Customer Name</td>
                        <td>Month</td>
                        <td>Price</td>
                        <td>Rewards Point</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, index) => {
                            const rewards = calculateRewardsPoint(val.totalPrice)
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{val.transactionId}</td>
                                    <td>{val.customerId}</td>
                                    <td>{val.customerName}</td>
                                    <td>{val.month}</td>
                                    <td>{val.totalPrice}</td>
                                    <td>{rewards}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

MonthlyRewards.propTypes = {
    data:PropTypes.arrayOf(
        PropTypes.shape({
            transactionId:PropTypes.number.isRequired,
            customerId:PropTypes.number.isRequired,
            customerName:PropTypes.string.isRequired,
            month:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
            totalPrice:PropTypes.number.isRequired
        })
    ).isRequired 
} 

export default MonthlyRewards;