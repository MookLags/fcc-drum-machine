import { useState, useEffect, useRef } from 'react';

const Key = ({ letter }) => {
  const [isHovered, setIsHovered] = useState(false);

  const keyStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    border: "1px solid white",
    textDecoration: "none",
    backgroundColor: "#232323",
    fontFamily: "sans-serif",
    fontSize: "3rem",
    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
    cursor: isHovered ? "pointer" : "normal",
    transition: "0.3s ease"
  };

  const pStyle = {
    display: "flex",
    textAlign: "start",
    paddingLeft: "7px",
    color: "white"
  }

  return (
    <button
      style={keyStyle} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={pStyle}
      >{letter}</div>
    </button>
  )
}

export default Key;
