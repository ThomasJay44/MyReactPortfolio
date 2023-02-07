import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const pages = ["About", "Contact", "Portfolio", "Resume"];

const NavBar = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      <header>
        <h1>Welcome To Thomas Maly's Full Stack Portfolio</h1>
        <Navbar bg="success" className="justify-content-center">
          {/* <Container> */}
            <Nav>
              {pages.map((topic) => (
                <Nav.Item>
                  <Nav.Link onClick={() => setCurrentPage(topic)} key={topic}>
                    {topic}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          {/* </Container> */}
        </Navbar>
      </header>
    </>
  );
};

export default NavBar;
