import Key from '../components/Key';
import Keyboard from '../components/Keyboard';

const HomePage = () => {

  const accentColor = "#232323";

  const divStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "100px",
    marginLeft: "-20px", 
    color: accentColor
  }

  return (
    <div style={divStyle}>
      <Keyboard />
      <div style={{display: "flex"}}>
        Output container will go here
      </div>
    </div>
  )
}

export default HomePage;
