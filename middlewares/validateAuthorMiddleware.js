import { body } from 'express-validator';

const validateAuthorFields = [
  body('nombre').notEmpty().withMessage('El nombre de autor es obligatorio'),
  body('apellido').notEmpty().withMessage('El apellido de autor es obligatorio'),
];

export default validateAuthorFields;
