import Key from '../components/Key';
import Keyboard from '../components/Keyboard';
import Display from '../components/Display';
import { useState } from 'react';

const HomePage = () => {
  const [selectedKey, setSelectedKey] = useState("");

  const accentColor = "#232323";

  const divStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "130px",
    marginLeft: "-20px", 
    color: accentColor
  }

  return (
    <div id="drum-machine" style={divStyle}>
      <Keyboard onKeyPress={setSelectedKey} />
      <Display text={selectedKey} />
    </div>
  )
}

export default HomePage;
