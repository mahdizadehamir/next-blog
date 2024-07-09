import mongoose from 'mongoose';

const connection = {};
async function connectDb() {
  try {
    if (connection.isConnected) {
      console.log('Already connected');
      return;
    }
    await mongoose.connect(process.env.MONGO_LINK, { authSource: 'admin' });
    connection.isConnected = mongoose.connections[0].readyState;
    console.log('Connected to db');
  } catch (error) {
    console.log(error);
    throw new Error('Error in connecting to db');
  }
}

export default connectDb;
