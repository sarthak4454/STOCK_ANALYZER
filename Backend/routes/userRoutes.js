// routes/auth.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateUserProfile } = require('../controllers/userController');

const protect =  require("../middleware/authMiddleware");

// router.post('/signup', signupUser);
// router.post('/login', loginUser);
// router.post('/logout', logoutUser);

router.route("/register").post(registerUser);
router.post("/login", loginUser);
router.route("/profile").put(protect,updateUserProfile);


module.exports = router;
