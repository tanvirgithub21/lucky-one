import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import CardAndSelectedaria from './component/CardAndSelectedaria/CardAndSelectedaria';
import QuestionAnswer from './component/QuestionAnswer/QuestionAnswer';
import ShowChooseItem from './component/ShowChooseItem/ShowChooseItem';

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
