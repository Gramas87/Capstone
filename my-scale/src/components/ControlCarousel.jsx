import {useState} from "react"
import Carousel from "react-bootstrap/carousel";


const ControlCarousel = ()=>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
       <Carousel.Item >
    <iframe  alt="First slide" width="420" title="o" height="315"
src="https://www.youtube.com/embed/-kdKmDyYtIw">
   
</iframe>
    </Carousel.Item >
  <Carousel.Item >
  <iframe  alt="Second slide" width="420" title="ii" height="315"
src="https://www.youtube.com/embed/SDxj4pBcYfU">
</iframe>
</Carousel.Item>
    </Carousel>
  );
}

export default ControlCarousel