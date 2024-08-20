import { Image, ProfileImage } from "../models/image.js";
import { Post } from "../models/post.js";
import { User } from "../models/user.js";

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
  const { idPost } = req.params

    try {
      const post = await Post.findById( idPost )

      const image = new Image({
        filename: req.file.filename,
        path: req.file.path,
        originalName: req.file.originalname,
        idPost
      })

      await image.save();

      post.images.push(image)
      await post.save()

      res.status(201).json({ message: 'Imagen subida y guardada con éxito', image });
    } catch (error) {
      res.status(500).json({ message: 'Error al subir la imagen', error });
      throw error
    }
  }

  export const uploadProfileImage = async (req, res) => {
  const { idUser } = req.params

    try {
      const user = await User.findById( idUser )

      const image = new ProfileImage({
        filename: req.file.filename,
        path: req.file.path,
        originalName: req.file.originalname,
      })

      await image.save();

      user.profileImage = image
      await user.save()

      res.status(201).json({ message: 'Imagen subida y guardada con éxito', image });
    } catch (error) {
      res.status(500).json({ message: 'Error al subir la imagen', error });
      throw error
    }
  }
