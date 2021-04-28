const { Model,DataTypes } = require('sequelize')


class Filmes extends Model {
  static init(sequelize){
    super.init({
        title: DataTypes.STRING,
        img: DataTypes.STRING,
    
    },{
      sequelize 
    })
  }
}

module.exports = (Filmes);