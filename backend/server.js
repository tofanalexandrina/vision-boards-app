import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import boardRoutes from './routes/BoardRoutes.js';


dotenv.config();
const app=express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}
));
app.use(express.json());

//ROUTES
app.use('/api/boards', boardRoutes);

//basic routes
app.get("/", (req, res)=>{
    res.send("API is working.");
});

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>console.error("MongoDB connection error:", err));

