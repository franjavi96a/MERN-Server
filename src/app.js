import express from 'express';
import morgan from 'morgan';
import listaRoutes from './router/lista.routes.js';
import conectarDB from './database/db.js';


const app = express();
conectarDB();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use(listaRoutes);



export default app;
