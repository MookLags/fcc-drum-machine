import Key from './Key';

const Keyboard = () => {
  const keyRowStyle = {
    display: "flex",
    flexDirection: "row",
    height: "100px",
    width: "350px"
  }
  return (
    <div>
      <div style={{...keyRowStyle, justifyContent: "flex-start"}}>
        <Key letter="Q" />
        <Key letter="W" />
        <Key letter="E" />
      </div>
      <div style={{...keyRowStyle, justifyContent: "center"}}>
        <Key letter="A" />
        <Key letter="S" />
        <Key letter="D" />
      </div>
      <div style={{...keyRowStyle, justifyContent: "flex-end"}}>
        <Key letter="Z" />
        <Key letter="X" />
        <Key letter="C" />
      </div>
    </div>
  )
}

export default Keyboard;
