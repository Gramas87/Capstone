import { Navbar, Nav, Container } from "react-bootstrap";
import './MyNavbar.css'
const MyNavbar = () => (
  <>
    <Navbar className="nav" expand="lg" variant="light">
      <Container className="justify-content-center">
        <Nav.Link className="linksNav" href="/">Home</Nav.Link>
        <Nav.Link className="linksNav" href="/book">Book a lesson with me!</Nav.Link>
      </Container>
    </Navbar>
  </>
);

export default MyNavbar;
