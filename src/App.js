import "./App.css";
import Right from "./Components/Right";
import Left from "./Components/Left";
import StartGame from "./Components/StartGame";
import { useQuiz } from "./QuizContext/quizContext";
function App() {
  const {
    state: { userName, timeout,priceMoney },
  } = useQuiz();
  return (
    <div className="main">
      {!userName ? (
        <StartGame />
      ) : (
        <>
          {timeout ? (
            <h1 className="endText"> You Earned INR {priceMoney}</h1>
          ) : (
            <>
              {" "}
              <div className="leftsec">
                <Left />
              </div>
              <div className="rightsec">
                <Right />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
