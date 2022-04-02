import { Navbar, Nav, Form, Image, Container } from "react-bootstrap";

const MyNavbar = () => (
  <>
    <Navbar expand="lg" variant="light" bg="dark">
      <Container className="justify-content-center">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/book">Book a lesson with me!</Nav.Link>
      </Container>
    </Navbar>
  </>
);

export default MyNavbar;
