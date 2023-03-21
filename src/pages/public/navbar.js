import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import { CgProfile } from 'react-icons/cg';
import { MdLogout } from 'react-icons/md';
import { UserContext } from '../../context/userContext';

function BasicNavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { logoutUser } = useContext(UserContext); //calling function logoutUser from userContext using useContext
	const currentUser = localStorage.getItem('userUID');

  const logOut = () => { // calling logout function
    logoutUser();
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={handleShow}>Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {currentUser?
              <Nav.Link href="/profile"><CgProfile/></Nav.Link> : ''
            }
            {currentUser?
              <Nav.Link onClick={logOut}><MdLogout/></Nav.Link> : ''
            }
          </Nav>
        </Navbar.Collapse>

        {currentUser? 
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Dashboard</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListGroup defaultActiveKey="/home">
                <ListGroup.Item action href="/userlist">
                  Users list
                </ListGroup.Item>
                <ListGroup.Item action href="/wordapi">
                  Word API
                </ListGroup.Item>
                <ListGroup.Item action href="/weatherapi">
                  Weather API
                </ListGroup.Item>
                <ListGroup.Item action href="/movieapi">
                  Movie API
                </ListGroup.Item>
                <ListGroup.Item action href="/notes">
                  Add notes
                </ListGroup.Item>
                <ListGroup.Item action href="/calculator">
                  Calculator
                </ListGroup.Item>
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas> : ''
        }


      </Container>
    </Navbar>
  );
}

export default BasicNavBar;