import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import boardRoutes from './routes/BoardRoutes.js';
import path from "path";
import {fileURLToPath} from "url";
import imageRoutes from './routes/ImageRoutes';


dotenv.config();
const app=express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}
));
app.use(express.json());
app.options('*', cors());

const filename=fileURLToPath(import.meta.url);
const dirname=path.dirname(filename);

app.use('/uploads', express.static(path.join(dirname, 'uploads')));

//ROUTES
app.use('/api/boards', boardRoutes);
app.use('/api/images', imageRoutes);

//basic routes
app.get("/", (req, res)=>{
    res.send("API is working.");
});

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB || 'envision'
}).then(()=>{
    console.log(`Connected to MongoDB (db=${mongoose.connection.name})`);
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>console.error("MongoDB connection error:", err));

