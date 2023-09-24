import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/database.js";


dotenv.config();

connectDB();

const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
