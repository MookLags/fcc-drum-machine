import { useState, useRef, useEffect } from 'react';

const Key = ({ letter, audioSource, name, onClick }) => {
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
      console.log(audioRef.current);
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => console.log("Audio not playing", error));
    }
    onClick(name);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === letter.toLowerCase()) {
        setIsActive(true);
        onClick(name);
        console.log(audioRef.current);
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
  }, [])

  return (
    <div className="drum-pad" onClick={playSound} id={name}>
      <audio className="clip" id={letter.toUpperCase()} ref={audioRef} src={audioSource} />
      <button
        style={keyStyle} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        
      >
        <div style={pStyle}
        >{letter.toUpperCase()}</div>
      </button>
    </div>
  )
}

export default Key;
