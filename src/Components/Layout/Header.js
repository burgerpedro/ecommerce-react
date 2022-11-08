import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/data";
import styles from "./Header.module.css";

export const Header = () => {
  const { lista } = useContext(DataContext);

  let navigate = useNavigate();

  let cartNavBar = 0;

  const itenscart = () => {
    for (let index = 0; index < lista.length + 1; index++) {
      cartNavBar = index;
    }
  };
  function handleClick() {
    navigate("/carrinho");
  }

  return (
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className={styles.social_list}>
          <img src="https://evanston.libnet.info/images/events/evanston/Anime%20Club%20Logo.png" width={"70px"}></img>
          <strong><span> Fun tasia</span></strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={styles.social_list}>
            <span>Home</span>
            </Nav.Link>
            <Nav.Link href="/sobrenos" className={styles.social_list}>
              <span>Contato</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/login" className={styles.social_list}>
             <span>Login</span> 
            </Nav.Link>
            <Nav.Link>
              <FaCartPlus
                style={{ color: "white" }}
                onClick={() => handleClick()}
              />
              <span style={{ color: "white" }}>
                {itenscart()}
                {cartNavBar}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};
