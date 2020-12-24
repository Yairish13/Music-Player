const { Router } = require("express");
const { Artists, Songs, Albums } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  const allArtists = await Artists.findAll();
  res.json(allArtists);
});

router.get("/top_artists", async (req, res) => {
  try {
      const topArtists = await Artists.findAll({ limit: 20 });
      res.json(topArtists);
  } catch (e) { res.json({ error: e.message }); }
});

router.get("/:id", async (req, res) => {
  try {
    const artist = await Artists.findByPk(req.params.id, {
      include: [
        {
          model: Songs,
          include: [{ model: Albums, attributes: ["name", "albumImg"] },
           {model: Artists, attributes:['name']}],
        },
        {
          model: Albums, attributes:['name'],
          include:[{model: Artists, attributes:['name']}],
        },
      ],
    });
    res.json(artist);
  } catch (e) {
    res.json({ error: e.message });
  }
});

// router.get("/albumByArtist/:id", async (req, res) => {
//   try {
//     const artist = await Artists.findByPk(req.params.artistId, {
//       include: [{ model: Albums, attributes: ["name", "albumImg"] }],
//     });
//     res.json(artist);
//   } catch (e) {
//     res.json({ error: e.message });
//   }
// });

router.post("/", async (req, res) => {
  const newArtist = await Artists.create(req.body);
  res.json(newArtist);
});

router.patch("/:id", async (req, res) => {
  const artist = await Artist.findByPk(req.params.id);
  await artist.update(req.body);
  res.json(artist);
});

router.delete("/:id", async (req, res) => {
  const artist = await Artist.findByPk(req.params.id);
  await artist.destroy();
  res.json({ deleted: true });
});

module.exports = router;
