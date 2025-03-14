import Key from './Key';
import { useState } from 'react';

const Keyboard = ({onKeyPress}) => {
  const [key, setKey] = useState("");

  const keyRowStyle = {
    display: "flex",
    flexDirection: "row",
    height: "100px",
    width: "350px"
  }

  return (
    <div>
      <div style={{...keyRowStyle, justifyContent: "flex-start"}}>
        <Key className="drum-pad" letter="q" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" name="heater 1" onClick={onKeyPress} />
        <Key className="drum-pad" letter="w" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" name="heater 2" onClick={onKeyPress} />
        <Key className="drum-pad" letter="e" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" name="heater 3" onClick={onKeyPress} />
      </div>
      <div style={{...keyRowStyle, justifyContent: "center"}}>
        <Key className="drum-pad" letter="a" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" name="heater 4" onClick={onKeyPress} />
        <Key className="drum-pad" letter="s" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" name="clap" onClick={onKeyPress} />
        <Key className="drum-pad" letter="d" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" name="open hh" onClick={onKeyPress} />
      </div>
      <div style={{...keyRowStyle, justifyContent: "flex-end"}}>
        <Key className="drum-pad" letter="z" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" name="kick n' hat" onClick={onKeyPress} />
        <Key className="drum-pad" letter="x" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" name="kick" onClick={onKeyPress} />
        <Key className="drum-pad" letter="c" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" name="closed hh" onClick={onKeyPress} />
      </div>
    </div>
  )
}

export default Keyboard;
