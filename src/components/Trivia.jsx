import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("bg-gray-700 text-white");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("bg-yellow-500 text-white");
    delay(3000, () => {
      setClassName(a.correct ? "bg-green-500 text-white" : "bg-red-500 text-white");
    });

    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-90px)] mr-10 text-white px-4" style={{background: '#020230'}}>
      <div className="text-2xl font-bold mb-6 text-center">{question?.question}</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full max-w-xl">
        {question?.answers.map((a) => (
          <div
            className={`p-4 text-center rounded-lg cursor-pointer transition-all duration-300 ${
              selectedAnswer === a
                ? className
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
