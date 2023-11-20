import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    id_libro: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book', 
        required: true 
    },
    id_usuario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    reseña: { 
        type: String, 
        required: true 
    },
    calificación: { 
        type: Number, 
        required: true 
    },
});

export default mongoose.model('Review', reviewSchema);
