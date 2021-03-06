import React from "react";
import "./topAlbum.css";
import { Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function TopAlbum({ topAlbum }) {
  const style={
    width:"250px",
    height:"200px",
    marginLeft:"20px",
    marginTop:"5px",
    boxShadow: "0px 0px 2px 2px rgba(0,0,0,0.75)"
  }

  const style2 = {
    color: "black",
    textDecoration: "none",
    cursor: "pointer"
  };
  return (
    
    <div>
      <Container>
        <Col>
          <Card>
          <Link style={style2} to={`/albums/${topAlbum.id}`}>
            <Card.Img variant="top" style={style} src={topAlbum.albumImg} />
            <br></br>
            <Card.Body>
              {topAlbum.name}
              <br></br>
              {topAlbum.Artist.name}
            </Card.Body>
            </Link>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default TopAlbum;
