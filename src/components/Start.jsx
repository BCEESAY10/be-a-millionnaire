import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Start({ setUsername }) {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  const handleRegister = () => {
    navigate("/Register");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-90px)] mr-10 text-white" style={{background: '#020230'}}>
      <input
        className="w-64 p-3 mb-4 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <button
        className="px-4 py-2 mb-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
        onClick={handleClick}
      >
        Start
      </button>
      <p className="mb-2">Not Registered? Please register here!</p>
      <button
        className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
}
