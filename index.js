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


const corsOptions = {
  origin: function (origin, callback) {
     
    callback(null, true);
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
