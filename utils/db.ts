import mongoose from 'mongoose';

interface ConnectionType {
    isConnected?: boolean;
}

// This object will store the connection status
const connection: ConnectionType = { isConnected: false }; // Initialize as false

async function connectDb() {
    // Check if there is an existing connection
    if (connection.isConnected) {
        console.log('Connected to the db');
        return;
    }

    // Use previous connection if available
    if (mongoose.connections.length > 0) {
        // Check if the first connection is already established
        connection.isConnected = mongoose.connections[0].readyState === 1;

        if (connection.isConnected) {
            console.log('Use existing connection to the db.');
            return;
        }

        await mongoose.disconnect(); // Disconnect if not connected
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URL as string);
        console.log('New connection to the db.');
        connection.isConnected = true; // Set to true after a successful connection
    } catch (error) {
        console.log('Failed to connect to the db', error);
        throw new Error('DB connection error');
    }
}

async function disconnectDb() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === "production") {
            await mongoose.disconnect();
            connection.isConnected = false; // Set to false when disconnecting
        } else {
            console.log('Not disconnecting from the DB.');
        }
    }
}

const db = { connectDb, disconnectDb };
export default db;