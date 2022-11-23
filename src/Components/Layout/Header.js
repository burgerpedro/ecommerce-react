import React, {useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useParams,useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/data";


export const Header = ()=> {
 
  const {lista} = useContext(DataContext);

  let navigate = useNavigate()
  
  function handleClick(){
    navigate("/pedidos")
  }

  console.log('222',lista);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Lolja </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">SobreNos</Nav.Link>
            <NavDropdown title="Cadastro" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">categoria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                produtos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">clientes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Pedidos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
            <Nav.Link >
          <FaCartPlus style={{color: 'white'}} onClick ={() =>handleClick()}/>
            <h2 style={{color: 'white'}}>{lista.lenght}</h2>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

