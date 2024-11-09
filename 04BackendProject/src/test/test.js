import mongoose from "mongoose";

const mongoDBConnection = async () => {
  try {
    const uri =
      "mongodb+srv://tanaymukadam:tanay82629@cluster0.0enur.mongodb.net/videotube";
    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};


mongoDBConnection()