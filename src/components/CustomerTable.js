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
import { CUSTOMER_TABLE_HEADERS } from '../utils/constants'

const CustomerTable = ({ customers }) => {

    const createHeaderTableCells = (header, index) => {
        return (
            <TableCell key={index} align={header === "Full Name" ? "left" : "right"}>
                {header}
            </TableCell>
        );
    }


    const renderCustomerTableHeaders = () => {
        return (
            <TableRow>
                {CUSTOMER_TABLE_HEADERS.map(createHeaderTableCells)}
            </TableRow>
        );
    }

    const createCustomerTableRows = (customer, index) => {
        return <CustomerTableRow key={index} customer={customer}/>;
    }

    const renderCustomerRows = () => customers.map(createCustomerTableRows);

    return (
        <div id='data-table-container'>
            <TableContainer component={Paper}>
                <Table size="medium">
                    <TableHead>
                        {renderCustomerTableHeaders()}
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