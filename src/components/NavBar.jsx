import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Chain Store</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/videoGames"} className="link">Video Juegos</Link>
            &nbsp;&nbsp;
            <Link to={"/consoles"} className="link">Consolas</Link>
            &nbsp;&nbsp;
            <Link to={"/controls"} className="link">Controles</Link>
            &nbsp;&nbsp;
            <Link to={"/accessories"} className="link">Accesorios</Link>
            &nbsp;&nbsp;
            <Link to={"/login"} className="link">Login</Link>
            &nbsp;&nbsp;
            <Link to={"/car"} className="link">Car</Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;