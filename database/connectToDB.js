import mongoose from "mongoose";


export async function connectToDB() {
    const uri = process.env.MONGO_URI;

  try {
  await  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error)
  }
}


export async function disconnectFromDB() {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.log(error);
  }
}
