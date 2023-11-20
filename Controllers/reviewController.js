import Review from '../models/Review.js';
import { validationResult } from 'express-validator';

const createReview = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("error falta algo")
      return res.status(400).json({ errors: errors.array() });
    }

    const { id_libro, id_usuario, reseña, calificación } = req.body;
    const newReview = new Review({ id_libro, id_usuario, reseña, calificación });
    await newReview.save();

    // Recalcular calificación promedio del libro
    await updateBookRating(id_libro);
    
    res.status(201).json({ message: 'Reseña creada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const editReviewById = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id_libro, id_usuario, reseña, calificación } = req.body;
    const reviewId = req.params.id;

    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { id_libro, id_usuario, reseña, calificación },
      { new: true }
    ).populate('id_libro').populate('id_usuario');

    if (!updatedReview) {
      return res.status(404).json({ message: 'Reseña no encontrada' });
    }

    res.json(updatedReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const getReviewById = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId).populate('id_libro').populate('id_usuario');

    if (!review) {
      return res.status(404).json({ message: 'Reseña no encontrada' });
    }

    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const getReviewsByBookId = async (req, res) => {
  try {
    const bookId = req.params.id;
    const reviews = await Review.find({ id_libro: bookId }).populate('id_libro').populate('id_usuario');

    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('id_libro').populate('id_usuario');
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const deleteReviewById = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Reseña no encontrada' });
    }
    console.log('Reseña eliminada exitosamente')
    res.json({ message: 'Reseña eliminada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const updateBookRating = async (bookId) => {
  try {
    const reviews = await Review.find({ id_libro: bookId });
    const totalReviews = reviews.length;

    if (totalReviews === 0) {
      return; 
    }

    const sumRatings = reviews.reduce((acc, review) => acc + review.calificación, 0);
    const averageRating = sumRatings / totalReviews;

    // Actualizar la calificación del libro en la base de datos
    await Book.findByIdAndUpdate(bookId, { calificacion: averageRating });
  } catch (error) {
    console.error('Error al actualizar la calificación del libro:', error);
  }
};

export { createReview, editReviewById, getReviewById, getReviewsByBookId, getAllReviews, deleteReviewById };
