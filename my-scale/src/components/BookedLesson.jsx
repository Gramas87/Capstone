import { useState, useEffect } from "react";
import SingleLesson from "./SingleLesson";

const BookedLesson = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    FetchLessons();
  }, []);

  const FetchLessons = async () => {
    try {
      const response = await fetch("https://json-server-demoday.herokuapp.com/booking");

      if (response.ok) {
        const data = await response.json();
        setLessons(data);
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
      {lessons.length > 1 ? (
        lessons.map((lesson) => (
          <SingleLesson lesson={lesson} key={lesson.id} />
        ))
      ) : (
        <p>There are no booked lessons</p>
      )}
      </>
  );
};

export default BookedLesson;
