import{Navbar,Nav} from 'react-bootstrap'

export default function Navigetor() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark"  bg="dark" >
      <Navbar.Brand >HOLA JS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto">
        <Nav.Link>Proyecto</Nav.Link>
        <Nav.Link>Adminitar</Nav.Link>
       </Nav>
       <Nav>
         <Nav.Link>Inicio</Nav.Link>
         <Nav.Link>Registro</Nav.Link>
         <Nav.Link> Mi cuenta</Nav.Link>
       </Nav>
      </Navbar.Collapse>
    </Navbar>

  
  );
}