import {Col, Row, Container} from "react-bootstrap"
import "./MyFooter.css";
const YoutubeLink = () =>(
  
    <Container className="footer">
      
      <div className="d-flex justify-content-evenly">
       <div className="mb-2 text-white">
          Created by Giorgio Colliva
       </div>
       <div>
       <a
              href="https://www.instagram.com/gcoll1va/"
              target="_blank"
              rel="noopener noreferrer"

            >
              <div className="mb-2 text-white">instagram</div>
            </a>
       </div> 
      </div>
      
    </Container>
 )
 
 export default YoutubeLink