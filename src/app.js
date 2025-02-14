import express from 'express';
import morgan from 'morgan';
import usuarioRoutes from './router/usuario.routes.js';
import conectarDB from './database/db.js';


const app = express();
conectarDB();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

//Ruta inicial
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de usuarios');
});

// Routes
app.use('/api/',usuarioRoutes);




export default app;
