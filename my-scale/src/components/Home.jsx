import { Row, Col, Container, DropdownButton, InputGroup, Dropdown } from "react-bootstrap";
import BackingTracksSection from "./BackingTracksSection";
import ChartSection from "./ChartSection";
import ControlCarousel from "./ControlCarousel";
import DescriptionSection from "./DescriptionSection";
import HarmonySection from "./HarmonySection";
import ImgGuitarist from "./ImgGuitarist";
import InstructionSection from "./InstructionSection";

const Home = () => (
  <>
    <Container className="my-5">
      <Row>
        <Col className="d-flex justify-content-start" md={9}>
         Welcome to My Scale! A fun and exhaustive way to learn the modes of the Major Scale <br />   
        Learning modes can cause an endless amount of confusion. <br />
        With this page I want to help you in this process so that you can implement a larger array of sounds in your musical vocabulary
        </Col>
        <Col className="d-flex justify-content-center" md={3}>
        <ImgGuitarist/>
        </Col>
        <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Mode</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose your mode to explore</option>
    <option value="1">Ionian (major)</option>
    <option value="2">Dorian</option>
    <option value="3">Phrygian</option>
    <option value="4">Lydian</option>
    <option value="5">Mixolydian</option>
    <option value="6">Aeolian (minor)</option>
  </select>
</div>

      </Row>
    </Container>
    <Container className="mt-5">
      <Row>
        <Col md={3}>
          <DescriptionSection />
        </Col>
        <Col md={3}>
          <HarmonySection />
        </Col>
        <Col md={3}>
          <InstructionSection />
        </Col>
        <Col md={3}>
          <ControlCarousel />
        </Col>
      </Row>
      <div className="justify-content-center">
        <ChartSection />
      </div>
    </Container>
  </>
);

export default Home;
