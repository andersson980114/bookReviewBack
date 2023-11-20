import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true 
  },
  apellido: { 
    type: String, 
    required: true 
  },
});

export default mongoose.model('Author', authorSchema);
