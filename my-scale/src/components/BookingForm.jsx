import { useState,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import {useLocation, useParams} from "react-router-dom"

// BookLesson viene renderizzato sia da /book sia da /book/:id
// tu puoi capire se sei in create on in edit mode dalla presenza di :id
// 


const BookingForm = () => {

const [postMode, setPostMode] = useState(false)
const [editMode, setEditMode] = useState(false)

const [bookingId, setBookingId] = useState(null)

const location = useLocation()
const params = useParams()

const PostModeOn = () => {
  setPostMode(true)
  setEditMode(false)
}

const EditModeOn = () => {
  setEditMode(true) 
  setPostMode(false)
}
useEffect(() => {
  const id = params.id
  setBookingId(id)
  id ? EditModeOn() : PostModeOn()
  if(id) {
    // fare una fetch singola ai dettagli dell'evento con quell'id
    // una volta che hai i dettagli setti lo stato del form
  }
},[params])

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
      let response = await fetch("http://localhost:3000/booking", {
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
  return (
    <>
      <Form onSubmit={submitLesson}>
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
              handleChange("topic", e.currentOption.value);
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
              handleChange("guitar", e.target.checked)  
          }}
        />
        <Button type="submit">
          Book the lesson!
        </Button>
      </Form>
    </>
  );
};

export default BookingForm;
