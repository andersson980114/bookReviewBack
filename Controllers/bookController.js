// controllers/bookController.js
import Book from '../models/Book.js';
import { validationResult } from 'express-validator';

const createBook = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cover, nombre, autor, descripcion, calificacion, categoria } = req.body;
    const newBook = new Book({ cover, nombre, autor, descripcion, calificacion, categoria });
    await newBook.save();

    res.status(201).json({ message: 'Libro creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const editBookById = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cover, nombre, autor, descripcion, calificacion, categoria } = req.body;
    const bookId = req.params.id;

    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { cover, nombre, autor, descripcion, calificacion, categoria },
      { new: true }
    ).populate('autor').populate('categoria');

    if (!updatedBook) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    res.json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId).populate('autor').populate('categoria');

    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('autor').populate('categoria');
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    res.json({ message: 'Libro eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export { createBook, editBookById, getBookById, getAllBooks, deleteBookById };
