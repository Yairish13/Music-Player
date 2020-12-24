import React from "react";
import {Link} from 'react-router-dom';
import { Card, Container, Col } from "react-bootstrap";

function TopArtist({ topArtist }) {
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
            <Link style={style2} to={`/artists/${topArtist.id}`}>
            <Card.Img style={style} src={topArtist.artistImg} />
            <br></br>
            {topArtist.name}
            </Link>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default TopArtist;
