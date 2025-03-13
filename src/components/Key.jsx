import { useState, useEffect, useRef } from 'react';

const Key = ({ letter }) => {

  const keyStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    backgroundColor: "#232323",
    fontFamily: "sans-serif",
    fontSize: "3rem"
  };

  const pStyle = {
    display: "flex",
    textAlign: "start",
    paddingLeft: "7px",
    color: "white"
  }

  return (
    <div
      style={keyStyle} 
    >
      <div style={pStyle}
      >{letter}</div>
    </div>
  )
}

export default Key;
