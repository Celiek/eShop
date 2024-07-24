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
            <a className="navbar-brand navbarText" href="#">
              eShop
            </a>
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
                    <Dropdown.Item href="#/action-1">Kategoria 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Kategoria 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Kategoria 3</Dropdown.Item>
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
                <Dropdown.Item>
                  <NavLink to="/login" className="nav-link-custom">
                    Logowanie
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <NavLink to="/register" className="nav-link-custom">
                    Nie masz jeszcze konta ? <br />
                    Załóż je!
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
