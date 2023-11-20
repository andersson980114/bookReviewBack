import { body } from 'express-validator';

const validateReviewFields = [
  body('id_libro').notEmpty().withMessage('El ID del libro es obligatorio'),
  body('id_usuario').notEmpty().withMessage('El ID del usuario es obligatorio'),
  body('reseña').notEmpty().withMessage('La reseña es obligatoria'),
  body('calificación').notEmpty().withMessage('La calificación es obligatoria'),
];

export default validateReviewFields;
