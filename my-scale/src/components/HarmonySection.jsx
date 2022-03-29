import Chord from "./Chord";

const HarmonySection = ({ chords, harmony }) => {
  return (
    <div>
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

      {harmony}
    </div>
  );
};

export default HarmonySection;
