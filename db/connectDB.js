import mongoose, { mongo } from "mongoose";

export async function connectDB() {
  const url="mongodb://localhost:27017/charite";
  const dbUrl = process.env.MONGO_DB_URL || url;
  try {
    await mongoose.connect(dbUrl);
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log("Connection Error", error);
  }
}
