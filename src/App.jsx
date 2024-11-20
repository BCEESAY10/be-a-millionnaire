import "./App.css";
import { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Register from "./components/Register";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("D 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        { text: "Phone", correct: false },
        { text: "Watches", correct: true },
        { text: "Food", correct: false },
        { text: "Cosmetic", correct: false },
      ],
    },
    {
      id: 2,
      question: "When was Facebook launched?",
      answers: [
        { text: "2004", correct: true },
        { text: "2005", correct: false },
        { text: "2006", correct: false },
        { text: "2007", correct: false },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movie?",
      answers: [
        { text: "Johnny Depp", correct: false },
        { text: "Leonardo DiCaprio", correct: false },
        { text: "Denzel Washington", correct: false },
        { text: "Daniel Radcliffe", correct: true },
      ],
    },
    {
      id: 4,
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Lisbon", correct: false },
      ],
    },
    {
      id: 5,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      id: 6,
      question: "In which continent is Egypt located?",
      answers: [
        { text: "Asia", correct: false },
        { text: "Europe", correct: false },
        { text: "Africa", correct: true },
        { text: "South America", correct: false },
      ],
    },
    {
      id: 7,
      question: "What is the boiling point of water?",
      answers: [
        { text: "90°C", correct: false },
        { text: "100°C", correct: true },
        { text: "110°C", correct: false },
        { text: "120°C", correct: false },
      ],
    },
    {
      id: 8,
      question: "Who invented the telephone?",
      answers: [
        { text: "Albert Einstein", correct: false },
        { text: "Alexander Graham Bell", correct: true },
        { text: "Isaac Newton", correct: false },
        { text: "Nikola Tesla", correct: false },
      ],
    },
    {
      id: 9,
      question: "What is the currency of Japan?",
      answers: [
        { text: "Yen", correct: true },
        { text: "Won", correct: false },
        { text: "Dollar", correct: false },
        { text: "Peso", correct: false },
      ],
    },
    {
      id: 10,
      question: "What is the largest mammal in the world?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
        { text: "Great White Shark", correct: false },
        { text: "Blue Whale", correct: true },
      ],
    },
    {
      id: 11,
      question: "How many continents are there on Earth?",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
      ],
    },
    {
      id: 12,
      question: "Who wrote 'Romeo and Juliet'?",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "J.K. Rowling", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Mark Twain", correct: false },
      ],
    },
    {
      id: 13,
      question: "Which ocean is the largest?",
      answers: [
        { text: "Atlantic", correct: false },
        { text: "Indian", correct: false },
        { text: "Arctic", correct: false },
        { text: "Pacific", correct: true },
      ],
    },
    {
      id: 14,
      question: "Which planet is known for its rings?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: false },
        { text: "Saturn", correct: true },
        { text: "Venus", correct: false },
      ],
    },
    {
      id: 15,
      question: "Who was the first President of the United States?",
      answers: [
        { text: "Abraham Lincoln", correct: false },
        { text: "George Washington", correct: true },
        { text: "Thomas Jefferson", correct: false },
        { text: "John Adams", correct: false },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "D 100" },
        { id: 2, amount: "D 200" },
        { id: 3, amount: "D 300" },
        { id: 4, amount: "D 500" },
        { id: 5, amount: "D 1,000" },
        { id: 6, amount: "D 2,000" },
        { id: 7, amount: "D 4,000" },
        { id: 8, amount: "D 8,000" },
        { id: 9, amount: "D 16,000" },
        { id: 10, amount: "D 32,000" },
        { id: 11, amount: "D 64,000" },
        { id: 12, amount: "D 125,000" },
        { id: 13, amount: "D 250,000" },
        { id: 14, amount: "D 500,000" },
        { id: 15, amount: "D 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (

    <Router>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/start" className="hover:underline">Start</Link>
          </li>
          <li>
            <Link to="/quiz" className="hover:underline">Quiz</Link>
          </li>
          <li>
            <Link to="/register" className="hover:underline">Register</Link>
          </li>
        </ul>
      </nav>


      <div className="app min-h-[85vh] flex text-white" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), #020230), url("https://cdn6.f-cdn.com/contestentries/2363114/64715125/65b2727d75c29_thumb900.jpg") center` }}>
        <div className="w-3/4">
          <Routes>
            <Route
              index
              path="/"
              element={
                <>
                  <h1 className="text-center bg-gray-500 text-white font-bold text-[35px]" style={{marginRight: '160px', paddingLeft: '16px'}}>Be a Millionnaire</h1>
                  <p className="bg-gray-500 text-white text-[20px]" style={{marginRight: '160px', paddingLeft: '16px'}}>
                  "Be-A-Millionaire" is a quiz-based game inspired by the popular TV show from the early 2000s. This interactive platform offers players the chance to test their knowledge and win money by answering a series of questions. It features a simple user interface starting with a login page, where returning users can sign in, and new users can register. During registration, a one-time fee of D200 is required, payable through a mobile money app - WAVE, APS, Afrimoney or Yonna.

Once registered, players can jump into the game and answer timed questions, with 30 seconds allocated per question. For every correct answer, they win D100 and move on to the next question, progressing toward the ultimate goal of earning substantial rewards. "Be-A-Millionaire" combines the thrill of competition with the simplicity of mobile payments, providing an engaging experience where knowledge directly translates into winnings.
                  </p>
                </>
              }
            />
            <Route path="start" element={<Start setUsername={setUsername} />} />
            <Route
              path="quiz"
              element={
                <>
                  <div className="flex flex-col lg:flex-row">
                    <div className="ml-24 w-[50px] h-[50px] bg-gray-200 text-gray-900 flex items-center justify-center text-[20px] font-bold rounded-[20px]">
                      <Timer
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia
                      data={data}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      setTimeOut={setTimeOut}
                    />
                  </div>
                </>
              }
            />
            <Route
              path="register"
              element={<Register setUsername={setUsername} />}
            />
          </Routes>
        </div>
        <div className="w-1/4 mt-12">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li
                key={m.id}
                className={
                  questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
              >
                <span className="w-1/3 text-[18px] font-thin mr-2">{m.id}</span>
                <span className="text-[20px] font-semibold">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        <>
          <div>
            {timeOut && (
              <RestartButton
                earned={earned}
                cb={() => {
                  setUsername(null);
                  setQuestionNumber(1);
                  setTimeOut(false);
                }}
              />
            )}
          </div>
        </>
      </div>
    </Router>

  );
}

export default App;

function RestartButton({ cb, earned }) {
  const navigate = useNavigate();

  const handleRestart = () => {
    cb();
    navigate("/Start");
  };

  return (
    <>
      <h1 className="h-max bg-blue-500 text-white p-4">You earned: {earned}</h1>
      <button onClick={handleRestart}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Restart Game
      </button>
    </>
  );
}
