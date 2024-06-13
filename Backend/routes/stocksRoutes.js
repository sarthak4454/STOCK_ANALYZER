
const express = require('express');
const router = express.Router();
const { getTopGainers, getTopLosers, getMostActiveStocks, putdata } = require('../controllers/stockController');

const protect =  require("../middleware/authMiddleware");

// router.get('/top-gainers', getTopGainers);
// router.get('/top-losers', getTopLosers);
// router.get('/most-active', getMostActiveStocks);


router.route("/top-gainers").get(getTopGainers );
router.route("/top-losers").get(getTopLosers );
router.route("/most-active").get(getMostActiveStocks );
router.route("/putdata").post(putdata)



module.exports = router;

