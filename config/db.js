import mongoose from "mongoose";
const MOGODB = process.env.MONGO_URI;
mongoose.set("strictQuery", true);

// function to connect with database
const connectDatabase = async () => {
    try {
        await mongoose.connect(MOGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.MONGO_DB_NAME,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDatabase;
