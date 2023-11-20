// routes/reviewRoutes.js
import express from 'express';
import validateReviewFields from '../middlewares/validateReviewMiddleware.js';
import{ createReview, editReviewById, getReviewById, getReviewsByBookId, getAllReviews, deleteReviewById }  from '../Controllers/reviewController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reviews 
 */

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Crear una nueva reseña
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_libro:
 *                 type: string
 *                 description: ID del libro
 *               id_usuario:
 *                 type: string
 *                 description: ID del usuario
 *               reseña:
 *                 type: string
 *                 description: Texto de la reseña
 *               calificación:
 *                 type: number
 *                 description: Calificación de la reseña
 *     responses:
 *       201:
 *         description: Reseña creada exitosamente
 *       400:
 *         description: Error de validación
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', validateReviewFields, createReview);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Editar una reseña por ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reseña a editar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_libro:
 *                 type: string
 *                 description: ID del libro
 *               id_usuario:
 *                 type: string
 *                 description: ID del usuario
 *               reseña:
 *                 type: string
 *                 description: Texto de la reseña
 *               calificación:
 *                 type: number
 *                 description: Calificación de la reseña
 *     responses:
 *       200:
 *         description: Reseña editada exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Reseña no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put('/:id', validateReviewFields, editReviewById);

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     summary: Obtener una reseña por ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reseña a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reseña obtenida exitosamente
 *       404:
 *         description: Reseña no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get('/:id', getReviewById);

/**
 * @swagger
 * /reviews/book/{id}:
 *   get:
 *     summary: Obtener reseñas por ID de libro
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro para obtener reseñas
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reseñas obtenidas exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get('/book/:id', getReviewsByBookId);

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Obtener todas las reseñas
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Reseñas obtenidas exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', getAllReviews);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Eliminar una reseña por ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reseña a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reseña eliminada exitosamente
 *       404:
 *         description: Reseña no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/:id', deleteReviewById);

export default router;
