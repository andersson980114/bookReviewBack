import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swaggerConfig.js';
import './Database/db.js';

import userRoutes from './routes/userRoutes.js'; 
import bookRoutes from './routes/bookRoutes.js';
import authorRoutes from './routes/authorRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'; 


const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
 
// Configuración de CORS para permitir acceso desde tu frontend de React
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

// Ruta para servir la documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 
// Rutas
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes); 
app.use('/reviews', reviewRoutes); 
app.use('/categories', categoryRoutes);  


// Puerto
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
