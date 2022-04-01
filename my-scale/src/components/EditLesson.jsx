import {useParams} from "react-router-dom"
import {Button} from "react-bootstrap"
import {useState, useEffect} from "react"

const EditLesson = () => {
    
    
    const [editData, SetEditData] = useState({
        name: "",
        phone: "",
        topic: "",
        datetime: "",
        guitar: false,
      });
    const editLesson = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:3000/booking/2", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editData),
          });
    
          if (response.ok) {
            SetEditData(editData)
            console.log(editData)
            // setTimeout(() => {
            //   window.location.reload();
            // }, 100);
          } else {
            alert("something went wrong");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
    return(
    <>
    <Button onClick={editLesson}> click</Button>
    </>
    )
}

export default EditLesson;