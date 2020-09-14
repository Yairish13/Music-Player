const express = require('express');
const mysql = require('mysql');
const app= express();
app.use(express.json())


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'yair123',
    database:'spotify_player',
    multipleStatements: true
});


db.connect((error) =>{
    if(error) console.log(error.message);
    console.log('mySQL connected')
})

app.get('/songs', (req,res)=>{
    let sql = 'SELECT * FROM songs';
    let query = db.query(sql,(error,results) =>{
        if(error) throw error;
        res.send(results)
    })
})

app.get('/top_songs', (req,res)=>{
    let sql = 'SELECT s.title, sum(i.play_count) AS Top_Songs  FROM spotify_player.songs s  JOIN interactions i on s.id = i.songs_id GROUP BY s.title ORDER BY Top_Songs desc LIMIT 10;';
    let query = db.query(sql,(error,results) =>{
        if(error) throw error;
        res.send(results)
    })
})


app.get('/top_artists', (req,res)=>{
    let sql = 'SELECT art.name FROM spotify_player.songs s  JOIN interactions i on s.id = i.songs_id JOIN artists art on art.id=s.artist_id GROUP BY art.name ORDER BY sum(i.play_count) desc LIMIT 20;';
    let query = db.query(sql,(error,results) =>{
        if(error) throw error;
        res.send(results)
    })
})

app.get('/top_albums', (req,res)=>{
    let sql = 'SELECT a.name FROM spotify_player.songs s  JOIN interactions i on s.id = i.songs_id JOIN albums a on a.id=s.artist_id GROUP BY a.name ORDER BY sum(i.play_count) desc LIMIT 10;';
    let query = db.query(sql,(error,results) =>{
        if(error) throw error;
        res.send(results)
    })
})

app.get('/top_playlists', (req,res)=>{
    let sql = 'SELECT pl.name AS Top_Playlists FROM spotify_player.songs s JOIN interactions i on s.id = i.songs_id JOIN list_of_songs lis on lis.songs_id=s.id JOIN playlists pl on lis.playlist_id=pl.id GROUP BY pl.name ORDER BY sum(i.play_count) desc LIMIT 3;';
    let query = db.query(sql,(error,results) =>{
        if(error) throw error;
        res.send(results)
    })
})




app.get('/songs/:id' , (req,res)=>{
    let sql = `SELECT * FROM songs WHERE id=${req.params.id}`;
    let query = db.query(sql,(error,results)=>{
        if(error) throw error;
        res.send(results)
    })
})


app.get('/artists/:id' , (req,res)=>{
    let sql = `SELECT * FROM artists WHERE id=${req.params.id}`;
    let query = db.query(sql,(error,results)=>{
        if(error) throw error;
        res.send(results)
    })
})

app.get('/albums/:id' , (req,res)=>{
    let sql = `SELECT * FROM albums WHERE id=${req.params.id}`;
    let query = db.query(sql,(error,results)=>{
        if(error) throw error;
        res.send(results)
    })
})

app.get('/playlists/:id' , (req,res)=>{
    let sql = `SELECT * FROM playlists WHERE id=${req.params.id}`;
    let query = db.query(sql,(error,results)=>{
        if(error) throw error;
        res.send(results)
    })
})

app.post("/song",(req,res)=>{
    if (!req.body){
        res.status(400).send("content missing")
    }
    const {body} = req;
    const queryString = `INSERT INTO songs SET ?`;
    db.query(queryString,body , (err, result)=> {
        if (err) {
            res.send("An error occurred.");
        } else {
            res.send("1 song successfully inserted into db");
        }
      });
})

app.post("/album",(req,res)=>{
    if (!req.body){
        res.status(400).send("content missing")
    }
    const {body} = req;
    const queryString = `INSERT INTO albums SET ?`;
    db.query(queryString,body , (err, result)=> {
        if (err) {
            res.send("An error occurred.");
        } else {
            res.send("1 album successfully inserted into db");
        }
      });
})

app.post("/playlist",(req,res)=>{
    if (!req.body){
        res.status(400).send("content missing")
    }
    const {body} = req;
    const queryString = `INSERT INTO playlists SET ?`;
    db.query(queryString,body , (err, result)=> {
        if (err) {
            res.send("An error occurred.");
        } else {
            res.send("1 playlist successfully inserted into db");
        }
      });
})

app.post("/artist",(req,res)=>{
    if (!req.body){
        res.status(400).send("content missing")
    }
    const {body} = req;
    const queryString = `INSERT INTO artists SET ?`;
    db.query(queryString,body , (err, result)=> {
        if (err) {
            res.send("An error occurred.");
        } else {
            res.send("1 artist successfully inserted into db");
        }
      });
})

app.put("/song/:id",(req,res)=>{
    if (!req.body){
        res.status(400).send("content missing")
    }
    const {body} = req;
    const queryString = `UPDATE songs SET ? WHERE id=${req.params.id}`;    
    db.query(queryString,body,(err,result)=>{
        if (err) {
            res.send("An error occurred.");
        } else {
            res.send("1 song updated");
        }        
    })
})

app.put("/artist/:id",(req,res)=>{
    if (!req.body){
        res.status(400).send("content missing")
    }
    const {body} = req;
    const queryString = `UPDATE artists SET ? WHERE id=${req.params.id}`;    
    db.query(queryString,body,(err,result)=>{
        if (err) {
            res.send("An error occurred.");
        } else {
            res.send("1 artist updated");
        }        
    })
})

app.put("/album/:id",(req,res)=>{
    if (!req.body){
        res.status(400).send("content missing")
    }
    const {body} = req;
    const queryString = `UPDATE albums SET ? WHERE id=${req.params.id}`;    
    db.query(queryString,body,(err,result)=>{
        if (err) {
            res.send("An error occurred.");
        } else {
            res.send("1 album updated");
        }        
    })
})

app.put("/playlist/:id",(req,res)=>{
    if (!req.body){
        res.status(400).send("content missing")
    }
    const {body} = req;
    const queryString = `UPDATE playlists SET ? WHERE id=${req.params.id}`;    
    db.query(queryString,body,(err,result)=>{
        if (err) {
            res.send("An error occurred.");
        } else {
            res.send("1 album updated");
        }        
    })
})


app.delete("/song/:id", (req,res)=>{
    db.query(`DELETE FROM songs WHERE id=${req.params.id}`, (error,results)=>{
        if(error) res.send('An error occurred');
        res.send('One song removed')
    })
})

app.delete("/artist/:id", (req,res)=>{
    db.query(`DELETE FROM artists WHERE id=${req.params.id}`, (error,results)=>{
        if(error) res.send('An error occurred');
        res.send('One artist removed')
    })
})

app.delete("/album/:id", (req,res)=>{
    db.query(`DELETE FROM albums WHERE id=${req.params.id}`, (error,results)=>{
        if(error) res.send('An error occurred');
        res.send('One album removed')
    })
})

app.delete("/playlist/:id", (req,res)=>{
    db.query(`DELETE FROM playlists WHERE id=${req.params.id}`, (error,results)=>{
        if(error) res.send('An error occurred');
        res.send('One playlist removed')
    })
})





app.listen('3000' , () =>{
    console.log('Server started on port 3000')
})