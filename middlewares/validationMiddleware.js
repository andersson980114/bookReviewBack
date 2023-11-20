import { body } from 'express-validator'; 

// Middleware para validar los campos de entrada
const validateFields = [
  body('nombre').notEmpty().withMessage('El nombre del usuario es obligatorio'),
  body('apellido').notEmpty().withMessage('El apellido del usuario es obligatorio'),
  body('foto').notEmpty().withMessage('La foto de usuario es obligatoria'),
  body('username').notEmpty().withMessage('El username es obligatorio'),
  body('correo').isEmail().withMessage('El correo del usuario es obligatorio'),
  body('password').notEmpty().withMessage('El password del usuario es obligatorio'),
];

export default validateFields;
