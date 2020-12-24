const { Router } = require('express');
const { Playlists,PlaylistSongs,Songs,Artists,Albums } = require('../models');

const router = Router();

router.get("/", async (req, res) => {
  const allPlaylists = await Playlists.findAll();
  res.json(allPlaylists);
});

router.get("/top_playlists", async (req, res) => {
  try {
      const topPlaylist = await Playlists.findAll({ limit: 20 });
      res.json(topPlaylist);
  } catch (e) { res.json({ error: e.message }); }
});

router.get("/:id", async (req, res) => {
  try {
      const playlist = await Playlists.findByPk(req.params.id, {
          include: [
              {
                  model:PlaylistSongs,
                  as:"Songs",
                  where: { playlistId: req.params.id },

                  include: [
                      {
                          model: Songs,
                          include: [
                              {
                                  model: Artists,
                                  attributes: ["name"],
                              },
                              {
                                  model: Albums,
                                  attributes: ["name"],
                              },
                          ],

                      }
                  ],
                  attributes: ['id']
              }
          ]
      });
      for (let i = 0; i < playlist.Songs.length; i++) {
          playlist.Songs[i] = playlist.Songs[i].Song;
      }
      res.json(playlist);
  } catch (e) { res.json({ error: e.message }); }



});


router.post("/", async (req, res) => {
  const newPlaylist = await Playlists.create(req.body);
  res.json(newPlaylist);
});


router.patch("/:id", async (req, res) => {
  const playlist = await Playlists.findByPk(req.params.id);
  await playlist.update(req.body);
  res.json(playlist);
});

router.delete("/:id", async (req, res) => {
  const playlist = await Playlists.findByPk(req.params.id);
  await playlist.destroy();
  res.json({ deleted: true });
});

module.exports = router;

