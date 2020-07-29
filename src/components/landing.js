import React from "react";
import "../App.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import Profile from "./profile";
import loadImage from "./loadImage";
import showImage from "./showImage";
import Bookmarks from "./bookmarks";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.loadImages()    
    };
  }

  loadImages = () => {
    let img = loadImage();
    let images = [];
    for (let i = 0; i < img.length; i++) {
      let image = new showImage(img[i].id, img[i].src);
      images[i] = image;
    }
    return images;
  };

  logout = () => {
    this.setState({
      containerVisibility: "invisible"
    })
  };

  render() {
    const imageList = this.state.images.map((img) => {
      return (
        <Col xs={6} md={4} lg={3}>
          <Image className="image" src={require(`${img.filename}`)}/>
        </Col>
      );
    });

    return (
      <div className="App">
          <Container fluid className={this.state.containerVisibility} >
            <Navbar bg="light" expand="lg" > 
              <Navbar.Brand href="#home">React Photo App</Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#profile">User Profile</Nav.Link>
                  <Nav.Link href="#bookmarks">Bookmarks</Nav.Link>
                </Nav>
                
                <Button variant="primary" onClick={this.logout}>Logout</Button>
              </Navbar.Collapse>
            </Navbar>
            
            <Row>{imageList}</Row>
          </Container>
          <div id="profile">
            <Profile images={this.state.images} />
          </div>
          <div id="bookmarks">
            <Bookmarks images={this.state.images} />
          </div>
        </div>
    );
  }
}

export default Landing;