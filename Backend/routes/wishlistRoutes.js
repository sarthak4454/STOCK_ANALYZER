// routes/wishlist.js
const express = require('express');
const router = express.Router();
const { addToWishlist, removeFromWishlist, getWishlist } = require('../controllers/wishlistController');
const protect =  require("../middleware/authMiddleware");

// router.post('/add', checkAuthenticated, addToWishlist);
// router.post('/remove', checkAuthenticated, removeFromWishlist);
// router.get('/', checkAuthenticated, getWishlist);


router.route("/add").post(addToWishlist);
router.route("/remove").post(removeFromWishlist);
router.route("/").get(getWishlist);

module.exports = router;