import { useState } from "react"

const ChangeColor = () => {
  const [color, setColor] = useState("")

  const setBgColor = () => { 
alert( color )
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button style={{ backgroundColor: color }} onClick={setBgColor}>
        Change color
      </button>
    </div>
  );
}

export default ChangeColor
