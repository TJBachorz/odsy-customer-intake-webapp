import React, { useEffect, useState } from 'react';
import './App.css';

import CustomerTable from './components/CustomerTable';
import SideDrawer from './components/SideDrawer';

const App = () => {

  const [customers, setCustomers] = useState([]);

  useEffect(() => getCustomers(), []);

  const getCustomers = async () => {
    const customersResponse = await fetch(`${process.env.REACT_APP_API_URL}/customers`);
    setCustomers(await customersResponse.json());
  };

  const getSortedCustomers = async (params, order) => {
    const customersResponse = await fetch(`${process.env.REACT_APP_API_URL}/customers?${params}=&${order}=`);
    setCustomers(await customersResponse.json());
  }

  const submitFileUpload = async (event) => {
    event.preventDefault();
    const file = document.querySelector('#file-upload').files[0];
    postCustomers(file);
  }

  const postCustomers = async (customerData) => {
    const customersResponse = await fetch(`${process.env.REACT_APP_API_URL}/customers`, {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: customerData
    });
    const newCustomers = await customersResponse.json();
    setCustomers([ ...customers, ...newCustomers])
  }

  return (
    <div id="app-container">
      <SideDrawer submitFileUpload={submitFileUpload}/>
      <CustomerTable 
        customers={customers}
        getSortedCustomers={getSortedCustomers}
      />
    </div>
  );
}

export default App;
