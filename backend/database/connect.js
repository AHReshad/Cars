import mongoose from 'mongoose';

const mongoUri = 'mongodb+srv://nooriabdurahman084:znlcOyyKHAGLULNM@cluster0.wj96cca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export default async function connect() {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(mongoUri, { dbName: 'image' });
    console.log('MongoDB successfully connected');
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
}

