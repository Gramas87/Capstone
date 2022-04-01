import { Card, Button } from "react-bootstrap";
import {Link,useParams} from "react-router-dom"
import { format, parseISO } from 'date-fns'

const convertDate = (dateString) => format(parseISO(dateString), 'yyyy-MMM-dd | HH:mm')
const SingleLesson = ({ lesson }) => {
    
  const deletelesson =  () =>{
      
     fetch(`http://localhost:3000/booking/${lesson.id}`,{
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
        
    })
    alert("Lesson deleted!")
    setTimeout(() => {
        window.location.reload();
      }, 100);};
    
  return (
    <>
      <Card style={{ width: "18rem" }}>
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
         <Link to={`/book/${lesson.id}`}><Button variant="primary">reschedule your lesson</Button>{" "} </Link>
          
            {" "}
            <Button onClick={deletelesson} variant="primary">delete your lesson</Button>{" "}
          
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleLesson;
