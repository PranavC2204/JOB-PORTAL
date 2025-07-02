import mongoose from "mongoose";

//FUNCTION TO CONNECT TO MONGODB


const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database connected"));
  mongoose.connection.on("error", (err) => console.error("MongoDB error:", err));

  await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
};

export default connectDB;
