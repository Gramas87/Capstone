import Chord from "./Chord";

const HarmonySection = ({chords,harmony}) =>{
    return(
    <div>
       <ol >
          {chords.map(chord => chord.includes("m") ? <li style={{ listStyleType: "lower-roman" }} ><Chord chord={chord}   /></li> 
          : <li style={{ listStyleType: "upper-roman" }} ><Chord chord={chord}   /></li> )  }
       </ol>
     
    {harmony}

    </div>
 )}
 
 export default HarmonySection

