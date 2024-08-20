import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB

/* 
zduz6R6kI8INNTPL
mgerson1303
mongodb+srv://mgerson1303:zduz6R6kI8INNTPL@cluster0.bspda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/