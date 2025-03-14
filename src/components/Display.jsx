const Display = ({text}) => {
  const displayStyle = {
    display: "flex",
    color: "white",
    width: "200px",
    height: "50px",
    padding: "8px",
    backgroundColor: "#232323",
    border: "2px solid black",
    borderRadius: "5px",
    textAlign: "center",
    fontFamily: "sans-serif",
    fontWeight: "bold"
  }
  return (
    <div id="display" style={displayStyle}>
      <p style={{marginLeft: "auto", marginRight: "auto"}}>{text.toUpperCase()}</p>
    </div>
  )
}

export default Display;
