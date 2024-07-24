import React, { useState } from 'react';
import { Collapse, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faPhone } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './categories.css';

function Categories() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#link-1", text: "Home", icon: faHome },
    { href: "#link-2", text: "Info", icon: faInfo },
    { href: "#link-3", text: "Contact", icon: faPhone },
    { href: "#link-4", text: "Link 4", icon: faHome },
    { href: "#link-5", text: "Link 5", icon: faInfo },
    { href: "#link-6", text: "Link 6", icon: faPhone },
    { href: "#link-7", text: "Link 7", icon: faHome },
    { href: "#link-8", text: "Link 8", icon: faInfo },
    { href: "#link-9", text: "Link 9", icon: faPhone },
    { href: "#link-10", text: "Link 10", icon: faHome },
    { href: "#link-11", text: "Link 11", icon: faInfo },
    { href: "#link-12", text: "Link 12", icon: faPhone },
    { href: "#link-13", text: "Link 13", icon: faHome },
    { href: "#link-14", text: "Link 14", icon: faInfo },
    { href: "#link-15", text: "Link 15", icon: faPhone },
  ];

  return (
    <>
    <div>
      <h3>Nie możesz znaleźć tego czego szukasz? <br /> Spróbuj wyszykiwania po kategoriach: </h3>
    </div>
    <div className="App">
      <header className="App-header">
        <Dropdown className="font-links">
          <Dropdown.Toggle
            as="div"
            onClick={() => setOpen(!open)}
            className="img-toggle no-caret"
          >
            <img
              src="https://via.placeholder.com/50"
              alt="Menu"
              className="img-fluid"
              style={{ cursor: 'pointer' }}
            />
          </Dropdown.Toggle>
          <Collapse in={open}>
            <Container id="example-collapse-text" className="links-container">
              <Row className="g-4">
                {links.map((link, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3} className="link-item">
                    <a href={link.href} className="text-reset">
                      <FontAwesomeIcon icon={link.icon} className="me-2" />
                      {link.text}
                    </a>
                  </Col>
                ))}
              </Row>
            </Container>
          </Collapse>
        </Dropdown>
      </header>
    </div>
    </>
  );
}

export default Categories;
