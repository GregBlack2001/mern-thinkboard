import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors({
    origin:"http://localhost:5173",
}));
// midleware
app.use(express.json()); // This middleware will parse JSon boddies: req.body

app.use(ratelimiter);



//Simple custon middleware
// app.use((req, res,next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);


connectDB().then(() =>{
    app.listen(PORT, () => {
    console.log("server stated on port: ", PORT);
    });
});

