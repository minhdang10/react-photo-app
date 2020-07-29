import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import Landing from "./components/landing";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      logIn: "invisible",
      id: "",
      showed: false,
      loginBtnVisibility: "visible",
    };
  }

  isShowed = () => {
    this.setState({
      showed: true,
    });
  };

  isClosed = () => {
    this.setState({
      showed: false,
    });
  };

  isSubmitted = (event) => {
    event.preventDefault();
    this.setState({
      logIn: "visible",
      loginBtnVisibility: "invisible",
    });
    this.isClosed();
  };

  getID = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Container fluid className="loginContainer">
          <Row>
            <Col xs={6} md={4} lg={3}>
              <Button size="lg" block variant="primary" onClick={this.isShowed} className={this.state.loginBtnVisibility} id="loginBtn">
                Login
              </Button>
            </Col>

            <Col id="welcome-text" xs={6} md={4} lg={9}>
              <h4 className={this.state.logIn}>Welcome, {this.state.id}!</h4>
            </Col>
          </Row>
        </Container>

        <Modal showed={this.state.showed} onHide={this.isClosed}>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Login ID:</Form.Label>
                <Form.Control type="email" placeholder="Enter Login ID" onChange={this.getID}/>
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={this.isSubmitted}>
              Submit
            </Button>

            <Button variant="secondary" onClick={this.isClosed}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div class={this.state.logIn}>
          <Landing/>
        </div>
      </div>
    );
  }
}