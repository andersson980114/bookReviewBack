import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 

const registerUser = async (req, res) => {
  try {
    const { nombre, apellido, foto, username, correo, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }
  
    const user = new User({
      nombre,
      apellido,
      foto,
      username,
      correo,
      password: await bcrypt.hash(password, 10), 
    });

    await user.save();

    // Genera un token de acceso
    const accessToken = generateAccessToken(user._id);

    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el registro' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const userData = {
      id: user._id,
      nombre:user.nombre,
      apellido:user.apellido,  
      foto:user.foto,
      username:user.username,
      correo:user.correo,
    } 

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Generar un token de acceso
    const accessToken = generateAccessToken(user._id);
    // Generar un token de actualización
    const refreshToken = generateRefreshToken(user._id);

    res.json({ accessToken, refreshToken, userData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el inicio de sesión' });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId, { password: 0 }); // Excluimos la contraseña
    const userData = {
      id: userId,
      nombre:user.nombre,
      apellido:user.apellido,  
      foto:user.foto,
      username:user.username,
      correo:user.correo,
    } 

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el usuario por ID' });
  }
};

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, 'claveSecreta', {
    expiresIn: '3h',
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, 'claveSecreta', {
    expiresIn: '3h',
  });
};

const refreshAccessToken = (token) => {
  try {
    const user = jwt.verify(token, 'claveSecreta');
    const accessToken = generateAccessToken(user.userId);
    const refreshToken = generateRefreshToken(user._id);
   
    return {refreshToken, accessToken, user};
  } catch (error) {
    throw new Error('Refresh token inválido');
  }
};

const refreshTokenUser = (req, res) => { 
  const { refreshToken: rt } = req.body;

  if (!rt) {
    return res.status(401).json({ message: 'Refresh token no proporcionado' });
  }

  try {
    const {refreshToken, accessToken, user} = refreshAccessToken(rt);
    res.json( {refreshToken, accessToken, user} );
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: 'Refresh token inválido' });
  }
};

export { registerUser, loginUser, getUserById, refreshTokenUser };
