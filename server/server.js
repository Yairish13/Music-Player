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

















































