import BookingForm from "./BookingForm";
import { Col, Row, Container } from "react-bootstrap";
import BookedLesson from "./BookedLesson";
import "./BookLesson.css";

const BookLesson = () => {
  return (
    <div className="book">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <BookingForm />
          </Col>
          <Col xs={12} md={8}>
            <BookedLesson />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookLesson;
