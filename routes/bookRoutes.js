import express from 'express';
import validateBookFields from '../middlewares/validationBookMiddleware.js'; 
import { createBook, getAllBooks, getBookById, editBookById, deleteBookById } from '../Controllers/bookController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Books
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Crear un nuevo libro
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cover:
 *                 type: string
 *               nombre:
 *                 type: string
 *               autor:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               calificacion:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: Libro creado exitosamente
 *       '400':
 *         description: Datos de entrada no válidos
 *       '500':
 *         description: Error interno del servidor
 */
// Crear un nuevo libro
router.post('/', validateBookFields, createBook);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Obtener todos los libros
 *     tags: [Books]
 *     responses:
 *       '200':
 *         description: Lista de libros obtenida exitosamente
 *         content:
 *           application/json:
 *             example: []
 *       '500':
 *         description: Error interno del servidor
 */
// Obtener todos los libros
router.get('/', getAllBooks);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Obtener un libro por su ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Libro obtenido exitosamente
 *         content:
 *           application/json:
 *             example: {}
 *       '404':
 *         description: Libro no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
// Obtener un libro por su ID
router.get('/:id', getBookById);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Editar un libro por su ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cover:
 *                 type: string
 *               nombre:
 *                 type: string
 *               autor:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               calificacion:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Libro editado exitosamente
 *       '404':
 *         description: Libro no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
// Editar un libro por su ID
router.put('/:id', editBookById);

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Eliminar un libro por su ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Libro eliminado exitosamente
 *       '404':
 *         description: Libro no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
// Eliminar un libro por su ID
router.delete('/:id', deleteBookById);

export default router;
