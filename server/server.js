const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yair123",
  database: "spotify_player",
  multipleStatements: true,
});

db.connect((error) => {
  if (error) console.log(error.message);
  console.log("mySQL connected");
});

app.get("/songs", (req, res) => {
  let sql =
    "SELECT songs.* , albums.name AS album_name, artists.name as artist_name FROM songs JOIN albums on albums.id=songs.album_id join artists on artists.id = songs.artist_id;";
  let query = db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

app.get("/artists", (req, res) => {
    let sql ='SELECT * from artists'
    let query = db.query(sql, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  });

  app.get("/albums", (req, res) => {
    let sql ='SELECT al.name as album_name,al.id,ar.name as artist_name, al.cover_img FROM albums al JOIN artists ar on ar.id=al.artist_id;'
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
    "SELECT s.title, sum(i.play_count) AS Top_Songs, s.youtube_link, ar.name, s.id  FROM spotify_player.songs s  JOIN interactions i on s.id = i.songs_id JOIN artists ar on s.artist_id=ar.id GROUP BY s.title ORDER BY Top_Songs desc LIMIT 20;";
  let query = db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

app.get("/top_artists", (req, res) => {
  let sql =
    "SELECT art.name, art.cover_img, art.id FROM spotify_player.songs s  JOIN interactions i on s.id = i.songs_id JOIN artists art on art.id=s.artist_id GROUP BY art.name ORDER BY sum(i.play_count) desc LIMIT 20;";
  let query = db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

app.get("/top_albums", (req, res) => {
  let sql =
    "SELECT a.*, ar.name as arname FROM spotify_player.songs s  JOIN interactions i on s.id = i.songs_id JOIN albums a on a.id=s.artist_id JOIN artists ar on ar.id=a.artist_id GROUP BY a.name ORDER BY sum(i.play_count) desc LIMIT 20;";
  let query = db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

app.get("/top_playlists", (req, res) => {
  let sql =
    "SELECT pl.name, pl.id, pl.cover_img FROM spotify_player.songs s JOIN interactions i on s.id = i.songs_id JOIN list_of_songs lis on lis.songs_id=s.id JOIN playlists pl on lis.playlist_id=pl.id GROUP BY pl.name ORDER BY sum(i.play_count) desc LIMIT 10;";
  let query = db.query(sql, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get("/songs/:id", (req, res) => {
  let sql = `SELECT s.title,s.youtube_link, s.length, ar.name as artistName, al.name albumName, ar.id as artistId, al.id as albumId FROM songs s JOIN artists ar on s.artist_id=ar.id JOIN albums al on s.album_id=al.id WHERE s.id=${req.params.id}`;
  let query = db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

// app.get("/artists/:id", (req, res) => {
//   let sql = `SELECT ar.name, ar.cover_img, al.*, s.title FROM artists ar JOIN albums al on al.artist_id=ar.id JOIN songs s on s.artist_id=ar.id WHERE ar.id=${req.params.id}`
//   let query = db.query(sql, (error, result) => {
//     if (error) throw error;
//     res.send(result);
//   });
// });

app.get("/albums/:id", (req, res) => {
  let sql = `SELECT al.name as albumName, ar.name, al.artist_id as artistId, al.id, al.cover_img, s.*,s.id as songId,s.title FROM albums al JOIN artists ar on ar.id=al.artist_id JOIN SONGS s on s.album_id=al.id WHERE al.id=${req.params.id}`;
  let query = db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

app.get("/albumByArtist/:id",(req,res)=>{
  db.query(`SELECT  ar.cover_img, al.* FROM artists ar
  JOIN albums al on al.artist_id=ar.id
  WHERE ar.id=${req.params.id}`,  (err, result, fields) =>{
      if (err) throw err;
      res.json(result);
    });
})

app.get("/artists/:id",(req,res)=>{
  db.query(`SELECT ar.name as artistName, ar.cover_img,ar.id as artistId , s.* FROM artists ar
  JOIN songs s on s.artist_id=ar.id
   WHERE ar.id=${req.params.id}`
  ,  (err, result) =>{
      if (err) throw err;
      res.json(result);
    });
  
})


app.get("/playlists/:id", (req, res) => {
  let sql = `SELECT pl.name as plName, pl.id , pl.cover_img, pl.upload_at as created_at, s.title,s.id AS songId, s.youtube_link FROM playlists pl JOIN list_of_songs lis on pl.id=lis.playlist_id JOIN songs s on s.id=lis.songs_id WHERE pl.id=${req.params.id}`;
  let query = db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

app.post("/song", (req, res) => {
  if (!req.body) {
    res.status(400).send("Content missing");
  }
  const { body } = req;
  const queryString = `INSERT INTO songs SET ?`;
  db.query(queryString, body, (err, result) => {
    if (err) {
      res.send("An error occurred.");
    } else {
      res.send("1 song successfully inserted into db");
    }
  });
});

app.post("/album", (req, res) => {
  if (!req.body) {
    res.status(400).send("Content missing");
  }
  const { body } = req;
  const queryString = `INSERT INTO albums SET ?`;
  db.query(queryString, body, (err, result) => {
    if (err) {
      res.send("An error occurred.");
    } else {
      res.send("1 album successfully inserted into db");
    }
  });
});

app.post("/playlist", (req, res) => {
  if (!req.body) {
    res.status(400).send("Content missing");
  }
  const { body } = req;
  const queryString = `INSERT INTO playlists SET ?`;
  db.query(queryString, body, (err, result) => {
    if (err) {
      res.send("An error occurred.");
    } else {
      res.send("1 playlist successfully inserted into db");
    }
  });
});

app.post("/artist", (req, res) => {
  if (!req.body) {
    res.status(400).send("Content missing");
  }
  const { body } = req;
  const queryString = `INSERT INTO artists SET ?`;
  db.query(queryString, body, (err, result) => {
    if (err) {
      res.send("An error occurred.");
    } else {
      res.send("1 artist successfully inserted into db");
    }
  });
});

app.put("/song/:id", (req, res) => {
  if (!req.body) {
    res.status(400).send("Content missing");
  }
  const { body } = req;
  const queryString = `UPDATE songs SET ? WHERE id=${req.params.id}`;
  db.query(queryString, body, (err, result) => {
    if (err) {
      res.send("An error occurred.");
    } else {
      res.send("1 song updated");
    }
  });
});

app.put("/artist/:id", (req, res) => {
  if (!req.body) {
    res.status(400).send("Content missing");
  }
  const { body } = req;
  const queryString = `UPDATE artists SET ? WHERE id=${req.params.id}`;
  db.query(queryString, body, (err, result) => {
    if (err) {
      res.send("An error occurred.");
    } else {
      res.send("1 artist updated");
    }
  });
});

app.put("/album/:id", (req, res) => {
  if (!req.body) {
    res.status(400).send("Content missing");
  }
  const { body } = req;
  const queryString = `UPDATE albums SET ? WHERE id=${req.params.id}`;
  db.query(queryString, body, (err, result) => {
    if (err) {
      res.send("An error occurred.");
    } else {
      res.send("1 album updated");
    }
  });
});

app.put("/playlist/:id", (req, res) => {
  if (!req.body) {
    res.status(400).send("Content missing");
  }
  const { body } = req;
  const queryString = `UPDATE playlists SET ? WHERE id=${req.params.id}`;
  db.query(queryString, body, (err, result) => {
    if (err) {
      res.send("An error occurred.");
    } else {
      res.send("1 album updated");
    }
  });
});

app.delete("/song/:id", (req, res) => {
  db.query(`DELETE FROM songs WHERE id=${req.params.id}`, (error, results) => {
    if (error) res.send("An error occurred");
    res.send("One song removed");
  });
});

app.delete("/artist/:id", (req, res) => {
  db.query(
    `DELETE FROM artists WHERE id=${req.params.id}`,
    (error, results) => {
      if (error) res.send("An error occurred");
      res.send("One artist removed");
    }
  );
});

app.delete("/album/:id", (req, res) => {
  db.query(`DELETE FROM albums WHERE id=${req.params.id}`, (error, results) => {
    if (error) res.send("An error occurred");
    res.send("One album removed");
  });
});

app.delete("/playlist/:id", (req, res) => {
  db.query(
    `DELETE FROM playlists WHERE id=${req.params.id}`,
    (error, results) => {
      if (error) res.send("An error occurred");
      res.send("One playlist removed");
    }
  );
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
