import Key from './Key';
import { useState } from 'react';

const Keyboard = () => {
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
        <Key letter="Q" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" />
        <Key letter="W" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" />
        <Key letter="E" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" />
      </div>
      <div style={{...keyRowStyle, justifyContent: "center"}}>
        <Key letter="A" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" />
        <Key letter="S" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" />
        <Key letter="D" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" />
      </div>
      <div style={{...keyRowStyle, justifyContent: "flex-end"}}>
        <Key letter="Z" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" />
        <Key letter="X" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" />
        <Key letter="C" audioSource="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" />
      </div>
    </div>
  )
}

export default Keyboard;
