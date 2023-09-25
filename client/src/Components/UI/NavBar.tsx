/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import authHooks from '../../Features/Redux/hooks/authHooks';

export default function NavBar(): JSX.Element {
  const { signOutActionHandler } = authHooks();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = (): void => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownClose = (): void => {
    setDropdownOpen(false);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="navbar-brand" to="/">
              Elbrus-Kids
            </Link>
            <Link className="nav-link" to="/personal">
              Профиль
            </Link>
            <Link className="nav-link" to="/course">
              Учиться
            </Link>
            <Link className="nav-link" to="/course">
              Блог для родителей
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown
              title="Навигация"
              id="basic-nav-dropdown"
              show={dropdownOpen}
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownClose}
            >
              <Link to="/signup" className="dropdown-item">
                Регистрация
              </Link>
              <Link to="/signin" className="dropdown-item">
                Войти
              </Link>
              <Link to="/personal" className="dropdown-item">
                Профиль
              </Link>
              <NavDropdown.Divider />
              <Link onClick={signOutActionHandler} to="#action/3.4" className="dropdown-item">
                Выйти
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}