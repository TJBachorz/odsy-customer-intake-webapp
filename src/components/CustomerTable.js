import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';

import CustomerTableRow from './CustomerTableRow';

const CustomerTable = ({ customers }) => {

    const createCustomerTableRows = (customer, index) => {
        return <CustomerTableRow key={index} customer={customer}/>;
    }

    const renderCustomerRows = () => customers.map(createCustomerTableRows);

    return (
        <div id='data-table-container'>
            <TableContainer component={Paper}>
                <Table size="medium">
                    <TableHead>
                        <TableCell align="left">Full Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Vehicle Type</TableCell>
                        <TableCell align="right">Vehicle Name</TableCell>
                        <TableCell align="right">Vehicle Length</TableCell>
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