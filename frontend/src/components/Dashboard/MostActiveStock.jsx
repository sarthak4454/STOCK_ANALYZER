
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css"; 

const MostActiveStock = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/stocks/most-active');
        setStocks(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching stock data');
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="stock-container">
      <h2>Most Active Stocks</h2>
      {stocks.length > 0 ? (
        stocks.map((stock) => (
          <div key={stock.symbol} className="stock-details">
            <p><strong>Symbol:</strong> {stock.symbol}</p>
            <p><strong>Name:</strong> {stock.name}</p>
            <p><strong>Price:</strong> ${stock.price}</p>
            <p><strong>Change:</strong> ${stock.change}</p>
            <p><strong>Volume:</strong> {stock.volume}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default MostActiveStock;
