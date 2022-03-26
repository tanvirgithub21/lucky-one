import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import CardAndSelectedaria from './component/CardAndSelectedaria/CardAndSelectedaria';
import QuestionAnswer from './component/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardAndSelectedaria />
      <QuestionAnswer />
    </div>
  );
}

export default App;
