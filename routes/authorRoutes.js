import express from 'express';
import validateAuthorFields from '../middlewares/validateAuthorMiddleware.js';
import { createAuthor, editAuthorById, getAuthorById, getAllAuthors, deleteAuthorById } from '../Controllers/authorController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authors
 */

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Crear un nuevo autor
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Autor creado exitosamente
 *       '400':
 *         description: Datos de entrada no válidos
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/', validateAuthorFields, createAuthor);

/**
 * @swagger
 * /authors/{id}:
 *   put:
 *     summary: Editar un autor por ID
 *     tags: [Authors]
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
 *               apellido:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Autor actualizado exitosamente
 *       '400':
 *         description: Datos de entrada no válidos
 *       '404':
 *         description: Autor no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.put('/:id', validateAuthorFields, editAuthorById);

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Obtener un autor por ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Autor obtenido exitosamente
 *       '404':
 *         description: Autor no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/:id', getAuthorById);

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Obtener todos los autores
 *     tags: [Authors]
 *     responses:
 *       '200':
 *         description: Autores obtenidos exitosamente
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/', getAllAuthors);

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Eliminar un autor por ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Autor eliminado exitosamente
 *       '404':
 *         description: Autor no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/:id', deleteAuthorById);

export default router;
