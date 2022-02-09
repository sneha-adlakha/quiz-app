import './App.css';
import Right from "./Components/Right";
import Left from './Components/Left';
function App() {
  return (
    <div className="main">
      <div className="leftsec">
      Questions
      </div>
      <div className="rightsec">
      <Left/>
      </div>
    </div>
  );
}

export default App;
