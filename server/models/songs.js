"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.PlaylistSongs, {
        foreignKey: "songId",
      });
      this.hasMany(models.Interactions, {
        foreignKey: "songId",
      });
      this.belongsTo(models.Artists, {
        foreignKey: "artistId",
      });
      this.belongsTo(models.Albums, {
        foreignKey: "albumId",
      });
    }
  }
  Songs.init(
    {
      name: DataTypes.STRING,
      albumId: {
        field: "album_id",
        type: DataTypes.INTEGER,
      },
      artistId: {
        field: "artist_id",
        type: DataTypes.INTEGER,
      },
      youtubeLink: {
        field: "youtube_link",
        type: DataTypes.STRING,
      },
      trackNumber: {
        field: "track_number",
        type: DataTypes.INTEGER,
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
      },
      length: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Songs",
      paranoid: true,
    }
  );
  return Songs;
};
