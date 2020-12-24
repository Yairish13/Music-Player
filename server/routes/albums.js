const { Router } = require("express");
const { Albums,Songs,Artists,Interactions } = require("../models");
const sequelize = require("sequelize");
const router = Router();

router.get("/", async (req, res) => {
  const allAlbums = await Albums.findAll({
    include:[
      {
        model:Artists
      },
      {
        model:Songs
      }
    ]
  });
  res.json(allAlbums);
});

router.get("/top_albums", async (req, res) => {
  try {
    const albums = await Albums.findAll({
      include: [
        {
          model: Artists,
          attributes: ["name"],
        },
        { model: Songs, attributes: ["id"] },
      ],
    });
    const interacrtions = await Interactions.findAll({
      attributes: [
        "songId",
        [sequelize.fn("sum", sequelize.col("play_count")), "views"],
      ],
      group: ["songId"],
    });
    const mostViewedAlbums = [];
    const albumsNames = [];
    for (let i = 0; i < interacrtions.length; i++) {
      for (let x = 0; x < albums.length; x++) {
        for (let y = 0; y < albums[x].toJSON().Songs.length; y++) {
          if (
            interacrtions[i].toJSON().songId === albums[x].toJSON().Songs[y].id
          ) {
            const checker = albumsNames.findIndex(
              (album) => album === albums[x].toJSON().name
            );
            if (checker < 0) {
              mostViewedAlbums.push({
                ...albums[x].toJSON(),
                views: Number(interacrtions[i].toJSON().views),
              });
              albumsNames.push(albums[x].toJSON().name);
              break;
            } else {
              mostViewedAlbums[checker].views += Number(
                interacrtions[i].toJSON().views
              );
              break;
            }
          }
        }
      }
    }
    mostViewedAlbums.sort((a, b) => b.views - a.views);
    res.json(mostViewedAlbums.slice(0, 20));
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
      const album = await Albums.findByPk(req.params.id, {
          include: [{
              model: Songs,
              include: [{ model: Artists, attributes: ["name", "artistImg"] }]
          }, Artists]
      });
      res.json(album);
  } catch (e) { res.json({ error: e.message }); }
});

router.post("/", async (req, res) => {
  const newAlbum = await Albums.create(req.body);
  res.json(newAlbum);
});

router.patch("/:id", async (req, res) => {
  const album = await Albums.findByPk(req.params.id);
  await album.update(req.body);
  res.json(album);
});

router.delete("/:id", async (req, res) => {
  const album = await Albums.findByPk(req.params.id);
  await album.destroy();
  res.json({ deleted: true });
});


module.exports = router;

