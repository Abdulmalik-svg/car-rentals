import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router';

function NaviBar() {
  return (
    <Navbar expand="lg" className="bg-slate-600 flex justify-center gap-36 ">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="no-underline w-24 h-24 mb-5"><img src="" alt="VOLTA" /></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/history" className=" no-underline "id='baba'>History</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/gallery" className=" no-underline " id='baba'>Gallery</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/blog" className=" no-underline " id='baba'>Blog</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Ourcustomers" className=" no-underline "id='baba' >Our customers</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/login" className=" no-underline " id='baba'>Contact us</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaviBar;