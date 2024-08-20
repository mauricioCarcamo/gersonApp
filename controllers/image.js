import { Image } from "../models/image.js";

export const getImage = async (req, res) => {
    const id = req.params.id

    try {
        const image = await Image.findOne({ id })
        res.json(image);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener imagen' });
    }
};

export const uploadImage = async (req, res) => {
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

// export const login = async (req, res) => {
//     const { email, password } = req.body
//     console.log( req.body );
    

//     try {
//         const user = await User.findOne({ email })

//         if (user) {
//             if (user.password != password) {
//                 res.json({ message: 'Usuario o contraseña incorrecta' });
//             } else {
//                 res.json(user);
//             }
//         } else {
//             res.json({ message: 'Usuario o contraseña incorrecta' });
//         }

//     } catch (error) {
//         res.status(500).json({ message: 'Error al iniciar sesion' });
//     }
// };

// export const saveUser = async (req, res) => {
//     try {
//         const newUser = new User(req.body);
//         await newUser.save();
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(400).json({ message: 'Error al crear usuario' });
//     }
// }

// export const uploadUser = async (req, res) => {
//     const id = req.params.id;

//     try {
//         const image = new Image({
//             filename: req.file.filename,
//             path: req.file.path,
//             originalName: req.file.originalname,
//             id: id
//         })

//         await image.save();
//         res.status(201).json({ message: 'Imagen subida y guardada con éxito', image });
//     } catch (error) {
//         res.status(500).json({ message: 'Error al subir la imagen', error });
//     }
// }



