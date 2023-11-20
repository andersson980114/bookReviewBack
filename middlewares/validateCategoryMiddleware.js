import { body } from 'express-validator';

const validateCategoryFields = [
  body('nombre').notEmpty().withMessage('El nombre de la categoría es obligatorio'),
];

export default validateCategoryFields;
