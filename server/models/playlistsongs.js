"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PlaylistSongs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Songs, {
        foreignKey: "songId",
      });
      this.belongsTo(models.Playlists, {
        foreignKey: "playlistId",
      });
    }
  }
  PlaylistSongs.init(
    {
      playlistId: {
        field: "playlist_id",
        type:DataTypes.INTEGER,
      },
      songId: {
        field: "song_id",
        type:DataTypes.INTEGER,
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
      modelName: "PlaylistSongs",
      paranoid:true
    }
  );
  return PlaylistSongs;
};
