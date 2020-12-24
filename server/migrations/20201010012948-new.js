'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("PlaylistSongs","playlist_songs")

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("playlist_songs","PlaylistSongs")

  }
};
