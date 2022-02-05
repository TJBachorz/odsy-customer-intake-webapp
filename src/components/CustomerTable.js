import React, { useEffect, useState } from 'react';

const CustomerTable = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => getCustomers(), []);

    const getCustomers = async () => {
        const customersResponse = await fetch(`${process.env.REACT_APP_API_URL}/customers`);
        setCustomers(await customersResponse.json());
    };

    return (
        <div className='main-container'>
        </div>
    );
}

export default CustomerTable;