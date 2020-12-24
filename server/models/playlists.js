"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Playlists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.PlaylistSongs, {
        foreignKey: "playlistId",
        as:'Songs'
      });
    }
  }
  Playlists.init(
    {
      name: DataTypes.STRING,
      playlistImg: {
        field: "playlist_img",
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
      modelName: "Playlists",
      paranoid: true,
    }
  );
  return Playlists;
};
