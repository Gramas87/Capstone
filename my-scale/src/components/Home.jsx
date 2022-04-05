import {
  Row,
  Col,
  Container,
  DropdownButton,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import { useState } from "react";
import BackingTracksSection from "./BackingTracksSection";
import ChartSection from "./ChartSection";
import DescriptionSection from "./DescriptionSection";
import HarmonySection from "./HarmonySection";
import ImgGuitarist from "./ImgGuitarist";
import InstructionSection from "./InstructionSection";
import scales from "../modes.json";
import "./Home.css";

const Ionian = scales.data.find(({ title }) => title === "Ionian (Major)");
const Lydian = scales.data.find(({ title }) => title === "Lydian");
const Phrygian = scales.data.find(({ title }) => title === "Phrygian");
const Mixolydian = scales.data.find(({ title }) => title === "Mixolydian");
const Dorian = scales.data.find(({ title }) => title === "Dorian");
const Aeolian = scales.data.find(({ title }) => title === "Aeolian (Minor)");

const Home = () => {
  const [mode, setMode] = useState(Ionian);
  return (
    <div className="home">
      <div>
        <Container className="my-3">
          <Row>
            <Col className="mt-3 d-flex justify-content-start" md={12}>
              Welcome to My Scale! A fun and exhaustive way to learn the modes
              of the Major Scale <br />
              Learning modes can cause an endless amount of confusion. <br />
              With this page I want to help you in this process so that you can
              implement a larger array of sounds in your musical vocabulary. We will use a very common guitar key (A Major)
              to explore and learn all the modes. You can then apply what you have learned by improvising using the backing tracks and if you want to learn more you can book a lesson with me!
            </Col>
            <Col className="d-flex justify-content-center" md={3}>
              <ImgGuitarist />
            </Col>
          </Row>
          <Dropdown id="selector">
            <Dropdown.Toggle id="dropdown-basic">
              Select your mode to explore
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setMode(Ionian)}>
                Ionian (Major)
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setMode(Dorian)}>
                Dorian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setMode(Phrygian)}>
                Phrygian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setMode(Lydian)}>
                Lydian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setMode(Mixolydian)}>
                Mixolydian
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setMode(Aeolian)}>
                Aeolian (Minor)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col md={3}>
              <DescriptionSection
                title={mode.title}
                heard={mode.heard}
                description={mode.description}
              />
            </Col>
            <Col md={3}>
              <HarmonySection chords={mode.chords} harmony={mode.harmony} />
            </Col>
            <Col md={3}>
              <InstructionSection usage={mode.usage} />
            </Col>
            <Col md={3}>
              <BackingTracksSection ytlinksID={mode.ytlinksID} />
            </Col>
          </Row>
          <div className="justify-content-center">
            <ChartSection chart={mode.chart} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
