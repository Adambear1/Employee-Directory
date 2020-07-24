import React, { useState, useEffect } from "react";
import API from "../utils/API";
import {
  Navbar,
  ListGroup,
  Button,
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Card,
  CardColumns,
  Modal,
  Pagination,
} from "react-bootstrap";
import "./Navbar.css";

const _Navbar = () => {
  //
  const [employee, setEmployee] = useState({});
  // const [country, setCountry] = useState({});
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

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

  // const apiCall = (country) => {
  //   API.country(country)
  //     .then((res) => {
  //       setCountry(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
                    <Card className="Card" key={item.id.value}>
                      <Card.Img
                        className="cardImage"
                        variant="top"
                        src={item.picture.thumbnail}
                        alt={item.id.value}
                      />
                      {/* <Card.Body> */}
                      <Card.Title>
                        <strong
                          className="nameHover text-center"
                          onClick={handleShow}
                        >
                          {item.name.first} {"       "}
                          {item.name.last}
                        </strong>
                      </Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          {"    "}
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                          {item.email}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {"    "}
                          <i class="fa fa-phone" aria-hidden="true"></i>
                          {item.phone}
                        </ListGroup.Item>
                      </ListGroup>
                      {/* </Card.Body> */}
                      <Example />
                      <Card.Footer
                        className="apiCall"
                        // onClick={apiCall(item.location.country)}
                      >
                        <small className="text-muted">
                          {item.location.state}
                        </small>
                        {",      "}
                        <small className="text-muted">
                          {item.location.country}
                        </small>

                        <small className="text-muted float-right">
                          {"DOB:"}
                          {item.dob.date.substr(0, 10)}
                        </small>
                        {"      "}
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
              );
            })}
            <Pagination>
              <Pagination.Previous />
              <Pagination.Item> {page - 1}</Pagination.Item>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item> active{page}</Pagination.Item>
              <Pagination.Item> {page + 1}</Pagination.Item>
              <Pagination.Next></Pagination.Next>
            </Pagination>
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
