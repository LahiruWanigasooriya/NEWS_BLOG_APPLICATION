import mongoose from "mongoose";

export const dbConnection = () => {
    const MONGO_URI = process.env.MONGO_URI;
    mongoose.connect(MONGO_URI, {
            dbName: "MERN_STACK_BLOGGING_APP",
        })
        .then(() => {
            console.log("Connected to Database!");
        })
        .catch(err => {
            console.log(`Error in connecting to Database: ${err}`);
        });
};