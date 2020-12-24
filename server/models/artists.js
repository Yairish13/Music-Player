"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Albums, {
        foreignKey: "artistId",
      });
      this.hasMany(models.Songs, {
        foreignKey: "artistId",
      });
    }
  }
  Artists.init(
    {
      name: DataTypes.STRING,
      artistImg: {
        field: "artist_img",
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
    },
    {
      sequelize,
      modelName: "Artists",
      paranoid: true,
    }
  );
  return Artists;
};
