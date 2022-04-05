import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";



const BookingForm = () => {
  const [postMode, setPostMode] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [bookingId, setBookingId] = useState(null);

  const params = useParams();

  const PostModeOn = () => {
    setPostMode(true);
    setEditMode(false);
  };

  const EditModeOn = () => {
    setEditMode(true);
    setPostMode(false);
  };
  useEffect(() => {
    const id = params.id;
    setBookingId(id);

    id ? EditModeOn() : PostModeOn();
    if (id) {
      const FetchLesson = async () => {
        try {
          const response = await fetch(`https://json-server-demoday.herokuapp.com/booking/${id}`);

          if (response.ok) {
            const data = await response.json();
            SetBookingData(data);
          } else {
            alert("something went wrong");
          }
        } catch (error) {
          console.log(error);
        }
      };
      console.log(bookingData);
      FetchLesson();
    }
  }, [params]);

  const [bookingData, SetBookingData] = useState({
    name: "",
    phone: "",
    topic: "Music Theory",
    datetime: "",
    guitar: false,
  });

  const handleChange = (property, value) => {
    SetBookingData({
      ...bookingData,
      [property]: value,
    });
  };

  const submitLesson = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("`https://json-server-demoday.herokuapp.com/booking", {
        method: "POST",
        body: JSON.stringify(bookingData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Lesson booked!");
        SetBookingData(bookingData);
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editLesson = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://json-server-demoday.herokuapp.com/booking/${bookingId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (response.ok) {
        SetBookingData(bookingData);
        console.log(bookingData);
        setTimeout(() => {
          window.location.assign("/book");
        }, 100);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    editMode ? editLesson(e) : submitLesson(e);
  };

  return (
    <>
       {editMode ? (<h4>
        Reschedule lesson nr. {bookingId}
       </h4>) : <h4> Compile this form and book the lesson </h4> }

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            value={bookingData.name}
            type="text"
            
            required={true}
            placeholder="enter name"
            onChange={(e) => {
              handleChange("name", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            id="phone"
            value={bookingData.phone}
            type="number"
            required={true}
            placeholder="enter phone number"
            onChange={(e) => {
              handleChange("phone", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select the lesson topic</Form.Label>
          <Form.Control
            as="select"
            id="topic"
            required={true}
            value={bookingData.topic}
            onChange={(e) => {
              handleChange("topic", e.target.value);
            }}
          >
            <option>Music Theory</option>
            <option>Technique</option>
            <option>Timing</option>
            <option>Phrasing</option>
            <option>Speed</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date and Time</Form.Label>
          <Form.Control
            id="dateTime"
            value={bookingData.datetime}
            type="datetime-local"
            required={true}
            onChange={(e) => {
              handleChange("datetime", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Check
          id="guitar"
          checked={bookingData.guitar}
          type="checkbox"
          label="I can't bring my own guitar!"
          onChange={(e) => {
            handleChange("guitar", e.target.checked);
          }}
        />

        {editMode ? (
          <Button  className="btn-book" type="submit">Confirm your reschedule</Button>
        ) : (
          <Button className="btn-book" type="submit">Book the lesson!</Button>
        )}
      </Form>
    </>
  );
};

export default BookingForm;
