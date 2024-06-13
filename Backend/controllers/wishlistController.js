const User= require('../models/UserModel.js');
const Stock= require('../models/stockModel.js');
const asyncHandler = require('express-async-handler');



const addToWishlist = asyncHandler(async (req, res) => {
  try {
    const { userId, stockId } = req.body;

    if (!userId || !stockId) {
      return res.status(400).json({ error: 'User ID and Stock ID are required' });
    }

    
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    const stock = await Stock.findById(stockId);
    if (!stock) {
      return res.status(404).json({ error: 'Stock not found' });
    }

    if (!user.wishlist.includes(stockId)) {
      user.wishlist.push(stockId);
      await user.save();
    } else {
      return res.status(400).json({ error: 'Stock already in wishlist' });
    }

    res.status(200).json({ message: 'Stock added to wishlist' });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    res.status(500).json({ error: 'Error adding to wishlist' });
  }
});




const removeFromWishlist = asyncHandler(async (req, res) => {
  try {
    const { userId, stockId } = req.body;

    
    if (!userId || !stockId) {
      return res.status(400).json({ error: 'User ID and Stock ID are required' });
    }

    const user = await User.findById(userId);

    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!user.wishlist.includes(stockId)) {
      return res.status(404).json({ error: 'Stock not found in wishlist' });
    }

   
    user.wishlist = user.wishlist.filter(id => id.toString() !== stockId);
    await user.save();

    res.status(200).json({ message: 'Stock removed from wishlist' });
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    res.status(500).json({ error: 'Error removing from wishlist' });
  }
});



 const getWishlist = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    
    const user = await User.findById(userId).populate('wishlist');

    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    
    if (!user.wishlist || user.wishlist.length === 0) {
      return res.status(404).json({ error: 'Wishlist is empty' });
    }

    res.status(200).json(user.wishlist);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).json({ error: 'Error fetching wishlist' });
  }
});




module.exports = { addToWishlist, removeFromWishlist, getWishlist };
