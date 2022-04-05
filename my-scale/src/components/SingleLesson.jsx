import { Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { format, parseISO } from 'date-fns'
import './SingleLesson.css'

const convertDate = (dateString) => format(parseISO(dateString), 'yyyy-MMM-dd | HH:mm')
const SingleLesson = ({ lesson }) => {
    
  const deletelesson = () =>{
      
     fetch(`http://localhost:3000/booking/${lesson.id}`,{
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
        
    })
    alert("Lesson cancelled!")
    setTimeout(() => {
        window.location.reload();
      }, 100);};
    
  return (
    <>
      <Card id="card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{lesson.name}</Card.Title>
          <Card.Text>{lesson.datetime}</Card.Text>
          <Card.Text>{lesson.topic}</Card.Text>
          <Card.Text>{lesson.phone}</Card.Text>
          <Card.Text>
          {
              (lesson.guitar = true
                ? <p>{lesson.name} needs a guitar</p>
                : <p>{lesson.name} will bring his own guitar</p> )
            }
          </Card.Text>
         <Link to={`/book/${lesson.id}`}><Button className="btn-book" variant="primary">reschedule this lesson</Button>{" "} </Link>
          
            {" "}
            <Button className="btn-book" id="deleteBtn" onClick={deletelesson} variant="primary">cancel this lesson</Button>{" "}
          
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleLesson;
