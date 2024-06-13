const express = require('express');
const cors=require('cors')
const dotenv=require('dotenv');

const userRoutes = require('./routes/userRoutes.js');
const stocksRoutes = require('./routes/stocksRoutes.js');
const wishlistRoutes = require('./routes/wishlistRoutes.js');
const  errorHandler  = require('./middleware/errorMiddleware.js');
const connectDB = require("./config/db.js");

dotenv.config();
connectDB();
const app = express();
app.use(cors());

app.use(express.json());
app.use(errorHandler) ;
app.use('/api/users',userRoutes);
app.use('/api/stocks',stocksRoutes);
app.use('/api/wishlist',wishlistRoutes);



//process.env.MONGO_URL

PORT =  5000;

app.listen(PORT, console.log(`App running on port ${PORT}`));
