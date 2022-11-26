// import keyCodes from "./keyCodes";
import "./drumPad.styles.scss";

function DrumPad(props) {
  return (
    <div className="drum-pad" key={props.keyName} id={props.soundName}>
      <button className="drum-pad-button">
        {props.keyName}
        <audio
          className="clip"
          src={props.soundUrl}
          preload="auto"
          id={props.keyName}
        ></audio>
      </button>
    </div>
  );
}

export default DrumPad;
