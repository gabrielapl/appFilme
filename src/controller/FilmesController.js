const Filmes = require('../models/Filmes')

module.exports = {
  async index (req,res){
    const filmes = await Filmes.findAll()
    return res.json({filmes})
  },
  async store(req,res){
    const {title, img} = req.body;
    const filmes = await Filmes.create({title,img})
    return res.json(filmes)
  }
}