const { Router } = require("express");
const sequelize = require("sequelize");
const { Songs, Artists, Albums,Interactions } = require("../models");
const router = Router();
// router.get("/songs", (req, res) => {
//   let sql =
//     "SELECT songs.* , albums.name AS albumName, artists.name as artistName, artists.id as artistId, albums.id as albumId FROM songs JOIN albums on albums.id=songs.album_id join artists on artists.id = songs.artist_id;";
//   let query = db.query(sql, (error, result) => {
//     if (error) throw error;
//     res.send(result);
//   });
// });

router.get("/", async (req, res) => {
  const allSongs = await Songs.findAll({
    include:[
      {
        model:Artists
      },
      {
        model:Albums
      }
    ]
  });
  res.json(allSongs);
});

router.get("/top_songs", async (req, res) => {
  try {
    const allSongs = await Songs.findAll({
      include: [
        {
          model: Artists,
          attributes: ["name"],
        },
        {
          model: Albums,
          attributes: ["name","albumImg"],
        },
      ],
    });
    const interacrtion = await Interactions.findAll({
      attributes: [
        "songId",
        [sequelize.fn("sum", sequelize.col("play_count")), "sumCount"],
      ],
      group: ["songId"],
    });
    const mostViewedSongs = []
 
    for (let i = 0; i < interacrtion.length; i++) {
      for (let x = 0; x < allSongs.length; x++) {
        if (interacrtion[i].toJSON().songId === allSongs[x].toJSON().id) {
          mostViewedSongs.push({
            ...allSongs[x].toJSON(),
            sumCount: interacrtion[i].toJSON().sumCount,
          });
          break;
        }
      }
    }
    mostViewedSongs.sort((a, b) => b.sumCount - a.sumCount);
    const arrSongs ={
      "Songs":mostViewedSongs.slice(0,20)
    }
    res.json(arrSongs);
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const song = await Songs.findByPk(req.params.id, {
      include: [
        {model: Artists, attributes:["id", "name"]},
        {model:Albums, attributes:["id","name"]}
      ],
    });
    res.json(song);
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.post("/", async (req, res) => {
  const newSong = await Songs.create(req.body);
  res.json(newSong);
});

router.patch("/:id", async (req, res) => {
  const song = await Songs.findByPk(req.params.id);
  await song.update(req.body);
  res.json(song);
});

router.delete("/:id", async (req, res) => {
  const song = await Songs.findByPk(req.params.id);
  await song.destroy();
  res.json({ deleted: true });
});

module.exports = router;
