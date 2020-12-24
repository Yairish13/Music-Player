'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Songs,
        {
          foreignKey:"albumId",
        });
      this.belongsTo(models.Artists,
        {
          foreignKey:"artistId",
        }); 
         }
  };
  Albums.init({
    name: DataTypes.STRING,
    artistId: {
      field:"artist_id",
      type:DataTypes.INTEGER
    },
    albumImg:{
      field:"album_img",
      type:DataTypes.STRING,
    },
    createdAt:{
      field:"created_at",
      type: DataTypes.DATE,
      defaultValue:Date.now()
    },
    updatedAt:{
      field:"updated_at",
      type: DataTypes.DATE,
      defaultValue:Date.now()
    }
  }, {
    sequelize,
    modelName: 'Albums',
  });
  return Albums;
};