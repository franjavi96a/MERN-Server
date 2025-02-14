import mongoose from 'mongoose';
import config from '../config.js';

// Conexión a MongoDB con Mongoose
const conectarDB = async () => {

    try {
        await mongoose.connect(config.MONGODB_URI,);
        console.log('Conexión a MongoDB Compass exitosa');

        // Crear un esquema de usuario
        const usuarioSchema = new mongoose.Schema({
            nombre: String,
            email: String,
            telefono: String
        });

        // Crear un modelo de usuario
        const Usuario = mongoose.model('Usuario', usuarioSchema);


    } catch (error) {
        console.error('Error al conectar a MongoDB Compass:', error);
        process.exit(1);
    }
};

export default conectarDB;

