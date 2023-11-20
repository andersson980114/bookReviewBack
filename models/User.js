import mongoose from 'mongoose'; 
//definir esquema
const userSchema = new mongoose.Schema(
  {
    id: { 
      type: Object 
    },
    username: { 
        type: String, 
        required: true,
        unique: true },
    password: { 
        type: String, 
        required: true 
    },
    nombre: { 
        type: String, 
        required: true 
    },
    apellido: { 
        type: String,
        required: true 
    }, 
    correo: {  
        type: String, 
        required: true,
        unique: true 
    }, 
    foto: {
        type: String, 
        required: true 
    }
  }, 
  {
    versionKey: false,
    timestamps: false,
  }
);

export default mongoose.model('User', userSchema);
