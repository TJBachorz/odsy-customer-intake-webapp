import React, { useEffect, useState } from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
} from '@mui/material';

import CustomerTableRow from './CustomerTableRow';

const CustomerTable = ({ customers, getSortedCustomers }) => {

    const [order, setOrder] = useState(null);
    const [sortParam, setSortParam] = useState('');

    useEffect(() => {
        if (order === null) return;
        const sortOrder = order ? 'asc' : 'desc';
        getSortedCustomers(sortParam, sortOrder)
    }, [order, sortParam])

    const handleSort = param => {
        setSortParam(param);
        setOrder(!order);
    }

    const createCustomerTableRows = (customer, index) => {
        return <CustomerTableRow key={index} customer={customer}/>;
    }

    const renderCustomerRows = () => customers.map(createCustomerTableRows);

    return (
        <div id='data-table-container'>
            <TableContainer component={Paper}>
                <Table size="medium">
                    <TableHead className="table-header-row">
                        <TableCell
                            align="left"
                            className="sortable"
                            onClick={() => handleSort("full_name")}
                        >
                            Full Name
                        </TableCell>

                        <TableCell align="right">Email</TableCell>

                        <TableCell
                            align="right"
                            className="sortable"
                            onClick={() => handleSort("vehicle_type")}
                        >
                            Vehicle Type
                        </TableCell>

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