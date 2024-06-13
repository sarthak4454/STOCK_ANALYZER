const Stock = require('../models/stockModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');


const putdata = asyncHandler(async(req,res)=>
  { const { symbol, name, price, change, volume } = req.body;
     const stockExists = await Stock.findOne({ name });
     if (stockExists) {
      res.status(400);
      throw new Error("Stock already exists");
    }
     const stock = await Stock.create({
      symbol,
      name,
      price,
      change,
      volume
      });
      if (stock) {
      res.status(201).json({
        _id: stock._id,
        symbol: stock.symbol,
        name: stock.name,
        price: stock.price,
        change: stock.change,
        volume: stock.volume,
        token: generateToken(stock._id),
        });
    } else {
      res.status(400);
      throw new Error("Stock not found");
    }
  });

const getTopGainers =asyncHandler( async (req, res) => {
  try {
    const gainers = await Stock.find().sort({ change: -1 }).limit(2);
    res.status(200).json(gainers);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

const getTopLosers = asyncHandler(async (req, res) => {
  try {
    const losers = await Stock.find().sort({ change: 1 }).limit(2);
    res.status(200).json(losers);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

const getMostActiveStocks = asyncHandler( async (req, res) => {
  try {
    const activeStocks = await Stock.find().sort({ volume: -1 }).limit(2);
    res.status(200).json(activeStocks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = {putdata, getTopGainers, getTopLosers, getMostActiveStocks };
