import React, { useEffect, useState } from "react";
import {
  Modal,
  Container as C,
  CardColumns,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
import API from "../../utils/API";

function Container(props) {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    API.default().then((res) => {
      setEmployeeList(res.data.results);
    });
  }, []);

  console.log(props.search);
  return (
    <div>
      <Modal />
      <C>
        {employeeList.length > 1 ? (
          <CardColumns>
            {employeeList.map((item) => {
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
                          // onClick={handleShow}
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
                      {/* <Example /> */}
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
            {/* <Pagination>
            <Pagination.Previous />
            <Pagination.Item> {page - 1}</Pagination.Item>
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item> active{page}</Pagination.Item>
            <Pagination.Item> {page + 1}</Pagination.Item>
            <Pagination.Next></Pagination.Next>
          </Pagination> */}
          </CardColumns>
        ) : (
          <div>No items found</div>
        )}

        <Col>1 of 1</Col>
      </C>
    </div>
  );
}
export default Container;
