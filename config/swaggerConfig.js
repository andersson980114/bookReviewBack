import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',  
    info: {
      title: 'API de Reseñas de Libros',  
      version: '1.0.0',  
      description: 'Documentación de la API de Reseñas de Libros',  
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
