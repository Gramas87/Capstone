import YoutubeLink from "./YoutubeLink";
import Carousel from "react-bootstrap/carousel";

const BackingTracksSection = () => (
  <div>
    <Carousel interval={null} >
  <Carousel.Item>
    <iframe width="420" title="o" height="315"
src="https://www.youtube.com/embed/-kdKmDyYtIw">
</iframe>
    </Carousel.Item>
  <Carousel.Item>
  <iframe width="420" title="ii" height="315"
src="https://www.youtube.com/embed/SDxj4pBcYfU">
</iframe>
</Carousel.Item>
  
</Carousel>
  </div>
);

export default BackingTracksSection;
