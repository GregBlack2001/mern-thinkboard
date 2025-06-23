import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNCETED SUCCESFULLY ");
    }
    catch (error) {
        console.error("Error connecting to MOGODB", error);
        process.exit(1) //exit with failure
    }
};


