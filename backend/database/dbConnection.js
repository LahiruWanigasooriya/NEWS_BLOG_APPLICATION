import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "MERN_STACK_BLOGGING_APP",
        })
        .then(() => {
            console.log("Connected to Database!");
        })
        .catch(err => {
            console.log(`Error in connecting to Database: ${err}`);
        });
};