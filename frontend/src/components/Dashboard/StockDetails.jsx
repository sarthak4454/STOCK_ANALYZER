import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./StockDetails.css"

const StockDetails = () => {
  const { stockSymbol } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(`http://localhost:5000/api/stocks/${stockSymbol}`);
      setDetails(res.data[0]); 
    };

    fetchDetails();
  }, [stockSymbol]);

  return (
    <div>
      {details ? (
        <div>
          <h2>{details.companyName}</h2>
          <p>Symbol: {details.symbol}</p>
          <p>Market Cap: {details.mktCap}</p>
          <p>Price: {details.price}</p>
          <p>Beta: {details.beta}</p>
          <p>Last Dividend: {details.lastDiv}</p>
          <p>Exchange: {details.exchange}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockDetails;
