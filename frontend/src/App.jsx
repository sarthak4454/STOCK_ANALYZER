import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';
import StockDetails from './components/Dashboard/StockDetails.jsx';
import MostActiveStock from './components/Dashboard/MostActiveStock.jsx';
import TopGainers from './components/Dashboard/TopGainers.jsx';
import TopLosers from './components/Dashboard/TopLosers.jsx';
import Wishlist from './components/Dashboard/Wishlist.jsx';
import { Routes , Route } from 'react-router-dom';
import "./Styles/Styles.css"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/stocks/:stockSymbol" element={<StockDetails />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/most-active" element={<MostActiveStock/>}/>
          

          
          <Route path="/top-gainers" element={<TopGainers/>}/>

          <Route path="/top-losers" element={<TopLosers/>}/>

          <Route path="/wishlist" element={<Wishlist/>}/>
          
          

        </Routes>
      </div>
    </Router>
  );
};

export default App;
