import{Navbar,Nav, NavDropdown} from 'react-bootstrap'
import{NavLink}from 'react-router-dom'
import  rutas  from '../help/rutas';

export default function Navigetor() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="dark"
      className="px-4"
    >
      <Navbar.Brand as={NavLink} to={rutas.HomePages}>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={rutas.ProyectsPages}> Proyectos          
          </Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item as={NavLink} to={rutas.Admin.users}>Cuentas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link  as={NavLink} to={rutas.LoginPages}>Inicio seccion</Nav.Link>
          <Nav.Link as={NavLink} to={rutas.RegisterPages}>Registro</Nav.Link>
          <Nav.Link as={NavLink} to={rutas.AccountPage}> Mi cuenta</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}