import React, { useState, useEffect } from "react";
import API from "../utils/API";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Card,
  CardColumns,
  Modal,
} from "react-bootstrap";
import "./Navbar.css";

const _Navbar = () => {
  //
  const [employee, setEmployee] = useState({});
  const [country, setCountry] = useState({});

  useEffect(() => {
    API.default()
      .then((res) => {
        console.log(res);
        setEmployee(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  function handleInputChange(e) {
    setEmployee({ first: e.target.value });
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function Example() {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  const apiCall = (country) => {
    API.country(country)
      .then((res) => {
        setCountry(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Employee Management Systems</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              name="search"
              onChange={handleInputChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        {employee.length ? (
          <CardColumns>
            {employee.map((item) => {
              return (
                <Row>
                  <Col>
                    <Card key={item.id.value}>
                      <Card.Img
                        variant="top"
                        src={item.picture.large}
                        alt={item.id.value}
                      />
                      <Card.Body>
                        <Card.Title>
                          <strong className="nameHover" onClick={handleShow}>
                            {item.name.first} {"       "}
                            {item.name.last}
                          </strong>
                        </Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </Card.Text>
                      </Card.Body>
                      <Example />
                      <Card.Footer
                        className="apiCall"
                        onClick={apiCall(item.location.country)}
                      >
                        <small className="text-muted">
                          {item.location.state}
                        </small>
                        {",      "}
                        <small className="text-muted">
                          {item.location.country}
                        </small>

                        <small className="text-muted float-right">
                          {item.dob.date.substr(0, 10)}
                        </small>
                        {"      "}
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          </CardColumns>
        ) : (
          <div>No items found</div>
        )}

        <Col>1 of 1</Col>
      </Container>
    </div>
  );
};

export default _Navbar;
