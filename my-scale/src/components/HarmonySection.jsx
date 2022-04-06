import Chord from "./Chord";

const HarmonySection = ({ chords, harmony }) => {
  return (
    <div className="contentDiv">
      <h5 className="my-2 mx-3">List of chords and harmony explained</h5>
      <ol>
        {chords.map((chord, index) =>
          chord.includes("n") || chord.includes("5") ? (
            <li className="mx-3" key={index} style={{ listStyleType: "lower-roman" }}>
              <Chord key={index} chord={chord} />
            </li>
          ) : (
            <li className="mx-3" key={index} style={{ listStyleType: "upper-roman" }}>
              <Chord chord={chord} />
            </li>
          )
        )}
      </ol>
      <div className="my-1 mx-3">{harmony}</div>
    </div>
  );
};

export default HarmonySection;
