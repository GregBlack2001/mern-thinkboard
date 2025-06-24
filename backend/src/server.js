import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();


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

