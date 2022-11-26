import { useEffect } from "react";

import "./App.css";
import DrumPad from "./drumPad.component";
import drumPadData from "./drumPadData";
import keyCodes from "./keyCodes";

function App() {
  function clickHandler(event, keyName = null) {
    if (!keyName) {
      keyName = event.target.innerText;
    }
    const audioEl = document.getElementById(keyName);
    if (audioEl) {
      audioEl.play();
      const displayEl = document.getElementById("display");
      let soundName;
      drumPadData.forEach((data) => {
        if (data.key === keyName) {
          soundName = data.soundName;
        }
      });
      displayEl.innerText = soundName;
    }
  }

  function keyDownHandler(event) {
    const keysArray = Object.keys(keyCodes);
    keysArray.forEach((key) => {
      if (event.keyCode === keyCodes[key]) {
        clickHandler(event, key);
      }
    });
  }

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("click", clickHandler);
  }, []);

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="drum-pads">
          {drumPadData.map(({ key, soundName, soundUrl }) => {
            return (
              <DrumPad
                key={key}
                keyName={key}
                soundName={soundName}
                soundUrl={soundUrl}
              />
            );
          })}
        </div>
        <div id="display"></div>
      </div>
    </div>
  );
}

export default App;
