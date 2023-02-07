import React from "react";
import Nav from "react-bootstrap/Nav";

const pages = ["About", "Contact", "Portfolio", "Resume"];

const NavBar = ({ currentPage, setCurrentPage }) => {
  return (
    <header>
      <Nav className="justify-content-center">
        {pages.map((topic) => (
          <Nav.Item>
            <Nav.Link onClick={() => setCurrentPage(topic)} key={topic}>
              {topic}
              </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </header>
  );
};

export default NavBar;
