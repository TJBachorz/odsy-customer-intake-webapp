import './App.css';

import CustomerTable from './components/CustomerTable';
import SideDrawer from './components/SideDrawer';

const App = () => {

  return (
    <div id="app-container">
      <SideDrawer/>
      <CustomerTable/>
    </div>
  );
}

export default App;
