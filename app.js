import express from 'express'
import {router} from './routes/productRoutes.js';


const app = express();

app.use(express.json());
//routes imports

app.use('/api/v1', router);


export default app;