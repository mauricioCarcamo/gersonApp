import { Post } from "../models/post.js";
import { Image } from "../models/image.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate(['author', 'comments', 'reactions', 'images'])
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener posts' });
    }
  };

export const getPost = async (req, res) => {
  const id = req.params.id

  try {
      const posts = await Post.findById(id)
      res.json(posts);
  } catch (error) {
      res.status(500).json({ message: 'Error al obtener post' });
  }
};

  /* 
  export const getImage = async (req, res) => {
    const id = req.params.id

    try {
        const image = await Image.findOne({ id })
        res.json(image);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener imagen' });
    }
};
  */

  export const savePost = async (req, res) => {
    try {
      const newPost = new Post(req.body);
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: 'Error al crear post' });
    }
  }
  
  export const uploadPost = async (req, res) => {
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
  
  
  
  ;