import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Profile = (props) => {
  const imageList = props.images.map((item, ind) => {
    if (ind % 2 === 0) { //displaying selective indices
      return (
        <Col xs={6} md={4} lg={3}>
          <Image className="image" src={require(`${item.filename}`)}/>
        </Col>
      );
    } 
    else {
        return "";
    }
  });

  return (
    <div>
      <h2>User Profile</h2>
      <Row>{imageList}</Row>
    </div>
  );
};

export default Profile;