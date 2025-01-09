import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ProfileLogo from "../images/mainlogo.png";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="widthcontainer fixed-top py-2 shadow">
        <img src={ProfileLogo} alt="No Display" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link
              to="/"
              className="Bewertungen text-decoration-none text-dark py-lg-0 py-3"
            >
              Top Product
            </Link>

            <Link
              to="/secondpage"
              className="Bewertungen text-decoration-none text-dark py-lg-0 py-3"
            >
              Top Product2
            </Link>

            <Link
              to="/personal"
              className="Bewertungen text-decoration-none text-dark py-lg-0 py-3"
            >
              Personal
            </Link>

            <Link
              to="/Amazonpage"
              className="Bewertungen text-decoration-none text-dark py-lg-0 py-3"
            >
              Amazon
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
