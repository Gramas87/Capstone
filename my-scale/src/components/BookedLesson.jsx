import { useState, useEffect } from "react";
import {Spinner} from "react-bootstrap"
import SingleLesson from "./SingleLesson";

const BookedLesson = () => {
  const [lessons, setLessons] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchLessons();
  }, []);

  const FetchLessons = async () => {
    try {
      const response = await fetch("https://myscale-json-server.herokuapp.com/booking");

      if (response.ok) {
        const data = await response.json();
        setLessons(data);
        setIsLoading(false)
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(lessons);

  return (
    <>
     {IsLoading ? (<Spinner animation="border" variant="success" />) : (lessons.length > 0 ? (
        lessons.map((lesson) => (
          <SingleLesson lesson={lesson} key={lesson.id} />
        ))
      ) : ( 
        <p>There are no booked lessons</p>
      ))}
     
      </>
  );
};

export default BookedLesson;
