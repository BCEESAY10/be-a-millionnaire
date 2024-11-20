import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ setUsername }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isRegistered, setIsRegistered] = useState(true);
  const inputRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (inputRef.current.value && passwordRef.current.value && paymentMethod) {
      setUsername(inputRef.current.value);
      // Registration logic goes here
      setIsRegistered(true);
      alert("Registered successfully! Redirecting to the quiz...");
      navigate("/Start");
    } else {
      alert("Please enter your name, password, and select a payment method.");
    }
  };

  const handleRedirect = () => {
    navigate("/Start");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-90px)] mr-10 text-white" style={{background: '#020230'}}>
      <input
        className="w-64 p-3 mb-4 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <input
        type="password"
        className="w-64 p-3 mb-4 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter password"
        ref={passwordRef}
      />

      <div className="mb-6 text-center">
        <p className="mb-2">Select Payment Method:</p>
        <div className="flex flex-col space-y-2">
          {["Wave", "APS", "Yonna", "Afrimoney"].map((method) => (
            <label key={method} className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
      </div>

      {!isRegistered ? (
        <button
          className="px-4 py-2 mb-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
          onClick={handleRegister}
        >
          Register
        </button>
      ) : (
        
        <p className="mb-2 text-center">
          Already has an account? <br></br>
          <button
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
            onClick={handleRedirect}
          >
            Start Quiz
          </button>
        </p>
      )}
    </div>
  );
}
