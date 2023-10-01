import dotenv from "dotenv";
import connectDB from "./config/database.js";
import express from 'express'
import {productRoutes} from './routes/productRoutes.js';
import {authRoutes} from './routes/authRoutes.js';
import cors from 'cors';
  

const app = express();

dotenv.config();

connectDB();

app.use(cors({
  origin  : 'http://localhost:3000'
}));



app.use(express.json());
//routes imports

app.use('/api/v1/product', productRoutes);
app.use('/api/v1/auth', authRoutes);

   

const port = process.env.PORT || 4000;



app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
