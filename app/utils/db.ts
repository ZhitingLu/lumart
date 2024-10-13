import mongoose from 'mongoose';

interface ConnectionType {
    isConnected?: number;
}

// This object will store the connection status
const connection: ConnectionType = {};

export async function connectDb() {
    // Check if there is an existing connection
    if (connection.isConnected) {
        console.log('Connected to the db');
        return;
    }
    // Use previous connection if available
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log('Use existing connection to the db.');
            return;
        }
        await mongoose.disconnect();
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URL as string);
        console.log('MongoDB URL:', process.env.MONGODB_URL);
        console.log('New connection to the db.');
        connection.isConnected = db.connections[0].readyState;
    }
    catch (error) {
    console.log('Failed to connect to the db', error);
    throw new Error('BD connection error');
}
}
