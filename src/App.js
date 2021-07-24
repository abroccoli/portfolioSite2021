import resume from './images/AnthonyBroccoliResume.pdf';
import './App.css';

function App() {
  return (
    <div className="App">
      <a href={resume} target='_blank' rel='noopener noreferrer'>
        resume
      </a>
    </div>
  );
}

export default App;
