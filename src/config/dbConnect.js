import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Database connected successfully`);
    } catch (error) {
        console.log(error);
        process.exit(1); // if any error encountered then exit the program
    }
};

export default dbConnect;