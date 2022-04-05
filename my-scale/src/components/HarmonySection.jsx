import Chord from "./Chord";

const HarmonySection = ({ chords, harmony }) => {
  return (
    <div className="contentDiv">
      <h5 className="my-1 mx-2">List of chords and harmony explained</h5>
      <ol>
        {chords.map((chord, index) =>
          chord.includes("n") || chord.includes("5") ? (
            <li key={index} style={{ listStyleType: "lower-roman" }}>
              <Chord key={index} chord={chord} />
            </li>
          ) : (
            <li key={index} style={{ listStyleType: "upper-roman" }}>
              <Chord chord={chord} />
            </li>
          )
        )}
      </ol>
      <div className="mt-1 mx-2">{harmony}</div>
    </div>
  );
};

export default HarmonySection;
