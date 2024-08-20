import { Image } from "../models/image.js";
import { Comment, Post } from "../models/post.js";

export const getComment = async (req, res) => {
    const idPost = req.params.idPost

    try {
        const comment = await Comment.find({ idPost })
        res.json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener comentarios' });
    }
};

export const saveComment = async (req, res) => {
  const { idPost } = req.body

    try {
      const post = await Post.findById( idPost )
      
      const comment = new Comment( req.body )

      await comment.save();

      post.comments.push(comment)
      await post.save()

      res.status(201).json({ message: 'Comentario guardada con éxito', comment });
    } catch (error) {
      res.status(500).json({ message: 'Error al subir comentario', error });
      throw error
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



