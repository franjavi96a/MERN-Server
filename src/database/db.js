import mongoose from 'mongoose';
import config from '../config.js';

// Conexión a MongoDB con Mongoose
const conectarDB = async () => {

    try {
        await mongoose.connect(config.MONGODB_URI,);
        console.log('Conexión a MongoDB Compass exitosa');
    } catch (error) {
        console.error('Error al conectar a MongoDB Compass:', error);
        process.exit(1);
    }
};

export default conectarDB;

