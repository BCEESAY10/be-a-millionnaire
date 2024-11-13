import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ setUsername }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
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
    <div className="register">
      <input
        className="startInput"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <input
        type="password"
        className="startInput"
        placeholder="Enter password"
        ref={passwordRef}
      />

      <div className="paymentMethods">
        <p>Select Payment Method:</p>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Wave"
            checked={paymentMethod === "Wave"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Wave
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="APS"
            checked={paymentMethod === "APS"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          APS
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Yonna"
            checked={paymentMethod === "Yonna"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Yonna
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Afrimoney"
            checked={paymentMethod === "Afrimoney"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Afrimoney
        </label>
      </div>

      {!isRegistered ? (
        <button className="registerButton" onClick={handleRegister}>
          Register
        </button>
      ) : (
        <p>
          Already registered?{" "}
          <button className="startButton" onClick={handleRedirect}>
            Start Quiz
          </button>
        </p>
      )}
    </div>
  );
}
