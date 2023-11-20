import Author from '../models/Author.js';
import { validationResult } from 'express-validator';

const createAuthor = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, apellido } = req.body;
    const author = new Author({ nombre, apellido });
    await author.save();

    res.status(201).json({ message: 'Autor creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const editAuthorById = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { nombre, apellido } = req.body;
      const authorId = req.params.id;
  
      const updatedAuthor = await Author.findByIdAndUpdate(
        authorId,
        { nombre, apellido },
        { new: true }
      );
  
      if (!updatedAuthor) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }
  
      res.json({ message: 'Autor actualizado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  const getAuthorById = async (req, res) => {
    try {
      const authorId = req.params.id;
      const author = await Author.findById(authorId);
  
      if (!author) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }
  
      res.json(author);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  const getAllAuthors = async (req, res) => {
    try {
      const authors = await Author.find();
      res.json(authors);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  const deleteAuthorById = async (req, res) => {
    try {
      const authorId = req.params.id;
      const deletedAuthor = await Author.findByIdAndDelete(authorId);
  
      if (!deletedAuthor) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }
  
      res.json({ message: 'Autor eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  export { createAuthor, editAuthorById, getAuthorById, getAllAuthors, deleteAuthorById };
