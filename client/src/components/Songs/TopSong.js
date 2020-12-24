import React from "react";
import ReactPlayer from "react-player";
import { Card, Container, Col } from "react-bootstrap";
import "./TopSong.css";
import { Link } from "react-router-dom";

function TopSong({ topSong, query }) {

  const style = {
    paddingRight: "25px",
    paddingLeft: "20px",
  };
  const style2 = {
    borderRadius: "25px",
    overflow: "hidden",
    // boxShadow: "0px 0px 2px 2px rgba(0,0,0,0.75)"
    boxShadow:"5px 8px 5px 0px rgba(0, 0, 0, 0.75)"
  };
  const style1 = {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
  };

  let queryLink = query ? query : `/songs/${topSong.id}?top_songs=true`;
  console.log(topSong)
  return (
    <div>
      <Container>
        <Col>
          <Card style={style} className="topSongCard">
            <ReactPlayer
              style={style2}
              width="250px"
              height="200px"
              url={topSong.youtubeLink}
            />
              <Link style={style1} to={queryLink}>

            <Card.Body>
              <br></br>
                {topSong.name}
                <br></br>
                {topSong.Artist.name}
            </Card.Body>
            </Link>

          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default TopSong;
