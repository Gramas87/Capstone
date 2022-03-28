import Carousel from "react-bootstrap/carousel";

const BackingTracksSection = ({ytlinksID}) => (
  <div>
    <Carousel interval={null} >
     {ytlinksID.map(id=> <Carousel.Item>
      <iframe width="300" height="300" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" 
      frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Carousel.Item>)}
  
  
</Carousel>
  </div>
);

export default BackingTracksSection;

