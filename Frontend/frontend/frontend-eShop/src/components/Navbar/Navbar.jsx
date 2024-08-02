import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownButton, InputGroup, FormControl } from "react-bootstrap";

function Navbar() {
  return (
    <>
      <div className="container-md pb-1 mb-5 mt-5">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top primaryColor navbarText">
          <div className="container-fluid">
            <NavLink className="navbar-brand navbarText" to="#">
              eShop
            </NavLink>
            <div className="container d-flex justify-content-center mt-1">
              <form className="d-flex w-75">
                <InputGroup>
                  <FormControl placeholder="Czego potrzebujesz?" />
                  <DropdownButton
                    variant="primary"
                    as={InputGroup.Append}
                    title="Kategorie"
                    className="btn-blue"
                  >
                    <Dropdown.Item as={NavLink} to="#/action-1">Kategoria 1</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="#/action-2">Kategoria 2</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="#/action-3">Kategoria 3</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg ms-2 btn-blue"
                >
                  Wyszukaj
                </button>
              </form>
            </div>
            <Dropdown>
              <Dropdown.Toggle className="btn-blue btn-lg" id="dropdown-basic">
                Witaj XYZ
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as="div">
                  <NavLink to="/login" className="nav-link-custom">
                    Logowanie
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as="div">
                  <NavLink to="/register" className="nav-link-custom">
                    Nie masz jeszcze konta? <br />
                    Załóż je!
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item as="div">
                  <NavLink to="/" className="nav-link-custom">
                    Something else
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
