import { body } from 'express-validator';

const validateBookFields = [
  body('cover').notEmpty().withMessage('La portada del libro es obligatoria'),
  body('nombre').notEmpty().withMessage('El nombre del libro es obligatorio'),
  body('autor').notEmpty().withMessage('El autor del libro es obligatorio'),
  body('descripcion').notEmpty().withMessage('La descripción del libro es obligatoria'), 
  body('categoria').notEmpty().withMessage('La categoría del libro es obligatoria'),
];

export default validateBookFields;