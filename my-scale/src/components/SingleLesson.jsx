import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import "./SingleLesson.css";

const convertDate = (dateString) =>
  format(parseISO(dateString), "yyyy-MMM-dd | HH:mm");
const SingleLesson = ({ lesson }) => {
  const deletelesson = () => {
    fetch(`https://json-server-demoday.herokuapp.com/booking/${lesson.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });
    alert("Lesson cancelled!");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  

  return (
    <>
      <Card
        id="card"
        style={{ width: "14rem", height: "26rem", margin: "6px" }}
      >
        <Card.Body>
          <Card.Title>
            <div className="cardId">{lesson.name}<span> booking n.</span> {lesson.id}</div>
          </Card.Title>
          <Card.Text>{lesson.datetime}</Card.Text>
          <Card.Text>Topic: {lesson.topic}</Card.Text>
          <Card.Text>Contact: {lesson.phone}</Card.Text>
          {
           lesson.guitar ? (
             <Card.Text> <div className="cardId">{lesson.name} needs a guitar </div> </Card.Text> 
            ) : (
              <Card.Text><div className="cardId">{lesson.name} will bring his guitar </div></Card.Text> 
            ) 
          }
          <Link to={`/book/${lesson.id}`}>
            <Button className="btn-book" variant="primary">
              reschedule this lesson
            </Button>{" "}
          </Link>{" "}
          <Button className="btn-book" id="deleteBtn" onClick={deletelesson}>
            cancel this lesson
          </Button>{" "}
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleLesson;
