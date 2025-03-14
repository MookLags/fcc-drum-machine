import { useState, useRef, useEffect } from 'react';

const Key = ({ letter, audioSource }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [key, setKey] = useState("");
  const audioRef = useRef(null);

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
    backgroundColor: isActive ? "#555555" : "#232323",
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

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === letter.toLowerCase()) {
        setIsActive(true);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }
    const handleKeyUp = (e) => {
      if (e.key.toLowerCase() === letter.toLowerCase()) {
        setIsActive(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, [letter])

  return (
    <div>
    <audio ref={audioRef} preload="auto" src={audioSource} />
    <button
      style={keyStyle} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onClick={playSound}
    >
      <div style={pStyle}
      >{letter}</div>
    </button>
    </div>
  )
}

export default Key;
