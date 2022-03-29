import Carousel from "react-bootstrap/carousel";
import "./BackingTracksSection.css"

const BackingTracksSection = ({ytlinksID}) => {
  
  return(
  <div>
    <Carousel interval={null}>
     {ytlinksID.map((id,index )=> <Carousel.Item key={index}>
      <iframe width="300" id="player" height="300" src={`https://www.youtube.com/embed/${id}?enablejsapi=1`} title="YouTube video player" 
        ></iframe>
    </Carousel.Item>)}
  
  
</Carousel>
  </div>

)};

const player = () => {
  
}


export default BackingTracksSection;

