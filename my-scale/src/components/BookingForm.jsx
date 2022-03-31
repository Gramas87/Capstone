import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const BookingForm = () => {
  const [bookingData, SetBookingData] = useState({
    name: "",
    phone: "",
    topic: "",
    datetime: "",
    guitar: false,
  });

  const handleChange = (property, value) => {
    SetBookingData({
      ...bookingData,
      [property]: value,
    });
  };

  const submitReservation = async (e) => {
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
        }, 1000);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form onSubmit={submitReservation}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            value={bookingData.name}
            type="text"
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
        <Button variant="info" type="submit">
          Book the lesson!
        </Button>
      </Form>
    </>
  );
};

export default BookingForm;
