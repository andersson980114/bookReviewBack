import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  cover: { 
    type: String, 
    required: true 
  },
  nombre: { 
    type: String, 
    required: true 
  },
  autor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Author', 
    required: true 
  },
  descripcion: { 
    type: String, 
    required: true 
  },
  calificacion: { 
    type: Number, 
    default: 0 
  },
  categoria: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category',
    required: true 
  },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;