import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  const navigate = useNavigate();

  const handleSelect = (eventKey) => {
    navigate(eventKey);
  };

  return (
    <Navbar bg="light" expand="lg" onSelect={handleSelect}>
      <Container fluid>
        <Nav>
          <Nav.Link eventKey="/">
            <Navbar.Brand>Chamomile</Navbar.Brand>
          </Nav.Link>
        </Nav>
        <Nav>
          <SearchBar placeholderText={"The Beatles"} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
