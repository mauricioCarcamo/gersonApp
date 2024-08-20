import { Image } from "../models/image.js";
import { User } from "../models/user.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('profileImage')
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
};

export const getUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id).populate('profileImage')
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuario' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body
    console.log( req.body );
    
    try {
        const user = await User.findOne({ email }).populate('profileImage')

        if (user) {
            if (user.password != password) {
                res.json({ message: 'Usuario o contraseña incorrecta' });
            } else {
                res.json(user);
            }
        } else {
            res.json({ message: 'Usuario o contraseña incorrecta' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesion' });
    }
};

export const saveUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear usuario' });
    }
}

export const uploadUser = async (req, res) => {
    const id = req.params.id;

    try {
        const image = new Image({
            filename: req.file.filename,
            path: req.file.path,
            originalName: req.file.originalname,
            id: id
        })

        await image.save();
        res.status(201).json({ message: 'Imagen subida y guardada con éxito', image });
    } catch (error) {
        res.status(500).json({ message: 'Error al subir la imagen', error });
    }
}



