import React from 'react';
import {
    TableCell,
    TableRow
} from '@mui/material';

const CustomerTableRow = ({ customer }) => {

    const {
        first_name,
        last_name,
        email,
        vehicle_type,
        vehicle_name,
        vehicle_length
    } = customer;

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {first_name}{' '}{last_name}
            </TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{vehicle_type}</TableCell>
            <TableCell align="right">{vehicle_name}</TableCell>
            <TableCell align="right">{vehicle_length}</TableCell>
        </TableRow>
    );
}

export default CustomerTableRow;
