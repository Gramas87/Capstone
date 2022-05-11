import BookingForm from "./BookingForm";
import { Col, Row, Container } from "react-bootstrap";
import BookedLesson from "./BookedLesson";
import "./BookLesson.css";

const BookLesson = () => {
  return (
    <div className="book min-vh-100">
      <Container >
        <Row>
          <Col xs={12} s={12}  md={4}>
            <BookingForm />
          </Col>
          <Col className="d-flex flex-wrap" xs={12} s={12}  md={8}>
            <BookedLesson />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookLesson;
