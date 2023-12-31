import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true, 
    unique: true 
  },
});

export default mongoose.model('Category', categorySchema);
