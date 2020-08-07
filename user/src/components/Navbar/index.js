import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
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

function Nav(props) {
  let [employee, setEmployee] = useState({ employee: [] });
  useEffect(() => {
    API.default()
      .then((res) => {
        console.log(res.data.results);
        setEmployee(...employee, { employee: res.data.results });
        console.log(employee.employee);
      })
      .catch((err) => console.log(err));
  }, []);

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
              onChange={props.setSearch}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;
