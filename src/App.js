import "./App.css";
import Right from "./Components/Right";
import Left from "./Components/Left";
function App() {
  return (
    <div className="main">
      <div className="leftsec">
        <Left />
      </div>
      <div className="rightsec">
        <Right />
      </div>
    </div>
  );
}

export default App;
