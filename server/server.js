const express = require("express");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/albums", require("./routes/albums"));
app.use("/artists", require("./routes/artists"));
app.use("/playlists", require("./routes/playlists"));
app.use("/songs", require("./routes/songs"));
// app.use('/users/', require("./routes/users"));

module.exports = app;






























app.get("/artists", (req, res) => {
    let sql ='SELECT ar.*,ar.id as artistId,ar.name as artistName FROM artists ar'
    let query = db.query(sql, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  });

  app.get("/albums", (req, res) => {
    let sql ='SELECT al.name as albumName,al.id, al.id as albumId ,ar.name as artistName, al.cover_img FROM albums al JOIN artists ar on ar.id=al.artist_id;'
    let query = db.query(sql, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  });

  app.get("/playlists", (req, res) => {
    let sql ='SELECT * from playlists'
    let query = db.query(sql, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  });

app.get("/top_songs", (req, res) => {
  let sql =
    "SELECT s.title, sum(i.play_count) AS Top_Songs, s.youtube_link, ar.name as artistName, s.id,s.id as songId, al.id as albumId,al.name as albumName,ar.id as artistId  FROM spotify_player.songs s  JOIN interactions i on s.id = i.songs_id JOIN albums al on s.album_id=al.id  JOIN artists ar on s.artist_id=ar.id GROUP BY s.title ORDER BY Top_Songs desc LIMIT 20;";
  let query = db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});






app.get("/albumByArtist/:id",(req,res)=>{
  db.query(`SELECT  ar.cover_img, al.*,al.id as albumId, al.name as albumName, ar.name as artistName FROM artists ar
  JOIN albums al on al.artist_id=ar.id
  WHERE ar.id=${req.params.id}`,  (err, result, fields) =>{
      if (err) throw err;
      res.json(result);
    });
})

app.get("/artists/:id",(req,res)=>{
  db.query(`SELECT ar.name as artistName, ar.cover_img, ar.id as artistId ,
  al.name as albumName, al.id as albumId,
   s.* FROM artists ar
  JOIN songs s on s.artist_id=ar.id JOIN albums al on al.id=s.album_id 
   WHERE ar.id=${req.params.id}`
  ,  (err, result) =>{
      if (err) throw err;
      res.json(result);
    });
  
})


app.get("/playlists/:id", (req, res) => {
  let sql = `SELECT pl.name as plName, pl.id , pl.cover_img, pl.upload_at as created_at, s.title,s.id AS songId, s.youtube_link,ar.name as artistName, al.name as albumName, al.id as albumId, ar.id as artistId FROM playlists pl JOIN list_of_songs lis on pl.id=lis.playlist_id JOIN songs s on s.id=lis.songs_id JOIN albums al on s.album_id=al.id JOIN artists ar on s.artist_id=ar.id WHERE pl.id=${req.params.id}` ;
  let query = db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});













