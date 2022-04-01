import BookingForm from "./BookingForm";
import { Col, Row, Container } from "react-bootstrap";
import BookedLesson from "./BookedLesson";

const BookLesson = () => {

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <BookingForm />
          </Col>
          <Col md={6}>
            <BookedLesson/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookLesson;
