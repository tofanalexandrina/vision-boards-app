import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import "./config/passport-config.js";
import authRoutes from "./routes/authentification.js";
import userRoutes from "./routes/user.js";

dotenv.config();
const app=express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}
));
app.use(express.json());

//setting up session middleware
app.use(session({
    secret: process.env.SESSION_SECRET||'my secret key',
    resave: false,
    saveUninitialized: false
}));

//passport initialization
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/auth', authRoutes);
app.use('/api', userRoutes); //protected routes

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res)=>{
    res.send("API is working.");
})


