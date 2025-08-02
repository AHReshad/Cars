import mongoose from 'mongoose';

const mongoUri = 'mongodb+srv://nooriabdurahman084:eJov02VetuI0kDcZ@cluster0.tbrmwhc.mongodb.net/image?retryWrites=true&w=majority';

export default async function connect() {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(mongoUri, { dbName: 'image' });
    console.log('MongoDB successfully connected');
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
}
