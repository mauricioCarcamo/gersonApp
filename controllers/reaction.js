import { Post, Reaction } from "../models/post.js";


export const getReaction = async (req, res) => {
    const { idPost } = req.body

  try {
      const reaction = await Reaction.find({ idPost })
      res.json(reaction);
  } catch (error) {
      res.status(500).json({ message: 'Error al obtener reacciones' });
  }
};

export const saveReaction = async (req, res) => {
  const { idPost, author } = req.body

  try {
    const post = await Post.findById( idPost )

    const previousReaction = await Reaction.findOneAndDelete({ idPost, author })

    if ( previousReaction ) {
      res.status(201).json({ message: 'Reaccion borrada con éxito', previousReaction });
    } else {
      const reaction = new Reaction( req.body )
  
      await reaction.save();
  
      post.reactions.push(reaction)
      await post.save()
  
      res.status(201).json({ message: 'Reaccion guardada con éxito', reaction });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error al guardar reaccion', error });
  }
}