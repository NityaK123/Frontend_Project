import PropTypes from 'prop-types'
import React from 'react'
import { Table } from 'react-bootstrap'
import { calculateRewardsPoint } from '../utils/calculateRewardsPoints'

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
                            const rewards = calculateRewardsPoint(val.totalPrice)
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{val.customerId}</td>
                                    <td>{val.customerName}</td>
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

TotalRewards.propTypes = {
    data:PropTypes.arrayOf(
        PropTypes.shape({
            customerId: PropTypes.number.isRequired,
            customerName: PropTypes.string.isRequired,
            totalPrice: PropTypes.number.isRequired
        })
    ).isRequired
}

export default TotalRewards;