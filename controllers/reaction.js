import { Reaction } from "../models/post.js";


export const getReaction = async (req, res) => {
  const idPost = req.params.idPost

  try {
      const reaction = await Reaction.find({ idPost })
      res.json(reaction);
  } catch (error) {
      res.status(500).json({ message: 'Error al obtener reacciones' });
  }
};

export const saveReaction = async (req, res) => {

  try {
    const reaction = new Reaction( req.body )

    await reaction.save();
    res.status(201).json({ message: 'Reaccion guardada con éxito', reaction });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar reaccion', error });
  }
}