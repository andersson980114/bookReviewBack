// routes/categoryRoutes.js
import express from 'express';
import validateCategoryFields from '../middlewares/validateCategoryMiddleware.js';
import  { createCategory, editCategoryById, getCategoryById, getAllCategories, deleteCategoryById } from '../Controllers/categoryController.js';

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Categories
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Crear una nueva categoría
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Categoría creada exitosamente
 *       '400':
 *         description: Datos de entrada no válidos
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/', validateCategoryFields, createCategory);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Editar una categoría por ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Categoría actualizada exitosamente
 *       '400':
 *         description: Datos de entrada no válidos
 *       '404':
 *         description: Categoría no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.put('/:id', validateCategoryFields, editCategoryById);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Obtener una categoría por ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Categoría obtenida exitosamente
 *       '404':
 *         description: Categoría no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/:id', getCategoryById);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Categories]
 *     responses:
 *       '200':
 *         description: Categorías obtenidas exitosamente
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/', getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Eliminar una categoría por ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Categoría eliminada exitosamente
 *       '404':
 *         description: Categoría no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/:id', deleteCategoryById);

export default router;