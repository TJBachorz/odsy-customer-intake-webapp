import './App.css';

import CustomerTable from './components/CustomerTable';
import Header from './components/Header';

const App = () => {

  return (
    <div id="app-container">
      <Header/>
      <CustomerTable/>
    </div>
  );
}

export default App;
