import React, { useEffect, useState } from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';

const CustomerTable = () => {

    const CUSTOMER_TABLE_HEADERS = ['fullName', 'email', 'vehicle_name', 'vehicle_type', 'vehicle_length'];
    const [customers, setCustomers] = useState([]);

    useEffect(() => getCustomers(), []);

    const getCustomers = async () => {
        const customersResponse = await fetch(`${process.env.REACT_APP_API_URL}/customers`);
        setCustomers(await customersResponse.json());
    };

    const renderCustomerTableHeaders = () => {
        return CUSTOMER_TABLE_HEADERS.map(header => {
            return (
                <TableCell align="left">{header}</TableCell>
            )
        })
    }

    const renderCustomerRows = () => {
        return customers.map((customer, index) => {
            return (
                <CustomerTableRow key={index} customer={customer}/>
            );
        })
    }

    return (
        <div className='main-container'>
            <TableContainer component={Paper}>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            {renderCustomerTableHeaders()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderCustomerRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default CustomerTable;