import{Navbar,Nav, NavDropdown} from 'react-bootstrap'
import{NavLink}from 'react-router-dom'

export default function Navigetor() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="dark"
      className="px-4"
    >
      <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/Proyects"> Proyectos          
          </Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item as={NavLink} to="/Admin/Users">Cuentas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link  as={NavLink} to="/Login">Inicio seccion</Nav.Link>
          <Nav.Link as={NavLink} to="/Register">Registro</Nav.Link>
          <Nav.Link as={NavLink} to="/Account"> Mi cuenta</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}