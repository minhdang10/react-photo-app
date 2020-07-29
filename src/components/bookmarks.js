import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Bookmarks = (props) => {
  const imageList = props.images.map((img, ind) => {
    if (ind % 4 === 0) {   //displaying selective indices
      return (
        <Col xs={6} md={4} lg={3}>
          <Image className="image" src={require(`${img.filename}`)}/>
        </Col>
      );
    } 
    else {
      return '';
    }
  });

  return (
    <div>
      <h2>Bookmarks</h2>
      <Row>{imageList}</Row>
    </div>
  );
};

export default Bookmarks;