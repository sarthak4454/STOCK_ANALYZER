import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Wishlist.css"

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [stockSymbol, setStockSymbol] = useState('');

  useEffect(() => {
    const fetchWishlist = async () => {
      const res = await axios.get('http://localhost:5000/api/wishlist/', {
        headers: { Authorization: localStorage.getItem('token') },
      });
      setWishlist(res.data);
    };

    fetchWishlist();
  }, []);

  const addToWishlist = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      'http://localhost:5000/api/wishlist/add',
      { stockSymbol },
      { headers: { Authorization: localStorage.getItem('token') } }
    );
    setWishlist([...wishlist, stockSymbol]);
    setStockSymbol('');
  };

  const removeFromWishlist = async (stockSymbol) => {
    const res = await axios.post(
      'http://localhost:5000/api/wishlist/remove',
      { stockSymbol },
      { headers: { Authorization: localStorage.getItem('token') } }
    );
    setWishlist(wishlist.filter((stock) => stock !== stockSymbol));
  };

  return (
    <div>
    <h2>Wishlist</h2>
    <form onSubmit={addToWishlist}>
      <input
        type="text"
        value={stockSymbol}
        onChange={(e) => setStockSymbol(e.target.value)}
        required
      />
      <button type="submit">Add to Wishlist</button>
    </form>
    <ul>
      {wishlist.map((stock) => (
        <li key={stock}>
         
          <Link to={`/stocks/${stock}`}>{stock}</Link>
          <button onClick={() => removeFromWishlist(stock)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Wishlist;
