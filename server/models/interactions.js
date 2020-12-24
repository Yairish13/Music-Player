'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Songs,
        {
          foreignKey:"songId",
        });
        this.belongsTo(models.Users,
          {
            foreignKey:"userId",
          });
    }
  };
  Interactions.init({
    userId:{
      field:"user_id",
      type:DataTypes.INTEGER
    },
    songId:{
      field:"song_id",
      type:DataTypes.INTEGER
    },
    isLiked:{
      field:"is_liked",
      type:DataTypes.BOOLEAN
    },
    playCount:{
      field:"play_count",
      type:DataTypes.INTEGER
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
    modelName: 'Interactions',
    paranoid:true
  });
  return Interactions;
};