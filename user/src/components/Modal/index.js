import React, { useState } from "react";
import { Button, Modal as M } from "react-bootstrap";

function Modal() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  return (
    <M show={show} onHide={handleClose}>
      <M.Header closeButton>
        <M.Title>M heading</M.Title>
      </M.Header>
      <M.Body>Woohoo, you're reading this text in a M!</M.Body>
      <M.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </M.Footer>
    </M>
  );
}

export default Modal;
