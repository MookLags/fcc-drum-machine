import Key from '../components/Key';
import Keyboard from '../components/Keyboard';
import Display from '../components/Display';

const HomePage = () => {

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
    <div style={divStyle}>
      <Keyboard />
      <Display />
    </div>
  )
}

export default HomePage;
