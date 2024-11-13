import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Start({ setUsername }) {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  const handleRegister = () => {
    navigate("/Register")
  }

  return (
   <>
    <div className="start">
      <input
        className="startInput"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
      Not Registered? Please register here! 
      <button className="registerButton" onClick={handleRegister}>
        Register
      </button>
    </div>
    </>
  );
}
