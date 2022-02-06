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

  return (
    <div id="app-container">
      <SideDrawer/>
      <CustomerTable customers={customers}/>
    </div>
  );
}

export default App;
